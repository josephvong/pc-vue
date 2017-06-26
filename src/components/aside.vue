<template>
	<div>
		<aside>
			<p>清除所有选择</p>
			<p class="test"></p>

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
				radio2: 5,
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
		>.test{

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
			}
		}
	}
	.el-cascader-menus{
		.el-cascader-menu{
			min-width: 0px;
		}
	}
</style>
