<template>
	<div>
		<aside>
			<p>清除所有选择</p>
			<div class="position">
				<div class="block">
					<span class="demonstration">您的所在区域:</span>
					<el-cascader
							expand-trigger="hover"
							:options="options"
							v-model="selectedOptions2"
							@change="handleChange">
					</el-cascader>
				</div>
			</div>
			<span class="zuixin">只显示</span>
			<el-checkbox id="check1">最新推荐</el-checkbox>
			<div class="guojia">
				<div class="block">
					<span class="demonstration">国家</span>
					<el-cascader
							expand-trigger="hover"
							:options="options"
							v-model="selectedOptions2"
							@change="handleChange">
					</el-cascader>
				</div>
			</div>
			<div class="chanqu">
				<div class="block">
					<span class="demonstration">产区</span>
					<el-cascader
							expand-trigger="hover"
							:options="options"
							v-model="selectedOptions2"
							@change="handleChange">
					</el-cascader>
				</div>
			</div>
			<div class="jiage">
				<div class="jia1">
					<p>价格</p>
					<el-radio-group v-model="radio2" class="baicai">
						<p><el-radio :label="3">白菜价</el-radio></p>
						<p><el-radio :label="4">0-199元</el-radio></p>
						<p><el-radio :label="5">200-499元</el-radio></p>
						<p><el-radio :label="6">500-1999元</el-radio></p>
						<p><el-radio :label="7">10000元以上</el-radio></p>
					</el-radio-group>
				</div>
				<div class="jia2">
					<input type="text" value=""> 至 <input type="text" value="">元
					<input type="submit" value="搜" class="sou">
				</div>
			</div>
			<div class="yijianxuanjiu">
				<div class="paihang">
					<!--一键清除树-->
					<el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick" ></el-tree>
					<!--树-->
				</div>
			</div>
			<div class="leibie">
				<span>类别</span>
				<div class="leixing">
					<!--酒类型树状-->
					<el-tree :data="data2" :props="defaultProps2" @node-click="handleNodeClick2"></el-tree>
				</div>
				<div class="tang">
					<!--含糖量树状-->
					<el-tree :data="data3" :props="defaultProps3" @node-click="handleNodeClick3"></el-tree>
				</div>
				<div class="pingfen">
					<!--评分树状-->
					<el-tree :data="data4" :props="defaultProps4" @node-click="handleNodeClick4"></el-tree>
				</div>
				<div class="saishi">
					<!--赛事奖项树状-->
					<el-tree :data="data5" :props="defaultProps5" @node-click="handleNodeClick5"></el-tree>
				</div>
				<div class="gengduo">
					<p>更多</p>
					<!--更多树状-->
					<el-tree :data="data6" :props="defaultProps6" @node-click="handleNodeClick6"></el-tree>
				</div>
			</div>
		</aside>
	</div>
