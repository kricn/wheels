//全局定时器
var timer = null;

//图片列表
let images = [
	{url: './images/0.jpg', alt: '0'},
	{url: './images/1.png', alt: '1'},
	{url: './images/2.jpg', alt: '2'},
	{url: './images/3.jpg', alt: '3'},
];

//当前显示的图片
let currentImage = 0;

//鼠标按下的坐标位置
let mousePoint = {
	x: 0,
	y: 0
}
//图片偏移量
let offsetLeft = 0;
//图片移动速度
let speed = 1
//图片偏移步数
let step = 600

//创建图片列表
const creteImageList = (ele, images) => {
	images.forEach(item => {
		let list_item = document.createElement('li');
		let img = document.createElement('img');
		img.src = item.url
		list_item.appendChild(img)
		ele.appendChild(list_item)
	})
}

window.onload = () => {
	//获取容器
	const container = document.querySelector('.container');

	//创建图片标志点
	let dots = document.createElement('ul');
	dots.className = 'dots'
	images.forEach((item, index) => {
		let list_item = document.createElement('li');
		if ( index === 0) {
			list_item.className = 'active'
		}
		dots.appendChild(list_item)
	})

	//创建图片列表
	let list = document.createElement('ul');
	let copyList = document.createElement('ul');
	list.className = 'list';
	copyList.className = 'copyList';
	creteImageList(list, images);
	creteImageList(copyList, images);

	//追加到容器
	container.appendChild(list);
	container.appendChild(copyList);
	container.appendChild(dots);
}