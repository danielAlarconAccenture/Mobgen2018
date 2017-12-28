import { h, Component } from 'preact';
import anime from 'animejs';
import styled from 'styled-components';

export default class Fireworks extends Component {
	init() {
		this.canvasEl = document.querySelector('.fireworks');
		this.ctx = this.canvasEl.getContext('2d');
		this.numberOfParticules = 30;
		this.pointerX = 0;
		this.pointerY = 0;
		this.tap =
			'ontouchstart' in window || navigator.msMaxTouchPoints
				? 'touchstart'
				: 'mousedown';
		this.colors = ['#FE5000 ', '#FA832A ', '#FE5000 ', '#FA832A '];
		this.renderAnimation = anime({
			duration: Infinity,
			update: () => {
				this.ctx.clearRect(0, 0, this.canvasEl.width, this.canvasEl.height);
			}
		});

		document.addEventListener(
			this.tap,
			e => {
				this.renderAnimation.play();
				this.updateCoords(e);
				this.animateParticules(this.pointerX, this.pointerY);
			},
			false
		);

		this.centerX = window.innerWidth / 2;
		this.centerY = window.innerHeight / 2;

		this.setCanvasSize();
		window.addEventListener('resize', this.setCanvasSize, false);
	}

	setCanvasSize() {
		console.log('setting canvas size');
		this.canvasEl.width = window.innerWidth * 2;
		this.canvasEl.height = window.innerHeight * 2;
		this.canvasEl.style.width = `${window.innerWidth}px`;
		this.canvasEl.style.height = `${window.innerHeight}px`;
		this.canvasEl.getContext('2d').scale(2, 2);
	}

	updateCoords(e) {
		this.pointerX = e.clientX || e.touches[0].clientX;
		this.pointerY = e.clientY || e.touches[0].clientY;
	}

	setParticuleDirection(p) {
		const angle = anime.random(0, 360) * Math.PI / 180;
		const value = anime.random(50, 180);
		const radius = [-1, 1][anime.random(0, 1)] * value;
		return {
			x: p.x + radius * Math.cos(angle),
			y: p.y + radius * Math.sin(angle)
		};
	}

	createParticule(x, y) {
		const p = {};
		p.x = x;
		p.y = y;
		p.color = this.colors[anime.random(0, this.colors.length - 1)];
		p.radius = anime.random(16, 32);
		p.endPos = this.setParticuleDirection(p);
		p.draw = () => {
			this.ctx.beginPath();
			this.ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, true);
			this.ctx.fillStyle = p.color;
			this.ctx.fill();
		};
		return p;
	}

	createCircle(x, y) {
		const p = {};
		p.x = x;
		p.y = y;
		p.color = '#FFF';
		p.radius = 0.1;
		p.alpha = 0.5;
		p.lineWidth = 6;
		p.draw = () => {
			this.ctx.globalAlpha = p.alpha;
			this.ctx.beginPath();
			this.ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, true);
			this.ctx.lineWidth = p.lineWidth;
			this.ctx.strokeStyle = p.color;
			this.ctx.stroke();
			this.ctx.globalAlpha = 1;
		};
		return p;
	}

	renderParticule(anim) {
		for (let i = 0; i < anim.animatables.length; i++) {
			anim.animatables[i].target.draw();
		}
	}

	animateParticules(x, y) {
		const circle = this.createCircle(x, y);
		const particules = [];
		for (let i = 0; i < this.numberOfParticules; i++) {
			particules.push(this.createParticule(x, y));
		}
		anime
			.timeline()
			.add({
				targets: particules,
				x(p) {
					return p.endPos.x;
				},
				y(p) {
					return p.endPos.y;
				},
				radius: 0.1,
				duration: anime.random(1200, 1800),
				easing: 'easeOutExpo',
				update: this.renderParticule
			})
			.add({
				targets: circle,
				radius: anime.random(80, 160),
				lineWidth: 0,
				alpha: {
					value: 0,
					easing: 'linear',
					duration: anime.random(600, 800)
				},
				duration: anime.random(1200, 1800),
				easing: 'easeOutExpo',
				update: this.renderParticule,
				offset: 0
			});
		return new Promise(resolve => resolve);
	}

	constructor() {
		super();
		this.init = this.init.bind(this);
		this.setCanvasSize = this.setCanvasSize.bind(this);
		this.updateCoords = this.updateCoords.bind(this);
		this.setParticuleDirection = this.setParticuleDirection.bind(this);
		this.createParticule = this.createParticule.bind(this);
		this.createCircle = this.createCircle.bind(this);
		this.renderParticule = this.renderParticule.bind(this);
		this.animateParticules = this.animateParticules.bind(this);
	}

	componentDidMount() {
		this.init();
	}

	shouldComponentUpdate() {
		return false;
	}

	render() {
		const StyledCanvas = styled.canvas`
			position: absolute;
			left: 0;
			right: 0;
			bottom: 0;
			top: 0;
		`;

		return <StyledCanvas className="fireworks" />;
	}
}