</template>
<script type="text/ecmascript-6">
	export default {
		name: 'asideV',
		data() {
			return {
				check1: true,
				radio2: 5,
				props: {

				},
				count: 1,
				options: [{
					value: 'guojia',
					label: '国家',
					children: [{
						value: 'shengfen',
						label: '省份',
						children: [{
							value: 'chengshi',
							label: '城市'
						}, {
							value: 'fankui',
							label: '反馈'
						}, {
							value: 'xiaolv',
							label: '效率'
						}, {
							value: 'kekong',
							label: '可控'
						}]
					}, {
						value: 'daohang',
						label: '导航',
						children: [{
							value: 'cexiangdaohang',
							label: '侧向导航'
						}, {
							value: 'dingbudaohang',
							label: '顶部导航'
						}]
					}]
				}, {
					value: 'zujian',
					label: '组件',
					children: [{
						value: 'basic',
						label: 'Basic',
						children: [{
							value: 'layout',
							label: 'Layout 布局'
						}, {
							value: 'color',
							label: 'Color 色彩'
						}, {
							value: 'typography',
							label: 'Typography 字体'
						}, {
							value: 'icon',
							label: 'Icon 图标'
						}, {
							value: 'button',
							label: 'Button 按钮'
						}]
					}, {
						value: 'form',
						label: 'Form',
						children: [{
							value: 'radio',
							label: 'Radio 单选框'
						}, {
							value: 'checkbox',
							label: 'Checkbox 多选框'
						}, {
							value: 'input',
							label: 'Input 输入框'
						}, {
							value: 'input-number',
							label: 'InputNumber 计数器'
						}, {
							value: 'select',
							label: 'Select 选择器'
						}, {
							value: 'cascader',
							label: 'Cascader 级联选择器'
						}, {
							value: 'switch',
							label: 'Switch 开关'
						}, {
							value: 'slider',
							label: 'Slider 滑块'
						}, {
							value: 'time-picker',
							label: 'TimePicker 时间选择器'
						}, {
							value: 'date-picker',
							label: 'DatePicker 日期选择器'
						}, {
							value: 'datetime-picker',
							label: 'DateTimePicker 日期时间选择器'
						}, {
							value: 'upload',
							label: 'Upload 上传'
						}, {
							value: 'rate',
							label: 'Rate 评分'
						}, {
							value: 'form',
							label: 'Form 表单'
						}]
					}, {
						value: 'data',
						label: 'Data',
						children: [{
							value: 'table',
							label: 'Table 表格'
						}, {
							value: 'tag',
							label: 'Tag 标签'
						}, {
							value: 'progress',
							label: 'Progress 进度条'
						}, {
							value: 'tree',
							label: 'Tree 树形控件'
						}, {
							value: 'pagination',
							label: 'Pagination 分页'
						}, {
							value: 'badge',
							label: 'Badge 标记'
						}]
					}, {
						value: 'notice',
						label: 'Notice',
						children: [{
							value: 'alert',
							label: 'Alert 警告'
						}, {
							value: 'loading',
							label: 'Loading 加载'
						}, {
							value: 'message',
							label: 'Message 消息提示'
						}, {
							value: 'message-box',
							label: 'MessageBox 弹框'
						}, {
							value: 'notification',
							label: 'Notification 通知'
						}]
					}, {
						value: 'navigation',
						label: 'Navigation',
						children: [{
							value: 'menu',
							label: 'NavMenu 导航菜单'
						}, {
							value: 'tabs',
							label: 'Tabs 标签页'
						}, {
							value: 'breadcrumb',
							label: 'Breadcrumb 面包屑'
						}, {
							value: 'dropdown',
							label: 'Dropdown 下拉菜单'
						}, {
							value: 'steps',
							label: 'Steps 步骤条'
						}]
					}, {
						value: 'others',
						label: 'Others',
						children: [{
							value: 'dialog',
							label: 'Dialog 对话框'
						}, {
							value: 'tooltip',
							label: 'Tooltip 文字提示'
						}, {
							value: 'popover',
							label: 'Popover 弹出框'
						}, {
							value: 'card',
							label: 'Card 卡片'
						}, {
							value: 'carousel',
							label: 'Carousel 走马灯'
						}, {
							value: 'collapse',
							label: 'Collapse 折叠面板'
						}]
					}]
				}, {
					value: 'ziyuan',
					label: '资源',
					children: [{
						value: 'axure',
						label: 'Axure Components'
					}, {
						value: 'sketch',
						label: 'Sketch Templates'
					}, {
						value: 'jiaohu',
						label: '组件交互文档'
					}]
				}],
				selectedOptions: [],
				selectedOptions2: [],
				data: [{
					label: '一键选酒',
					children: [{
						label: '排行榜',
						children: [
							{label: '红葡萄酒top100'},
							{label: '白葡萄酒top100'},
							{label: '桃红葡萄酒top100'},
							{label: '起泡酒top100'},
							]
					}, {
						label: '名庄名酒',
						children: [
							{label: '法国1855列级酒庄'},
							{label: '法国苏岱和巴萨克列级酒庄'},
							{label: '法国格列夫列级酒庄'},
							{label: '法国梅多克中级酒庄'},
							{label: '法国艺术酒庄'},
							{label: '法国圣埃美隆列级酒庄'},
						]
					},{
						label: '获奖好酒',
						children: [
							{label: '获奖金奖的葡萄酒'},
							{label: '获奖银奖的葡萄酒'},
							{label: '获奖铜奖的葡萄酒'},
						]
					},{
						label: '高分靓酒',
						children: [
							{label: '品酒大师5星好评'},
							{label: '品酒大师4.5星好评'},
							{label: '品酒大师4星好评'},

						]
					}]
				}],
				defaultProps: {
					children: 'children',
					label: 'label'
				},
				data2: [{
					label: '酒类型',
					children: [
						{label: '红葡萄酒'},
						{label: '白葡萄酒'},
						{label: '起泡酒'},
						{label: '桃红葡萄酒'},
						{label: '甜葡萄酒'},
						{label: '加强型'},
						{label: '干邑'},
						]
				}],
				defaultProps2: {
					children: 'children',
					label: 'label'
				},
				data3: [{
					label: '含糖量',
					children: [
						{label: '干型'},
						{label: '半干型'},
						{label: '半甜型'},
						{label: '甜型'},
					]
				}],
				defaultProps3: {
					children: 'children',
					label: 'label'
				},
				data4: [{
					label: '评分机构',
					children: [
						{label: '葡萄酒倡导家/RP'},
						{label: '葡萄酒观察家/WS'},
						{label: '葡萄酒爱好者/WE'},
						{label: '酵鉴/Decanter'},
						{label: '杰西斯罗宾逊/JR'},
					]
				}],
				defaultProps4: {
					children: 'children',
					label: 'label'
				},
				data5: [{
					label: '赛事奖项',
					children: [
						{label: '酵鉴大奖赛'},
						{label: '布鲁塞尔大赛'},
						{label: '葡萄酒暨烈酒赛'},
						{label: '国际挑战赛'},
						{label: '巴黎农业大赛'},
						{label: '波多尔大奖赛'},
						{label: '马贡大赛'},
						{label: 'G100评选赛'},
					]
				}],
				defaultProps5: {
					children: 'children',
					label: 'label'
				},
				data6: [{
					label: '酒庄',
					children: [
						{label: '酒庄',
							children: [{label: '111酒庄'},{label: '222酒庄'},{label: '333酒庄'}]
						},
					]
				}],
				defaultProps6: {
					children: 'children',
					label: 'label'
				}
			};
		},
		methods: {
			//三级联动
			handleChange(value) {
//				console.log(value);
			},
			handleNodeClick(data) {
//				console.log(data);
			},
			handleNodeClick2(data) {
//				console.log(data);
			},
			handleNodeClick3(data) {
//				console.log(data);
			},
			handleNodeClick4(data) {
//				console.log(data);
			},
			handleNodeClick5(data) {
//				console.log(data);
			},
			handleNodeClick6(data) {
//				console.log(data);
			}
		}
	};
