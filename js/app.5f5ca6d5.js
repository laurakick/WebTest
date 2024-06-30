(function(){"use strict";var t={7892:function(t,e,a){var n=a(5130),o=a(6768),l=a(4232);const i=t=>((0,o.Qi)("data-v-cfd05d62"),t=t(),(0,o.jt)(),t),s={class:"container"},d={class:"sidebar"},r=i((()=>(0,o.Lk)("div",{class:"login-info"},[(0,o.Lk)("div",{class:"avatar"}),(0,o.Lk)("div",{class:"username"},"Pamela Petrus")],-1))),c={class:"content"},u=i((()=>(0,o.Lk)("div",{class:"banner"},null,-1)));function b(t,e,a,n,i,b){const h=(0,o.g2)("PageableTable"),v=(0,o.g2)("TestRecordList"),g=(0,o.g2)("JobList");return(0,o.uX)(),(0,o.CE)("div",s,[(0,o.Lk)("div",d,[r,(0,o.Lk)("button",{onClick:e[0]||(e[0]=t=>i.currentTab=0),class:(0,l.C4)({active:0===i.currentTab})},"公告資訊",2),(0,o.Lk)("button",{onClick:e[1]||(e[1]=t=>i.currentTab=1),class:(0,l.C4)({active:1===i.currentTab})},"資料查詢",2),(0,o.Lk)("button",{onClick:e[2]||(e[2]=t=>i.currentTab=2),class:(0,l.C4)({active:2===i.currentTab})},"優惠推薦",2),(0,o.Lk)("button",{onClick:e[3]||(e[3]=t=>i.currentTab=3),class:(0,l.C4)({active:3===i.currentTab})},"聯絡公會",2),(0,o.Lk)("button",{onClick:e[4]||(e[4]=t=>i.currentTab=4),class:(0,l.C4)({active:4===i.currentTab})},"停車場管理",2),(0,o.Lk)("button",{onClick:e[5]||(e[5]=t=>i.currentTab=5),class:(0,l.C4)({active:5===i.currentTab})},"公會會員",2),(0,o.Lk)("button",{onClick:e[6]||(e[6]=t=>i.currentTab=6),class:(0,l.C4)({active:6===i.currentTab})},"協力廠商",2),(0,o.Lk)("button",{onClick:e[7]||(e[7]=t=>i.currentTab=7),class:(0,l.C4)({active:7===i.currentTab})},"活動花絮",2),(0,o.Lk)("button",{onClick:e[8]||(e[8]=t=>i.currentTab=8),class:(0,l.C4)({active:8===i.currentTab})},"帳號管理",2)]),(0,o.Lk)("div",c,[u,(0,o.Lk)("div",{class:(0,l.C4)({hidden:0!==i.currentTab})},[(0,o.bF)(h,{title:"公告資訊",key:"tab1"})],2),(0,o.Lk)("div",{class:(0,l.C4)({hidden:1!==i.currentTab})},[(0,o.bF)(v,{title:"資料查詢",key:"tab2"})],2),(0,o.Lk)("div",{class:(0,l.C4)({hidden:2!==i.currentTab})},[(0,o.bF)(g,{title:"優惠推薦",key:"tab3"})],2),(0,o.Lk)("div",{class:(0,l.C4)({hidden:3!==i.currentTab})},[(0,o.bF)(g,{title:"聯絡公會",key:"tab4"})],2),(0,o.Lk)("div",{class:(0,l.C4)({hidden:4!==i.currentTab})},[(0,o.bF)(g,{title:"停車場管理",key:"tab5"})],2),(0,o.Lk)("div",{class:(0,l.C4)({hidden:5!==i.currentTab})},[(0,o.bF)(g,{title:"公會會員",key:"tab6"})],2),(0,o.Lk)("div",{class:(0,l.C4)({hidden:6!==i.currentTab})},[(0,o.bF)(g,{title:"協力廠商",key:"tab7"})],2),(0,o.Lk)("div",{class:(0,l.C4)({hidden:7!==i.currentTab})},[(0,o.bF)(g,{title:"活動花絮",key:"tab8"})],2),(0,o.Lk)("div",{class:(0,l.C4)({hidden:8!==i.currentTab})},[(0,o.bF)(g,{title:"帳號管理",key:"tab9"})],2)])])}const h=t=>((0,o.Qi)("data-v-01e0e18f"),t=t(),(0,o.jt)(),t),v=h((()=>(0,o.Lk)("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"},null,-1))),g=h((()=>(0,o.Lk)("tr",null,[(0,o.Lk)("th",{width:"40%"},"待辦事項"),(0,o.Lk)("th",{width:"20%"},"類別"),(0,o.Lk)("th",{width:"20%"},"圖片"),(0,o.Lk)("th",{width:"20%"},"操作")],-1))),k=["src"],p=["onClick"],m=h((()=>(0,o.Lk)("i",{class:"fas fa-edit"},null,-1))),C=["onClick"],L=h((()=>(0,o.Lk)("i",{class:"fas fa-trash-alt"},null,-1))),f={class:"pagination"},P=["disabled"],y=["onClick"],T=["disabled"],w={key:0,class:"modal"},E={class:"modal-content"},J={class:"modal-header"},R=["value"],M=["src"],_={class:"modal-footer"},j=["disabled"],q=["disabled"];function A(t,e,a,i,s,d){return(0,o.uX)(),(0,o.CE)(o.FK,null,[v,(0,o.Lk)("div",null,[(0,o.Lk)("button",{onClick:e[0]||(e[0]=t=>d.openModal(-1))},"新增待辦事項"),(0,o.Lk)("table",null,[g,((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(d.paginatedJobs,((t,e)=>((0,o.uX)(),(0,o.CE)("tr",{key:t.id},[(0,o.Lk)("td",null,(0,l.v_)(t.job),1),(0,o.Lk)("td",null,(0,l.v_)(t.catg),1),(0,o.Lk)("td",null,[t.image?((0,o.uX)(),(0,o.CE)("img",{key:0,src:t.image,alt:"圖片"},null,8,k)):(0,o.Q3)("",!0)]),(0,o.Lk)("td",null,[(0,o.Lk)("button",{class:"icon-button",onClick:t=>d.openModal(e+(s.currentPage-1)*s.pageSize),title:"修改"},[(0,o.eW)(" Edit "),m],8,p),(0,o.Lk)("button",{class:"icon-button",onClick:a=>d.delJob(t.id,e+(s.currentPage-1)*s.pageSize),title:"刪除"},[(0,o.eW)(" Delete "),L],8,C)])])))),128))]),(0,o.Lk)("div",f,[(0,o.Lk)("button",{onClick:e[1]||(e[1]=(...t)=>d.prevPage&&d.prevPage(...t)),disabled:1===s.currentPage},"Prev",8,P),((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(d.totalPages,(t=>((0,o.uX)(),(0,o.CE)("button",{key:t,onClick:e=>d.setPage(t),class:(0,l.C4)({active:s.currentPage===t})},(0,l.v_)(t),11,y)))),128)),(0,o.Lk)("button",{onClick:e[2]||(e[2]=(...t)=>d.nextPage&&d.nextPage(...t)),disabled:s.currentPage===d.totalPages},"Next",8,T)]),s.isModalOpen?((0,o.uX)(),(0,o.CE)("div",w,[(0,o.Lk)("div",E,[(0,o.Lk)("div",J,[(0,o.Lk)("h2",null,(0,l.v_)(-1==s.editJobIdx?"新增待辦事項":"修改待辦事項"),1),(0,o.Lk)("span",{class:"close",onClick:e[3]||(e[3]=(...t)=>d.closeModal&&d.closeModal(...t))},"×")]),(0,o.Lk)("div",null,[(0,o.bo)((0,o.Lk)("input",{"onUpdate:modelValue":e[4]||(e[4]=t=>s.editJob.job=t),placeholder:"待辦事項"},null,512),[[n.Jo,s.editJob.job]]),(0,o.bo)((0,o.Lk)("select",{"onUpdate:modelValue":e[5]||(e[5]=t=>s.editJob.catg=t)},[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(s.catgOptions,(t=>((0,o.uX)(),(0,o.CE)("option",{key:t,value:t},(0,l.v_)(t),9,R)))),128))],512),[[n.u1,s.editJob.catg]]),(0,o.Lk)("input",{type:"file",onChange:e[6]||(e[6]=(...t)=>d.onFileChange&&d.onFileChange(...t))},null,32),s.editJob.image?((0,o.uX)(),(0,o.CE)("img",{key:0,src:s.editJob.image,class:"preview-img",alt:"預覽圖片"},null,8,M)):(0,o.Q3)("",!0)]),(0,o.Lk)("div",_,[(0,o.bo)((0,o.Lk)("button",{disabled:!s.editJob.job,onClick:e[7]||(e[7]=(...t)=>d.addJob&&d.addJob(...t))},"新增",8,j),[[n.aG,-1==s.editJobIdx]]),(0,o.bo)((0,o.Lk)("button",{disabled:!s.editJob.job,onClick:e[8]||(e[8]=(...t)=>d.updateJob&&d.updateJob(...t))},"確定",8,q),[[n.aG,s.editJobIdx>-1]])])])])):(0,o.Q3)("",!0)])],64)}a(4114);var S=a(4373);const X="http://localhost:3000";class x{static getJobs(){return S.A.get(`${X}/jobs`)}static addJob(t){return S.A.post(`${X}/jobs`,t)}static updateJob(t,e){return S.A.put(`${X}/jobs/${t}`,e)}static deleteJob(t){return S.A.delete(`${X}/jobs/${t}`)}}class F{constructor(t,e,a=null){this.job=t,this.catg=e,this.image=a}}var I={data(){return{editJob:new F("","工作"),editJobIdx:-1,isModalOpen:!1,currentPage:1,pageSize:4,catgOptions:["工作","家庭","休閒"],jobs:[]}},computed:{totalPages(){return Math.ceil(this.jobs.length/this.pageSize)},paginatedJobs(){const t=(this.currentPage-1)*this.pageSize,e=t+this.pageSize;return this.jobs.slice(t,e)}},methods:{fetchJobs(){x.getJobs().then((t=>{this.jobs=t.data,this.currentPage>this.totalPages&&(this.currentPage=this.totalPages)})).catch((t=>{console.error("Error fetching jobs:",t)}))},reset(){this.editJob=new F("","工作"),this.editJobIdx=-1,this.isModalOpen=!1},addJob(){x.addJob(this.editJob).then((t=>{this.jobs.push(t.data),this.isModalOpen=!1,this.setPage(this.totalPages)})).catch((t=>{console.error("Error adding job:",t)}))},updateJob(){x.updateJob(this.editJob.id,this.editJob).then((t=>{this.jobs.splice(this.editJobIdx,1,t.data),this.reset(),this.currentPage>this.totalPages&&(this.currentPage=this.totalPages)})).catch((t=>{console.error("Error updating job:",t)}))},delJob(t,e){x.deleteJob(t).then((()=>{this.jobs.splice(e,1),this.currentPage>this.totalPages&&(this.currentPage=this.totalPages)})).catch((t=>{console.error("Error deleting job:",t)}))},openModal(t){this.editJob=-1===t?new F("","工作"):{...this.jobs[t]},this.editJobIdx=t,this.isModalOpen=!0},closeModal(){this.isModalOpen=!1},onFileChange(t){const e=t.target.files[0];if(e){const t=new FileReader;t.onload=t=>{this.editJob.image=t.target.result},t.readAsDataURL(e)}},setPage(t){this.currentPage=t},prevPage(){this.currentPage>1&&this.currentPage--},nextPage(){this.currentPage<this.totalPages&&this.currentPage++}},mounted(){this.fetchJobs()}},N=a(1241);const O=(0,N.A)(I,[["render",A],["__scopeId","data-v-01e0e18f"]]);var U=O;const $=t=>((0,o.Qi)("data-v-019d3442"),t=t(),(0,o.jt)(),t),D=$((()=>(0,o.Lk)("tr",null,[(0,o.Lk)("th",null,"Title"),(0,o.Lk)("th",null,"Description"),(0,o.Lk)("th",null,"Status"),(0,o.Lk)("th",null,"Date Created"),(0,o.Lk)("th",null,"Actions")],-1))),K=["onClick"];function Q(t,e,a,n,i,s){const d=(0,o.g2)("BaseRecordList");return(0,o.uX)(),(0,o.Wv)(d,{items:i.items},{header:(0,o.k6)((()=>[D])),items:(0,o.k6)((({items:t})=>[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(t,(t=>((0,o.uX)(),(0,o.CE)("tr",{key:t.id},[(0,o.Lk)("td",null,(0,l.v_)(t.title),1),(0,o.Lk)("td",null,(0,l.v_)(t.description),1),(0,o.Lk)("td",null,(0,l.v_)(t.status),1),(0,o.Lk)("td",null,(0,l.v_)(s.formatDate(t.dateCreated)),1),(0,o.Lk)("td",null,[(0,o.Lk)("button",{onClick:e=>s.viewDetails(t.id)},"View Details",8,K)])])))),128))])),_:1},8,["items"])}const W=t=>((0,o.Qi)("data-v-088ca451"),t=t(),(0,o.jt)(),t),H={class:"base-record-list"},V=W((()=>(0,o.Lk)("button",{class:"add-new-record-btn"},"Add New Record",-1)));function z(t,e,a,n,l,i){return(0,o.uX)(),(0,o.CE)("div",H,[V,(0,o.Lk)("table",null,[(0,o.Lk)("thead",null,[(0,o.RG)(t.$slots,"header",{},void 0,!0)]),(0,o.Lk)("tbody",null,[(0,o.RG)(t.$slots,"items",{items:a.items},void 0,!0)])])])}var B={props:["items"]};const G=(0,N.A)(B,[["render",z],["__scopeId","data-v-088ca451"]]);var Z=G,Y={components:{BaseRecordList:Z},data(){return{items:[{id:1,title:"Record One",description:"This is the first test record",status:"Active",dateCreated:"2023-04-01T12:00:00.000Z"},{id:2,title:"Record Two",description:"This is the second test record",status:"Inactive",dateCreated:"2023-04-02T12:00:00.000Z"},{id:3,title:"Record Three",description:"This is the third test record",status:"Pending",dateCreated:"2023-04-03T12:00:00.000Z"}]}},methods:{viewDetails(t){console.log("Viewing details for item:",t)},formatDate(t){if(!t)return"";const e=new Date(t);return e.toLocaleDateString()}}};const tt=(0,N.A)(Y,[["render",Q],["__scopeId","data-v-019d3442"]]);var et=tt;const at=(0,o.Lk)("th",null,"Actions",-1),nt=["onClick"],ot=["onClick"];function lt(t,e,a,n,i,s){const d=(0,o.g2)("TablePagination"),r=(0,o.g2)("EditModal");return(0,o.uX)(),(0,o.CE)("div",null,[(0,o.Lk)("button",{onClick:e[0]||(e[0]=(...t)=>n.openNewModal&&n.openNewModal(...t))},"Add New"),(0,o.Lk)("table",null,[(0,o.Lk)("thead",null,[(0,o.Lk)("tr",null,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(n.headers,((t,e)=>((0,o.uX)(),(0,o.CE)("th",{key:e},(0,l.v_)(t),1)))),128)),at])]),(0,o.Lk)("tbody",null,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(n.paginatedData,((t,e)=>((0,o.uX)(),(0,o.CE)("tr",{key:e},[(0,o.Lk)("td",null,(0,l.v_)(t.id),1),(0,o.Lk)("td",null,(0,l.v_)(t.type),1),(0,o.Lk)("td",null,(0,l.v_)(t.title),1),(0,o.Lk)("td",null,(0,l.v_)(t.lastUpdatedTime),1),(0,o.Lk)("td",null,[(0,o.Lk)("button",{onClick:e=>n.openEditModal(t)},"Edit",8,nt),(0,o.Lk)("button",{onClick:e=>n.deleteRow(t.id)},"Delete",8,ot)])])))),128))])]),(0,o.bF)(d,{total:n.totalItems,current:n.currentPage,perPage:n.itemsPerPage,visiblePageCount:5,onPageChanged:n.pageChanged},null,8,["total","current","perPage","onPageChanged"]),n.showEditModal?((0,o.uX)(),(0,o.Wv)(r,{key:0,record:n.currentRecord,onClose:n.closeEditModal,onSave:n.saveRecord},null,8,["record","onClose","onSave"])):(0,o.Q3)("",!0),n.showNewModal?((0,o.uX)(),(0,o.Wv)(r,{key:1,record:n.newRecord,onClose:n.closeNewModal,onSave:n.addRecord,isNew:!0},null,8,["record","onClose","onSave"])):(0,o.Q3)("",!0)])}var it=a(144);const st={class:"pagination"},dt={class:"buttons"},rt=["disabled"],ct=["disabled"],ut=["onClick"],bt=["disabled"],ht=["disabled"],vt={class:"current-page-label"};function gt(t,e,a,n,i,s){return(0,o.uX)(),(0,o.CE)("div",st,[(0,o.Lk)("div",dt,[(0,o.Lk)("button",{onClick:e[0]||(e[0]=(...t)=>s.prevNPages&&s.prevNPages(...t)),disabled:a.current<=1}," 《《 ",8,rt),(0,o.Lk)("button",{onClick:e[1]||(e[1]=(...t)=>s.prevPage&&s.prevPage(...t)),disabled:1===a.current}," « ",8,ct),((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(s.visiblePages,(t=>((0,o.uX)(),(0,o.CE)("button",{key:t,onClick:e=>s.changePage(t),class:(0,l.C4)({active:a.current===t})},(0,l.v_)(t),11,ut)))),128)),(0,o.Lk)("button",{onClick:e[2]||(e[2]=(...t)=>s.nextPage&&s.nextPage(...t)),disabled:a.current===s.totalPages}," » ",8,bt),(0,o.Lk)("button",{onClick:e[3]||(e[3]=(...t)=>s.nextNPages&&s.nextNPages(...t)),disabled:a.current>s.totalPages-1}," 》》 ",8,ht)]),(0,o.Lk)("span",vt," Page "+(0,l.v_)(a.current)+" of "+(0,l.v_)(s.totalPages),1)])}var kt={props:{total:{type:Number,required:!0},current:{type:Number,required:!0},perPage:{type:Number,required:!0},visiblePageCount:{type:Number,required:!1,default:5}},computed:{totalPages(){return Math.ceil(this.total/this.perPage)},visiblePages(){const t=[],e=Math.floor(this.visiblePageCount/2);let a=Math.max(1,this.current-e),n=Math.min(this.totalPages,this.current+e);n-a+1<this.visiblePageCount&&(1===a?n=Math.min(this.totalPages,a+this.visiblePageCount-1):n===this.totalPages&&(a=Math.max(1,n-this.visiblePageCount+1)));for(let o=a;o<=n;o++)t.push(o);return t}},methods:{prevPage(){this.current>1&&this.$emit("page-changed",this.current-1)},nextPage(){this.current<this.totalPages&&this.$emit("page-changed",this.current+1)},prevNPages(){const t=Math.max(1,this.current-this.visiblePageCount);this.$emit("page-changed",t)},nextNPages(){const t=Math.min(this.totalPages,this.current+this.visiblePageCount);this.$emit("page-changed",t)},changePage(t){this.$emit("page-changed",t)}}};const pt=(0,N.A)(kt,[["render",gt]]);var mt=pt;const Ct={key:0,class:"modal"},Lt={class:"modal-content"},ft=(0,o.Lk)("label",{for:"type"},"Type",-1),Pt=(0,o.Lk)("label",{for:"title"},"Title",-1),yt=(0,o.Lk)("label",{for:"lastUpdatedTime"},"Last Updated Time",-1),Tt=(0,o.Lk)("label",{for:"content"},"Content",-1),wt={class:"button-table"},Et={class:"button-cell"},Jt={class:"button-cell right-align"};function Rt(t,e,a,i,s,d){const r=(0,o.g2)("email-editor");return a.record?((0,o.uX)(),(0,o.CE)("div",Ct,[(0,o.Lk)("div",Lt,[(0,o.Lk)("span",{class:"close",onClick:e[0]||(e[0]=(...t)=>d.close&&d.close(...t))},"×"),(0,o.Lk)("h2",null,(0,l.v_)(a.isNew?"Add New Record":"Edit Record"),1),ft,(0,o.bo)((0,o.Lk)("input",{type:"text",id:"type","onUpdate:modelValue":e[1]||(e[1]=t=>s.editableRecord.type=t),required:""},null,512),[[n.Jo,s.editableRecord.type]]),Pt,(0,o.bo)((0,o.Lk)("input",{type:"text",id:"title","onUpdate:modelValue":e[2]||(e[2]=t=>s.editableRecord.title=t),required:""},null,512),[[n.Jo,s.editableRecord.title]]),yt,(0,o.bo)((0,o.Lk)("input",{type:"datetime-local",id:"lastUpdatedTime","onUpdate:modelValue":e[3]||(e[3]=t=>s.editableRecord.lastUpdatedTime=t),disabled:""},null,512),[[n.Jo,s.editableRecord.lastUpdatedTime]]),Tt,(0,o.bF)(r,{ref:"docEditor"},null,512),(0,o.Lk)("table",wt,[(0,o.Lk)("tr",null,[(0,o.Lk)("td",Et,[(0,o.Lk)("button",{type:"button",onClick:e[4]||(e[4]=(...t)=>d.save&&d.save(...t))},(0,l.v_)(a.isNew?"Add":"Save"),1)]),(0,o.Lk)("td",Jt,[(0,o.Lk)("button",{id:"close-button",type:"button",onClick:e[5]||(e[5]=(...t)=>d.close&&d.close(...t))},"Cancel")])])])])])):(0,o.Q3)("",!0)}const Mt={id:"toolbar-container"},_t={id:"toolbar"},jt=(0,o.Fv)('<button class="ql-bold">Bold</button><button class="ql-italic">Italic</button><button class="ql-underline">Underline</button><button class="ql-strike">Strike</button><button class="ql-color">Color</button><button class="ql-background">Background</button><button class="ql-header" value="1">H1</button><button class="ql-header" value="2">H2</button><button class="ql-header" value="3">H3</button><button class="ql-list" value="ordered">List</button><button class="ql-list" value="bullet">Bullet</button><button class="ql-align" value="">Left</button><button class="ql-align" value="center">Center</button><button class="ql-align" value="right">Right</button><button class="ql-align" value="justify">Justify</button><button class="ql-link">Link</button><button class="ql-image">Image</button><button class="ql-video">Video</button><button class="ql-code-block">Code</button><button class="ql-blockquote">Quote</button><button class="ql-clean">Clear</button>',21),qt=(0,o.Lk)("i",{class:"fas fa-paperclip"},null,-1),At=[qt],St={ref:"editorContainer",id:"editor-container"},Xt={id:"attachment-container",class:"container"},xt=["href","download"],Ft=["onClick"],It={key:0},Nt=(0,o.Lk)("p",null,"Saved Content",-1),Ot={id:"save-container",class:"container"},Ut={id:"display-container",class:"container",ref:"displayContainer"},$t={id:"loaded-attachment-container",class:"container"},Dt=["href","download"];function Kt(t,e,a,n,i,s){return(0,o.uX)(),(0,o.CE)("div",null,[(0,o.Lk)("div",Mt,[(0,o.Lk)("div",_t,[jt,(0,o.Lk)("button",{onClick:e[0]||(e[0]=(...t)=>s.attachFile&&s.attachFile(...t)),class:"attachment-button"},At)])]),(0,o.Lk)("div",St,null,512),(0,o.Lk)("div",Xt,[(0,o.eW)(" 附件: "),((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(i.attachments,((t,e)=>((0,o.uX)(),(0,o.CE)("div",{key:t.name},[(0,o.Lk)("a",{href:t.data,download:t.name},(0,l.v_)(t.name),9,xt),(0,o.Lk)("button",{onClick:t=>s.removeAttachment(e),class:"attachment-remove-button"},"X",8,Ft)])))),128))]),i.debug?((0,o.uX)(),(0,o.CE)("div",It,[(0,o.Lk)("button",{onClick:e[1]||(e[1]=(...t)=>s.saveContent&&s.saveContent(...t))},"Save Content"),(0,o.Lk)("button",{onClick:e[2]||(e[2]=(...t)=>s.loadContent&&s.loadContent(...t))},"Load Content"),Nt,(0,o.Lk)("div",Ot,(0,l.v_)(i.savedContent),1),(0,o.eW)(" Loaded Content "),(0,o.Lk)("div",Ut,null,512),(0,o.Lk)("div",$t,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(i.loadedAttachments,(t=>((0,o.uX)(),(0,o.CE)("div",{key:t.name},[(0,o.eW)(" Loaded attachment: "+(0,l.v_)(t.name)+" - ",1),(0,o.Lk)("a",{href:t.data,download:t.name},"Download",8,Dt)])))),128))])])):(0,o.Q3)("",!0)])}var Qt=a(8525),Wt={name:"EmailEditor",data(){return{quill:null,attachments:[],loadedAttachments:[],savedContent:"",loadedContent:"",debug:!1}},mounted(){this.quill=new Qt.Ay(this.$refs.editorContainer,{theme:"snow",modules:{toolbar:"#toolbar"}}),this.debug&&(this.readOnlyQuill=new Qt.Ay(this.$refs.displayContainer,{theme:"snow",readOnly:!0,modules:{toolbar:!1}}))},methods:{set_doc(t){this.quill&&(this.quill.root.innerHTML=t.content),this.attachments=t.attachments},get_doc(){return{content:this.quill?this.quill.root.innerHTML:this.doc.content,attachments:this.attachments}},attachFile(){const t=document.createElement("input");t.type="file",t.click(),t.onchange=()=>{const e=t.files[0],a=new FileReader;a.onloadend=()=>{this.attachments.push({name:e.name,data:a.result})},a.readAsDataURL(e)}},removeAttachment(t){this.attachments.splice(t,1)},getContent(){return this.quill.root.innerHTML},saveContent(){const t=this.quill.root.innerHTML;this.savedContent=JSON.stringify({content:t,attachments:this.attachments})},loadContent(){const t=JSON.parse(this.savedContent||"{}");this.loadedContent=t.content||"No content loaded",this.readOnlyQuill.root.innerHTML=this.loadedContent,this.loadedAttachments=t.attachments||[]}}};const Ht=(0,N.A)(Wt,[["render",Kt]]);var Vt=Ht,zt={components:{EmailEditor:Vt},props:{record:{type:Object,required:!0},isNew:{type:Boolean,default:!1}},data(){return{editableRecord:{...this.record}}},emits:["close","save"],methods:{close(){this.$emit("close")},save(){if(this.$refs.docEditor){const t=this.$refs.docEditor.get_doc();t&&(this.editableRecord.content=t),this.editableRecord.lastUpdatedTime=(new Date).toISOString().slice(0,16),this.$emit("save",{...this.editableRecord})}},handleFormSubmit(t){t.preventDefault()},setInitialDoc(){const t=this.editableRecord.content;this.$refs.docEditor?this.$refs.docEditor.set_doc(t):console.error("EmailEditor is not available at this moment.")}},watch:{record(t){this.editableRecord={...t}}},mounted(){this.$nextTick((()=>{this.setInitialDoc()}))}};const Bt=(0,N.A)(zt,[["render",Rt]]);var Gt=Bt;const Zt=[{id:1,type:"最新消息",title:"New Announcement",lastUpdatedTime:"2023-01-01T12:00",content:{content:"meow2",attachments:[]}},{id:2,type:"活動訊息",title:"Event Info",lastUpdatedTime:"2023-01-02T12:00",content:{content:"meow",attachments:[]}},{id:3,type:"更新通知",title:"Update Notice",lastUpdatedTime:"2023-01-03T12:00",content:{content:"Updated version available!",attachments:[]}},{id:4,type:"系統消息",title:"System Message",lastUpdatedTime:"2023-01-04T12:00",content:{content:"System will undergo maintenance.",attachments:[]}},{id:5,type:"安全警告",title:"Security Alert",lastUpdatedTime:"2023-01-05T12:00",content:{content:"Please update your passwords.",attachments:[]}},{id:6,type:"特別報導",title:"Special Report",lastUpdatedTime:"2023-01-06T12:00",content:{content:"Special coverage on upcoming events.",attachments:[]}}];var Yt=Zt;class te{constructor(){this.data=Yt}getAll(){return this.data}add(t){t.id=this.data.length?Math.max(...this.data.map((t=>t.id)))+1:1,this.data.push(t)}update(t){const e=this.data.findIndex((e=>e.id===t.id));-1!==e&&(this.data[e]=t)}delete(t){const e=this.data.findIndex((e=>e.id===t));-1!==e&&this.data.splice(e,1)}}var ee=te,ae={components:{TablePagination:mt,EditModal:Gt},setup(){const t=(0,it.KR)(["ID","Type","Title","Last Updated Time"]),e=new ee,a=(0,it.KR)(e.getAll()),n=(0,it.KR)(a.value.length),l=(0,it.KR)(1),i=(0,it.KR)(5),s=(0,o.EW)((()=>{const t=(l.value-1)*i.value,e=t+i.value;return a.value.slice(t,e)})),d=t=>{l.value=t},r=(0,it.KR)(!1),c=(0,it.KR)(!1),u=(0,it.KR)(null),b=(0,it.KR)({id:null,type:"",title:"",lastUpdatedTime:"",content:""}),h=t=>{u.value=JSON.parse(JSON.stringify(t)),r.value=!0},v=()=>{b.value={id:null,type:"",title:"",lastUpdatedTime:"",content:{content:"",attachments:[]}},c.value=!0},g=()=>{r.value=!1,u.value=null},k=()=>{c.value=!1,b.value={id:null,type:"",title:"",lastUpdatedTime:"",content:""}},p=t=>{e.update(t),a.value=[...e.getAll()],n.value=a.value.length,g()},m=t=>{e.add(t),a.value=[...e.getAll()],n.value=a.value.length,k(),l.value=Math.ceil(n.value/i.value),d(l.value)},C=t=>{e.delete(t),a.value=[...e.getAll()],n.value=a.value.length;const o=Math.ceil(n.value/i.value);l.value>o&&(l.value=o),d(l.value)};return{headers:t,paginatedData:s,totalItems:n,currentPage:l,itemsPerPage:i,pageChanged:d,showEditModal:r,showNewModal:c,currentRecord:u,newRecord:b,openEditModal:h,openNewModal:v,closeEditModal:g,closeNewModal:k,saveRecord:p,addRecord:m,deleteRow:C,data:a}}};const ne=(0,N.A)(ae,[["render",lt]]);var oe=ne,le={components:{JobList:U,TestRecordList:et,PageableTable:oe},data(){return{currentTab:0}}};const ie=(0,N.A)(le,[["render",b],["__scopeId","data-v-cfd05d62"]]);var se=ie;(0,n.Ef)(se).mount("#app")}},e={};function a(n){var o=e[n];if(void 0!==o)return o.exports;var l=e[n]={id:n,loaded:!1,exports:{}};return t[n].call(l.exports,l,l.exports,a),l.loaded=!0,l.exports}a.m=t,function(){var t=[];a.O=function(e,n,o,l){if(!n){var i=1/0;for(c=0;c<t.length;c++){n=t[c][0],o=t[c][1],l=t[c][2];for(var s=!0,d=0;d<n.length;d++)(!1&l||i>=l)&&Object.keys(a.O).every((function(t){return a.O[t](n[d])}))?n.splice(d--,1):(s=!1,l<i&&(i=l));if(s){t.splice(c--,1);var r=o();void 0!==r&&(e=r)}}return e}l=l||0;for(var c=t.length;c>0&&t[c-1][2]>l;c--)t[c]=t[c-1];t[c]=[n,o,l]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var n in e)a.o(e,n)&&!a.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){a.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){var t={524:0};a.O.j=function(e){return 0===t[e]};var e=function(e,n){var o,l,i=n[0],s=n[1],d=n[2],r=0;if(i.some((function(e){return 0!==t[e]}))){for(o in s)a.o(s,o)&&(a.m[o]=s[o]);if(d)var c=d(a)}for(e&&e(n);r<i.length;r++)l=i[r],a.o(t,l)&&t[l]&&t[l][0](),t[l]=0;return a.O(c)},n=self["webpackChunktest0"]=self["webpackChunktest0"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=a.O(void 0,[504],(function(){return a(7892)}));n=a.O(n)})();
//# sourceMappingURL=app.5f5ca6d5.js.map