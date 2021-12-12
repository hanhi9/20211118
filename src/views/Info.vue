<template>
	<div class="info">
		<form @submit.prevent="submitForm">
			<div>
				<label for="email">email</label>
				<input type="text" v-model="email">{{email}}
			</div>
			<div>
				<label for="name">성함</label>
				<input type="text" id="name" v-model="name" />
			</div>
			<div>
				<label for="password">비밀번호</label>
				<input type="password" id="password" v-model="password" />
			</div>
			<div>
				<label for="passwordConfirm">비밀번호 확인</label>
				<input type="password" id="passwordConfirm" v-model="passwordConfirm" />
        <button>확인</button>
			</div>
			<div>
				<label for="position">직책</label>
				<input type="text" id="position" v-model="position" />
			</div>
			<div>
				<label for="teamName">팀 이름</label>
				<input type="text" id="teamName" v-model="teamName" />
			</div>
			<button @click="toggleShow" type="submit">회원가입
      </button>
       <span v-if="isShowing">성공</span>
       <span v-else>가입중</span>
       <h3 v-for="animal in animails" :key="animal">{{animal}}</h3>
       <button v-bind:disabled="isButtonDisabled">Button</button>

    </form>
	</div>
</template>

<script>
export default {
	name: 'Info',
	data() {
		return {
			email:'',
			name: '',
      		inPsw: '',
			pw: '',
			passwordConfirm: '',
      		isShowing: false,
			position: '',
			teamName: '',
      		animails:['100','200','300','400'],
      		isButtonDisabled:true
		};
	},
	methods: {
		submitForm() {
			console.log('dd');
		},
    created() {
      //email = $route.params.email;
      console.log("1111111111");
    },
    getData() {
       //email:{{ $route.params.email }}
    },
    toggleShow() {
      this.isShowing = !this.isShowing;
    } ,
	props: {
            email: {
                type: String,
                default : ''
            },
            pw: {
                type: Number,
                default: 0
            }
        }
	},
	
};
</script>

<style scoped></style>