</script>
<style lang="less" rel="stylesheet/less">
	aside{
		position: absolute;
		width:19%;
		height:auto;
		/*height:3500px;*/
		background-color: #fff;
		padding: 1%;
		.position{
			width:100%;
			.block{
				.el-input{
					>.el-input__icon{  right: 40px;  }
					.el-input__inner{  width:80%;  }
				}
				.el-cascader__label{
					width:80%;
				}
			}
		}
		.zuixin{
			display: block;
			margin-top: 10px;
		}
		.guojia{
			width:100%;
			margin-top: 10px;
			.block{
				.el-input{
					>.el-input__icon{  right: 40px;  }
					.el-input__inner{  width:80%;  }
				}
				.el-cascader__label{
					width:80%;
				}
			}
		}
		.chanqu{
			width:100%;
			margin-top: 10px;
			.block{
				.el-input{
					>.el-input__icon{  right: 40px;  }
					.el-input__inner{  width:80%;  }
				}
				.el-cascader__label{
					width:80%;
				}
			}
		}
		.jiage{
			margin-top: 15px;
			.jia1{
				>p{
					margin-bottom: 15px;
				}
				.baicai{
					>p{
						margin-bottom: 5px;
					}
				}
			}
			.jia2{
				>input{
					width:30%;
					border: 1px solid #999;
					border-radius: 5px;
				}
				.sou{
					margin: 5px 25%;
				}
			}
		}
		.yijianxuanjiu{
			margin-top: 20px;
			.paihang{
				.el-tree{
					border: none;
					>.el-tree-node{
						>.el-tree-node__children{
							display: block!important;
						}
					}
				}
			}
		}
		.leibie{
			margin-top: 20px;
			.leixing{
				margin:15px 0;
				.el-tree{
					border: none;
					>.el-tree-node{
					}
				}
			}
			.tang{
				margin-bottom: 15px;
				.el-tree{
					border: none;
					>.el-tree-node{
					}
				}
			}
			.pingfen{
				margin-bottom: 15px;
				.el-tree{
					border: none;
					>.el-tree-node{
					}
				}
			}
			.saishi{
				margin-bottom: 15px;
				.el-tree{
					border: none;
					>.el-tree-node{
					}
				}
			}
			.gengduo{
				p{
					margin-bottom: 15px;
				}
				.el-tree{
					border: none;
					>.el-tree-node{
					}
				}
			}
		}
	}
	.el-cascader-menus{
		.el-cascader-menu{
			min-width: 0px;
		}
	}
</style>
