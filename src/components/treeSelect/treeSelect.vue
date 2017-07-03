<template>
<div class="tree-select">
	<div class="country-remove" v-show="currentCountry" @click.stop="clearSubInput">x</div>  <!--还原 国家列表 按钮-->
	<el-collapse v-if="tagData" v-model="activeNames" @change="handleChange" ref="treeSelect">
		<el-collapse-item v-for="(Value,Key,Index) in tagData" v-if="Value.itemLevel==0" :title="Key" :name="Key" :key="Index">
			<!-- <h2 style="color:red">{{Value.multiSelect==0?'单选':'多选'}}</h2> -->

			<ul>
				<li v-for="(item,index) in Value.item" :key="index" :name="item.name" :type="Key" v-show="Key!='国家'||!currentCountry||item.name==currentCountry">
					<input :type="Value.multiSelect==0?'radio':'checkbox'" :name="Key" :id="item.name" :catalogType="Key" @click="onTagClick" />
					<label :for="item.name">{{item.name}}</label>
				</li>
			</ul>

			<el-collapse v-if="Key=='国家'" v-show="currentCountry" ref="countrySubTree" >
				<el-collapse-item title="产区" ref="regionTree" name="产区" v-show="regionList.length">
					<ul>
						<li v-for="(item,index) in regionList" :key="index">
							<input :type="item.multiSelect==0?'radio':'checkbox'" :name="item.name" :id="item.name" catalogType="region" :parent="item.parent" @click="onTagClick" />
							<label :for="item.name">{{item.name}}</label>
						</li>
					</ul>
				</el-collapse-item>

				<el-collapse-item title="产地等级" ref="levelTree" name="产地等级" v-show="levelList.length">
					<ul>
						<li v-for="(item,index) in levelList" :key="index">
							<input :type="item.multiSelect==0?'radio':'checkbox'" :name="item.name" :id="item.name" catalogType="level" :parent="item.parent" @click="onTagClick" />
							<label :for="item.name">{{item.name}}</label>
						</li>
					</ul>
				</el-collapse-item>

				<el-collapse-item title="酒款风格" ref="styleTree" name="酒款风格" v-show="styleList.length">
					<ul>
						<li v-for="(item,index) in styleList" :key="index">
							<input :type="item.multiSelect==0?'radio':'checkbox'" :name="item.name" :id="item.name" catalogType="style" :parent="item.parent" @click="onTagClick" />
							<label :for="item.name">{{item.name}}</label>
						</li>
					</ul>
				</el-collapse-item>
			</el-collapse>
	  </el-collapse-item>

	</el-collapse>
</div>
</template>
<script type="text/ecmascript-6">
import {getRightSideData} from 'api/api'
import eventHub from 'assets/js/eventHub'  // 全局事件总线

export default {
	name: 'treeSelect',
	data() {
		return {
			tagData:null,
			currentCountry:'',
			activeNames:[],//'残糖量'
			regionList:[], // 产区子列表
			styleList:[],  // 风格子列表
			levelList:[],	// 等级子列表
		}
	},
	methods: {
		handleChange(){

		},
		getSublist(){  //联动 生成  子列表
			this.regionList = []; this.levelList = []; this.styleList=[];
			let tempRegionList = []; let tempLevelList =[]; let tempStyleList = [];
			this.currentCountry = event.target.getAttribute("id");
			tempRegionList = this.tagData['产区'].item.filter((region)=>{
				return region.parent == this.currentCountry
			})
			tempLevelList = this.tagData['产地等级'].item.filter((level)=>{
				return level.parent == this.currentCountry
			})
			tempStyleList = this.tagData['酒款风格'].item.filter((style)=>{
				return style.parent == this.currentCountry
			})
			this.regionList = tempRegionList
			this.levelList =  tempLevelList
			this.styleList =  tempStyleList

		},


		onTagClick(){  // 点击选项 的函数
			if(event.target.getAttribute("catalogType")=="国家"){
					this.getSublist();
					let subCheckInput = this.$refs.countrySubTree[0].$el.querySelectorAll('.tree-select input:checked');
					for (var i = 0; i < subCheckInput.length; i++) {
						subCheckInput[i].checked=false;
					}
			}
			let selectInput = this.$refs.treeSelect.$el.querySelectorAll('.tree-select input:checked');
			let textArr = [] // 每次点击初始化一个数组
			selectInput.forEach((item)=>{
				textArr.push(item.id)
			})
			this.$emit("tagSelect",textArr); // 派发此组件的事件 给 父组件监听
			eventHub.$emit("tagSelect") // 派发全局事件 给兄弟组件监听
		},

		cleanSelectInput(){  // 清除 全部选中项 选中项
			let checkedInp = this.$refs.treeSelect.$el.querySelectorAll('.tree-select input:checked')//
			for (var i = 0; i < checkedInp.length; i++) {
				checkedInp[i].checked=false;
			}
			this.currentCountry = '';
		},

		removeSingleInput(text,index){  // 监听 topTag 选中标签的点击事件 取消 侧边栏的选中状态 （取消单个选中项）
			let checkedInp = this.$refs.treeSelect.$el.querySelectorAll('.tree-select input:checked');
			for (var i = 0; i < checkedInp.length; i++) {
				if(checkedInp[i].id==text){
					checkedInp[i].checked=false;
				}
			}
			if(index==0){  // 判断 点击 的标签 index 是否是第一个
				if(this.currentCountry){  // 判断是否第一个标签为国家
					this.currentCountry = '';
				}
			}
		},

		clearSubInput(){  // 清空与国家关联的 选中 input
			let subCheckInput = this.$refs.countrySubTree[0].$el.querySelectorAll('.tree-select input:checked');
			for (var i = 0; i < subCheckInput.length; i++) {
				subCheckInput[i].checked=false;
			}
			if(this.currentCountry){
				this.currentCountry = '';
			}
		}
	},
	created(){
		getRightSideData().then((res)=>{
			this.tagData = res.data;
		})
	},
};
</script>
<style scoped lang="less" rel="stylesheet/less">

.tree-select{
	position: relative;
	.country-remove{
		position: absolute;
		width:20px;
		height:20px;
		right:25px;
		top: 65px ;
		border-radius: 50%;
		text-align: center;
		line-height: 18px;
		font-size: 12px;
		font-weight: bold;
		color:white;
		background: #5290F7;
		cursor:pointer;
		z-index: 5;
	}
	li{
		padding: 3px 0;
	}
	input{
		display:none;

	}
	label{
		display: inline-block;
		width:100%;
		height:40px;
		line-height: 40px;
		padding:0 10px;
		cursor:pointer;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	input:checked + label{
		border:1px dashed #ccc;
	}


}

</style>
