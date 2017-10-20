
// 将组建挂载到dom上
const mount = (component, wrapper) => {
	wrapper.appendChild(component._renderDOM())
	component.onStateChange = (oldEl, newEl) => {
		wrapper.insertBefore(newEl, oldEl)
		wrapper.removeChild(oldEl)
	}
}

// 将dom字符串转为dom
const createDOMFromString = (domString) => {
	const div = document.createElement('div')
	div.innerHTML = domString
	return div
}
 
// 组建公共类
class Component {
	constructor(props = {}) {
		this.props = props
	}

	setState(state) {
		const oldEl = this.el
		this.state = state
		this.el = this._renderDOM()
		if (this.onStateChange) this.onStateChange(oldEl, this.el)
	}

	_renderDOM() {
		this.el = createDOMFromString(this.render())
		if (this.onClick) {
			this.el.addEventListener('click', this.onClick.bind(this), false)
		}
		return this.el
	}
}

class LikeButton extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isLiked: false
		}
	}

	onClick() {
		this.setState({
			isLiked: !this.state.isLiked
		})
	}

	render() {
		return `
		<button id="like-btn">
				<span class="like-text">${this.state.isLiked ? '取消' : '点赞' }</span>
				<span>👍</span>
		</button>
		`
	}
}
const wrapper = document.querySelector('.wrapper')

mount(new LikeButton(), wrapper)