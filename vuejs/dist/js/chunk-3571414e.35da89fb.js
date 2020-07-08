(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3571414e"],{d40f:function(s,e,t){"use strict";t.r(e);var a=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{class:s.ismobile?"content mx-1 mt-2 px-0":"content ml-5 mt-2 mr-5 pl-5 pr-5"},[t("div",{staticClass:"loading"},[t("loading",{attrs:{active:s.loading,"can-cancel":!1,"is-full-page":s.fullpage},on:{"update:active":function(e){s.loading=e}}})],1),t("div",{staticClass:"columns is-vcentered is-centered is-multiline"},[s._m(0),t("div",{staticClass:"column is centered has-text-centered has-text-white is-two-fifths"},[t("article",{class:s.errormessageVisibility?"message is-danger":"message is-hidden is-danger"},[t("div",{staticClass:"message-header"},[t("p",[s._v("Error Logging in!!")]),t("button",{staticClass:"delete",attrs:{"aria-label":"delete"},on:{click:function(e){s.errormessageVisibility=!1}}})]),t("div",{staticClass:"message-body"},[s._v(" "+s._s(s.resultmessage)+" ")])]),t("article",{class:s.successmessageVisibility?"message is-success":"message is-hidden is-success"},[t("div",{staticClass:"message-header"},[t("p",[s._v("Success !")]),t("button",{staticClass:"delete",attrs:{"aria-label":"delete"},on:{click:function(e){s.successmessageVisibility=!1}}})]),t("div",{staticClass:"message-body"},[s._v(" "+s._s(s.resultmessage)+" ")])]),t("h2",{staticClass:"title has-text-weight-bold has-text-white"},[s._v("Login")]),t("form",{on:{submit:function(e){return e.preventDefault(),s.handleSubmit(e)}}},[t("div",{staticClass:"field"},[t("p",{staticClass:"control has-icons-left has-icons-right"},[t("input",{directives:[{name:"model",rawName:"v-model",value:s.email,expression:"email"},{name:"focus",rawName:"v-focus",value:s.emailFocus,expression:"emailFocus"}],staticClass:"input is-rounded",attrs:{placeholder:"Email",id:"logemail",type:"email",required:""},domProps:{value:s.email},on:{input:function(e){e.target.composing||(s.email=e.target.value)}}}),s._m(1),s._m(2)])]),t("div",{staticClass:"field"},[t("p",{staticClass:"control has-icons-left"},[t("input",{directives:[{name:"model",rawName:"v-model",value:s.password,expression:"password"},{name:"focus",rawName:"v-focus",value:s.passwordFocus,expression:"passwordFocus"}],staticClass:"input is-rounded",attrs:{id:"logpassword",type:"password",placeholder:"Password",required:""},domProps:{value:s.password},on:{input:function(e){e.target.composing||(s.password=e.target.value)}}}),s._m(3)])]),t("button",{class:s.loading?"button is-rounded is-loading is-danger is-medium":"button is-rounded is-medium is-danger",attrs:{disabled:s.disabled}},[s._m(4),t("span",[s._v("Login")])])])])])])},i=[function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"column is-half"},[t("section",{staticClass:"hero is-black is-medium"},[t("div",{staticClass:"hero-body"},[t("div",{staticClass:"container"},[t("div",{staticClass:"tile is-ancestor"},[t("div",{staticClass:"tile is-parent"},[t("article",{staticClass:"tile has-text-centered is-child notification is-primary"},[t("p",{staticClass:"title has-text-dark"},[t("span",{staticClass:"icon"},[t("i",{staticClass:"fab fa-superpowers"})]),t("span",[s._v(" Ahh!! Perfect !")])]),t("p",{staticClass:"subtitle"},[s._v("Login")]),t("div",{staticClass:"content"},[t("p",{staticClass:"has-text-dark has-text-weight-semibold"},[s._v("Login to this Website to Continue.")]),t("p",{staticClass:"has-text-dark"},[s._v("You are Just a Page from Experiencing the Glory.")])])])])])])])])])},function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("span",{staticClass:"icon is-small is-left"},[t("i",{staticClass:"fas fa-envelope"})])},function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("span",{staticClass:"icon is-small is-right"},[t("i",{staticClass:"fas fa-check"})])},function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("span",{staticClass:"icon is-small is-left"},[t("i",{staticClass:"fas fa-lock"})])},function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("span",{staticClass:"icon is-medium"},[t("i",{staticClass:"fas fa-shipping-fast"})])}],l=(t("99af"),t("d81d"),t("b0c0"),t("d3b7"),t("25f0"),t("9062")),r=t.n(l),n=(t("e40d"),{components:{Loading:r.a},data:function(){return{email:"",password:"",disabled:!0,emailFocus:!0,gds:[],currgd:{},passwordFocus:!1,resultmessage:"",databasemessage:"",loading:!1,fullpage:!0,errormessageVisibility:!1,successmessageVisibility:!1}},methods:{handleSubmit:function(s){var e=this;this.loading=!0,s.preventDefault(),this.password.length>0&&this.email.length>0&&this.$http.post(window.apiRoutes.loginRoute,{email:this.email,password:this.password}).then((function(s){if(s.data.auth&&s.data.registered){localStorage.setItem("tokendata",e.$hash.AES.encrypt(JSON.stringify({token:s.data.token,issuedate:s.data.issuedat,expirydate:s.data.expiryat}),e.$pass).toString()),localStorage.setItem("userdata",e.$hash.AES.encrypt(JSON.stringify(s.data.tokenuser),e.$pass).toString());var t=localStorage.getItem("tokendata"),a=localStorage.getItem("userdata");if(null!=t&&null!=a){var i=JSON.parse(e.$hash.AES.decrypt(t,e.$pass).toString(e.$hash.enc.Utf8)),l=JSON.parse(e.$hash.AES.decrypt(a,e.$pass).toString(e.$hash.enc.Utf8));e.loading=!1,e.errormessageVisibility=!1,e.successmessageVisibility=!0,e.resultmessage="Logged in Successfully as ".concat(l.name,". Your token will expire at ").concat(e.$moment(i.expirydate).format("dddd, MMMM Do YYYY [at] hh:mm A"),"."),e.$bus.$emit("logged","User Logged"),setTimeout((function(){null!=e.$route.params.nextUrl?e.$router.push({name:"results",params:{id:e.currgd.id,cmd:"result",success:!0,data:"Log in Successfull. You Will be Redirected Through a Secure Channel.",redirectUrl:e.$route.params.nextUrl}}):e.$router.push({name:"results",params:{id:e.currgd.id,cmd:"result",success:!0,tocmd:"home",data:"Log in Successfull. You Will be Redirected Through a Secure Channel.",redirectUrl:"/"}})}),500)}}else e.errormessageVisibility=!0,e.successmessageVisibility=!1,e.loading=!1,e.resultmessage=s.data.message}))},checkParams:function(){console.log("checked"),this.$route.params.email?(this.email=this.$route.params.email,this.emailFocus=!1,this.passwordFocus=!0):(this.emailFocus=!0,this.passwordFocus=!1)},validateData:function(){var s=/[a-z1-9].+@+[a-z1-9A-Z].+[.][a-z]+/g;s.test(this.email)&&this.password.length>0?this.disabled=!1:this.disabled=!0}},computed:{ismobile:function(){var s=window.innerWidth>0?window.innerWidth:screen.width;return!(s>966)}},mounted:function(){this.checkParams()},created:function(){if(window.gds){this.gds=window.gds.map((function(s,e){return{name:s,id:e}}));var s=this.$route.params.id;this.gds&&(this.currgd=this.gds[s])}},watch:{email:"validateData",password:"validateData"}}),o=n,c=t("2877"),d=Object(c["a"])(o,a,i,!1,null,null,null);e["default"]=d.exports},e40d:function(s,e,t){}}]);