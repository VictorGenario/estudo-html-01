__d(function(g,r,i,a,m,e,d){"use strict";function t({onFirstPhotoUpload:t}){var o;return a(d[0]).createElement(r(d[1]).ActivatorCard,{bodyText:a(d[2]).FIRST_PHOTO_BODY,buttonText:a(d[2]).FIRST_PHOTO_CTA,headerText:a(d[2]).FIRST_PHOTO_HEADER,icon:r(d[1]).ICONS.CAMERA_OUTLINE_24_GREY9,iconAlt:a(d[2]).FIRST_PHOTO_BODY,onClick:null!==(o=t)&&void 0!==o?o:i(d[3])})}function o(){const t=r(d[4]).useHistory();return a(d[0]).createElement(r(d[1]).ActivatorCard,{bodyText:a(d[2]).PHONE_BODY,buttonText:a(d[2]).PHONE_CTA,headerText:a(d[2]).PHONE_HEADER,icon:r(d[1]).ICONS.CALL_OUTLINE_24_GREY9,iconAlt:a(d[2]).PHONE_BODY,onClick:()=>t.push(r(d[5]).PHONE_CONFIRM_PATH)})}function n(){const t=r(d[4]).useHistory();return a(d[0]).createElement(r(d[1]).ActivatorCard,{bodyText:a(d[2]).EDIT_PROFILE_BODY,buttonText:a(d[2]).EDIT_PROFILE_CTA,headerText:a(d[2]).EDIT_PROFILE_HEADER,icon:r(d[1]).ICONS.USER_OUTLINE_24_GREY9,iconAlt:a(d[2]).EDIT_PROFILE_BODY,onClick:()=>t.push(r(d[5]).PROFILE_EDIT_PATH)})}function c({profilePicEditRef:t}){return a(d[0]).createElement(r(d[1]).ActivatorCard,{bodyText:a(d[2]).PROFILE_PHOTO_BODY,buttonText:a(d[2]).PROFILE_PHOTO_CTA,headerText:a(d[2]).PROFILE_PHOTO_HEADER,icon:r(d[1]).ICONS.CAMERA_OUTLINE_24_GREY9,iconAlt:a(d[2]).PROFILE_PHOTO_BODY,onClick:o=>{var n;null===t||void 0===t||null===(n=t.current)||void 0===n||n.handleEditProfilePic(o)}})}Object.defineProperty(e,'__esModule',{value:!0});const l=a(d[0]).forwardRef(function(t,o){return a(d[0]).createElement("div",{className:t.className},a(d[0]).createElement(r(d[1]).Deck,{cardType:"ACTIVATOR",hasBlur:!r(d[6]).isMobile(),headerText:a(d[2]).GETTING_STARTED},t.children),a(d[0]).createElement(i(d[7]),{analyticsContext:t.analyticsContext,hasExistingPic:!1,ref:o}))});var s=r(d[4]).withRouter(r(d[13]).connect(function(t){const o=r(d[11]).getViewer(t);return{canFBConnect:r(d[12]).shouldDisplayFacebookConnect(t),hasName:''!==(null===o||void 0===o?void 0:o.fullName),hasPhoneNumber:null===o||void 0===o?void 0:o.hasPhoneNumber,hasProfilePic:null===o||void 0===o?void 0:o.hasProfilePic,isNew:null===o||void 0===o?void 0:o.isNew,profilePicUploadIsInFlight:t.users.profilePicUploadIsInFlight}})(r(d[14]).withConnectedLifecycleLogging('NewUserActivatorsUnit')(class extends a(d[0]).Component{constructor(t){super(t),this.$NewUserActivatorsUnit1=a(d[0]).createRef(),this.$NewUserActivatorsUnit2={hideConnectToFB:!1}}render(){const{canFBConnect:s,className:E,fallbackComponent:T,hasName:u,hasPhoneNumber:O,hasProfilePic:P,isNew:_}=this.props;if(null==_||!1===_){var h;return null!==(h=T)&&void 0!==h?h:null}const f=[r(d[6]).isMobile()&&m===r(d[8]).MODULES.profile&&a(d[0]).createElement(t,{key:r(d[8]).KEYS.addFirstPhoto,onFirstPhotoUpload:this.props.onFirstPhotoUpload}),s&&!this.$NewUserActivatorsUnit2.hideConnectToFB&&a(d[0]).createElement(i(d[9]),{analyticsContext:i(d[10]).selfProfilePage,key:r(d[8]).KEYS.connectToFacebook,nuxType:"activator",onError:()=>{this.$NewUserActivatorsUnit2.hideConnectToFB=!0,this.forceUpdate()},returnURL:'/'}),!0!==O&&a(d[0]).createElement(o,{key:r(d[8]).KEYS.addPhone}),!0!==u&&a(d[0]).createElement(n,{key:r(d[8]).KEYS.editProfile}),!0!==P&&a(d[0]).createElement(c,{key:r(d[8]).KEYS.editProfilePhoto,profilePicEditRef:this.$NewUserActivatorsUnit1})].filter(t=>t);if(0===f.length){var A;return null!==(A=this.props.fallbackComponent)&&void 0!==A?A:null}return a(d[0]).createElement(l,{className:E,ref:this.$NewUserActivatorsUnit1},f)}})));e.default=s,e.ACTIVATOR_CARD_MODULES=r(d[8]).MODULES},14024704,[21037104,21037102,10485780,21037067,6,20971739,20971527,21037428,14352401,14024705,20971736,20971876,10485771,5,21037116]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),e.default=function({analyticsContext:t,nuxType:n="onboarding",onError:o=(()=>{}),returnURL:u}){return a(d[0]).createElement(a(d[0]).Fragment,null,'activator'===n?a(d[0]).createElement(i(d[1]),{onError:o,returnURL:u}):a(d[0]).createElement(i(d[2]),{returnURL:u}))}},14024705,[3,14024706,14024720]);
__d(function(g,r,i,a,m,e,d){"use strict";function n(n){return n?'ig_fb_nux_find_friends_msite':'ig_fb_nux_find_friends_web'}function t({children:n,onError:t}){var o;const u=r(d[0]).useIsMobile(),_=null===(o=r(d[10]).useSelector(r(d[11]).getViewer))||void 0===o?void 0:o.fbid;return a(d[6]).createElement(i(d[12]),{errorRenderer:n=>null,onError:(n,o)=>{t(n,i(d[9])(_),u)}},n)}function o(n,u){function _(o){return a(d[6]).createElement(t,{onError:u(o)},a(d[6]).createElement(n,o))}var c;return Object.defineProperty(_,'name',{value:`${o.name}(${null!==(c=n.name)&&void 0!==c?c:'Component'})`,writable:!1}),_}function u(n){function t(t){const o=r(d[8]).nuxActivatorCardAddAccountButtonUI({buttonText:a(d[13]).FACEBOOK_CTA,isButtonLoading:!0,onButtonClick:()=>{}});return a(d[6]).createElement(r(d[14]).Suspense,{fallback:o},a(d[6]).createElement(n,t))}var o;return Object.defineProperty(t,'name',{value:`${u.name}(${null!==(o=n.name)&&void 0!==o?o:'Component'})`,writable:!1}),t}Object.defineProperty(e,'__esModule',{value:!0});var _=r(d[0]).withFXAPI(o(u(function({returnURL:t}){var o;const u=r(d[0]).useIsMobile(),_=u?'IG_NUX_MSITE':'IG_NUX_WEB',c=n(u),l=i(d[1])._("ig_fx_comet_master")?r(d[2]).appendQueryParams(r(d[3]).FX_ACCOUNTS_CENTER_ON_COMET_PROFILES_PATH,{flow:_,entry_point:c,next:t}):r(d[2]).appendQueryParams(r(d[3]).FX_ACCOUNTS_CENTER_PROFILES_PATH,{flow:_,entry_point:c}),f={flow:_,device_id:r(d[4]).getDeviceId(),ig_web_extra_data:l,interface:'IG_WEB'},s=r(d[0]).useLazyLoadQuery(i(d[5]),f);return a(d[6]).createElement(i(d[7]),{buttonUI:r(d[8]).nuxActivatorCardAddAccountButtonUI,entryPoint:c,flow:_,returnURL:t,screenResources:i(d[9])(null===s||void 0===s?void 0:null===(o=s.fx_identity_management)||void 0===o?void 0:o.screen_resources),webAuthConfig:i(d[9])(null===s||void 0===s?void 0:s.fxcal_web_init)})}),t=>(o,u,_)=>{r(d[15]).logFXLinkingFlowEvent({event:'generic_error',initiatorAccountId:u,linkingFlowEntryPoint:n(_),debugData:o.stack}),t.onError()}));e.default=_},14024706,[20775591,20971577,20971709,20971739,20971525,20775605,3,14024707,14024708,21037084,5,20971876,21037393,10485780,21037104,20774962]);
__d(function(g,r,i,a,m,e,d){"use strict";function t(t){return'IG_NUX_WEB'===t||'IG_NUX_MSITE'===t?t:'IG_WEB_SETTINGS'}function n(t){return'ig_fb_nux_find_friends_web'===t||'ig_fb_nux_find_friends_msite'===t?t:'ig_web_settings'}Object.defineProperty(e,'__esModule',{value:!0});var o=r(d[0]).withFXAPI(function({screenResources:o,webAuthConfig:l,buttonUI:u=r(d[1]).defaultAddAccountButtonUI,entryPoint:_="ig_web_settings",flow:c="IG_WEB_SETTINGS",returnURL:s=null}){var E,w,I;const f=r(d[0]).useIsMobile(),v=r(d[2]).useLocation(),b=r(d[3]).getQueryParams(v.search),[F]=a(d[4]).useState(b.auth_flow!==r(d[5]).LINKING_FLOW_IDENTIFIER||null==b.token||null==b.blob),[L,k]=a(d[4]).useState(!1),[A,N]=a(d[4]).useState(!0),[P,T]=a(d[4]).useState(null),[h,y]=a(d[4]).useState(null),S=null===(E=r(d[6]).useSelector(r(d[7]).getViewer))||void 0===E?void 0:E.fbid,U=n(null!==(w=b.entry_point)&&void 0!==w?w:_),p=t(null!==(I=b.flow)&&void 0!==I?I:c),D=r(d[0]).useFragment(i(d[8]),l),G=r(d[0]).useFragment(i(d[8]),o),B=r(d[9]).useMemo(()=>{if('undefined'!=typeof window&&!F){var t;const n=null===(t=r(d[10]).getLocalStorage())||void 0===t?void 0:t.getItem(r(d[5]).PLAIN_TOKEN);return null==n?(r(d[11]).logFXLinkingFlowEvent({event:'generic_error',initiatorAccountId:i(d[12])(S),linkingFlowEntryPoint:U,debugData:r(d[5]).WEB_AUTH_PLAIN_TOKEN_NULL_DEBUG_DATA}),T(r(d[5]).getGenericErrorDialogContent()),null):{completionUrl:window.location.href,extraData:v.pathname+v.search,flow:p,webAuthPlainToken:n}}return null},[F,v.pathname,v.search,p,S,U]),[X]=r(d[0]).useEntryPointDialog(i(d[13]),B,null,r(d[14]).fxDesktopDialogAndMobilePageFallback(f)),O=()=>{k(!1),N(!1)};return r(d[9]).useLayoutEffect(()=>{A&&null!=B&&!F&&null==D.error&&(N(!1),r(d[11]).logFXLinkingFlowEvent({event:'web_auth_success',initiatorAccountId:i(d[12])(S),linkingFlowEntryPoint:U}),X({entryPoint:U,flow:p},O))},[D.error,B,F,A,X,S,U,p]),a(d[4]).createElement(a(d[4]).Fragment,null,u({isButtonLoading:L,onButtonClick:()=>{try{var t,n;if(k(!0),N(!1),r(d[11]).logFXLinkingFlowEvent({event:'linking_flow_initiated',initiatorAccountId:i(d[12])(S),linkingFlowEntryPoint:U}),null!=D.error)return void y(D.error);const o=i(d[12])(r(d[10]).getLocalStorage()),l=i(d[12])(null===(t=D.web_auth)||void 0===t?void 0:t.url),u=r(d[3]).appendQueryParams(l,{force_logout:'1'});o.setItem(r(d[5]).WEB_AUTH_URL,u),o.setItem(r(d[5]).PLAIN_TOKEN,i(d[12])(null===(n=D.web_auth)||void 0===n?void 0:n.plain_token)),o.setItem(r(d[5]).LINKING_COMPLETION_RETURN_URL,s),r(d[15]).redirect(l),r(d[11]).logFXLinkingFlowEvent({event:'web_auth_attempted',initiatorAccountId:i(d[12])(S),linkingFlowEntryPoint:U})}catch(t){r(d[11]).logFXLinkingFlowEvent({event:'generic_error',initiatorAccountId:i(d[12])(S),linkingFlowEntryPoint:U,debugData:t.stack}),T(r(d[5]).getGenericErrorDialogContent())}},buttonText:i(d[12])(G.add_button_text)}),(A||L)&&(P||h)&&a(d[4]).createElement(i(d[16]),{content:P,error:h,onClose:()=>{T(null),y(null),k(!1)}}))});e.default=o},14024707,[20775591,14024708,6,20971709,3,14024709,5,20971876,14024711,21037104,20971596,20774962,21037084,14024712,14024714,20971912,14024715]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),e.defaultAddAccountButtonUI=function({buttonText:t,isButtonLoading:n,onButtonClick:o}){return a(d[0]).createElement(r(d[1]).Box,{direction:"row",margin:4},n?a(d[0]).createElement(r(d[1]).Spinner,null):a(d[0]).createElement(r(d[1]).Button,{borderless:!0,color:"ig-secondary-button",large:!0,onClick:o},a(d[0]).createElement(r(d[1]).Text,{color:"ig-link",size:"label"},t)))},e.nuxActivatorCardAddAccountButtonUI=function({buttonText:t,isButtonLoading:n,onButtonClick:o}){return a(d[0]).createElement(r(d[1]).ActivatorCard,{bodyText:a(d[2]).FACEBOOK_BODY,buttonText:a(d[2]).FACEBOOK_CTA,headerText:a(d[2]).FACEBOOK_HEADER,icon:r(d[1]).ICONS.FACEBOOK_CIRCLE_OUTLINE_24_GREY9,iconAlt:a(d[2]).FACEBOOK_BODY,loading:n,onClick:o})},e.nuxOnboardingUnitAddAccountButtonUI=function({buttonText:t,isButtonLoading:n,onButtonClick:o}){const c=a(d[0]).createElement(r(d[1]).BorderedIcon,{alt:r(d[3])(3289),icon:r(d[1]).ICONS.FACEBOOK_CIRCLE_OUTLINE_24_GREY9,size:r(d[1]).CORE_CONSTANTS.AVATAR_SIZES.large});return a(d[0]).createElement(i(d[4]),{bodyText:r(d[3])(3854),buttonText:r(d[3])(2905),headerText:r(d[3])(2877),icon:c,isProcessing:n,onButtonClick:o})}},14024708,[3,21037102,10485780,20971580,11272310]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0});e.WEB_AUTH_URL='fx_ig_web_linking_web_auth_url',e.LINKING_COMPLETION_RETURN_URL='fx_ig_web_linking_flow_completion_return_url',e.PLAIN_TOKEN='fx_ig_web_linking_plain_token',e.WEB_AUTH_PLAIN_TOKEN_NULL_DEBUG_DATA='Web auth plain token is null',e.PIC_SIZE=44,e.LINKING_FLOW_IDENTIFIER='linking',e.getGenericErrorDialogContent=function(){return{title:r(d[0]).GENERIC_LINKING_FLOW_ERROR_CONTENT.title,body:r(d[0]).GENERIC_LINKING_FLOW_ERROR_CONTENT.body,primary_button:{label:r(d[0]).GENERIC_LINKING_FLOW_ERROR_CONTENT.button_label,action:'EXIT_FLOW'}}}},14024709,[14024710]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0});const _=r(d[0])(1551),N=r(d[0])(434),t=r(d[0])(2916),E=r(d[0])(1945),T={body:N,button_label:E,title:_},R={body:t,button_label:E,title:_},l=r(d[0])(3993),O=r(d[0])(685),o=r(d[0])(349),I=r(d[0])(2421),b=r(d[0])(1097),C=r(d[0])(1510),G={body:O,button_label:r(d[1]).OK_TEXT,title:l},n={error_dialog:{title:o,description:I,dismiss_label:r(d[1]).OK_TEXT}},s={body:C,button_label:r(d[1]).OK_TEXT,title:b};e.GENERIC_UNLINKING_FLOW_ERROR_CONTENT=T,e.GENERIC_UNLINKING_MUTATION_ERROR_CONTENT=R,e.GENERIC_LINKING_FLOW_ERROR_CONTENT=G,e.GENERIC_SETTINGS_FLOW_ERROR_CONTENT=n,e.GENERIC_IM_SETTINGS_ERROR_CONTENT=s},14024710,[20971580,20971889]);
__d(function(g,r,i,a,m,e,d){'use strict';const l={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"FXAddAccountLink_fxcal_web_init",selections:[{alias:null,args:null,concreteType:"FXCalFlowWebAuthConfig",kind:"LinkedField",name:"web_auth",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"plain_token",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"FXCalFlowErrorDialogContent",kind:"LinkedField",name:"error",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"FXLinkErrorDialog_error"}],storageKey:null}],type:"FXCalFlowConfig",abstractKey:null};l.hash='5e8aa0faac69aeff093ada23edd68c75',m.exports=l},14024711,[]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0});var t={getPreloadProps:({completionUrl:t,extraData:o,flow:_,webAuthPlainToken:n})=>({queries:{query:{parameters:r(d[0]).params,variables:{flow:_,pic_size:r(d[1]).PIC_SIZE,device_id:r(d[2]).getDeviceId(),web_auth:{account_type:'FACEBOOK',web_auth_plain_token:{sensitive_string_value:n},completion_url:{sensitive_string_value:t}},ig_web_extra_data:o},options:{fetchPolicy:'store-and-network'}}}}),root:()=>r(d[4])(d[3],"FXLinkingFlowDialog")};e.default=t},14024712,[14024713,14024709,20971525,13828096,68]);
__d(function(g,r,i,a,m,e,d){'use strict';const l=(function(){var l={defaultValue:null,kind:"LocalArgument",name:"device_id"},n={defaultValue:null,kind:"LocalArgument",name:"flow"},s={defaultValue:null,kind:"LocalArgument",name:"ig_web_extra_data"},u={defaultValue:null,kind:"LocalArgument",name:"pic_size"},t={defaultValue:null,kind:"LocalArgument",name:"web_auth"},o=[{kind:"Variable",name:"device_id",variableName:"device_id"},{kind:"Variable",name:"flow",variableName:"flow"},{kind:"Variable",name:"ig_web_extra_data",variableName:"ig_web_extra_data"},{kind:"Variable",name:"web_auth",variableName:"web_auth"}],c=[{kind:"Variable",name:"profile_pic_size",variableName:"pic_size"}],k={alias:null,args:null,kind:"ScalarField",name:"title",storageKey:null},F={alias:null,args:null,kind:"ScalarField",name:"primary_button_label",storageKey:null},y=[{alias:null,args:null,kind:"ScalarField",name:"action",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"label",storageKey:null}];return{fragment:{argumentDefinitions:[l,n,s,u,t],kind:"Fragment",metadata:null,name:"FXLinkingFlowDialogQuery",selections:[{alias:null,args:o,concreteType:"FXCalFlowConfig",kind:"LinkedField",name:"fxcal_web_init",plural:!1,selections:[{alias:null,args:null,concreteType:"FXCALFlowInfo",kind:"LinkedField",name:"info",plural:!1,selections:[{alias:null,args:c,concreteType:"FXCALAccountData",kind:"LinkedField",name:"account",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"FXLinkAccountCard_account"}],storageKey:null},{alias:null,args:null,concreteType:"FXCalContent",kind:"LinkedField",name:"display_content",plural:!1,selections:[{alias:null,args:null,concreteType:"FXCalScreenContent",kind:"LinkedField",name:"cal_screen",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"FXLinkAccountScreen_cal_screen"}],storageKey:null},{alias:null,args:null,concreteType:"FXCalDecalContent",kind:"LinkedField",name:"decal_screen",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"FXLinkAccountScreen_decal_screen"}],storageKey:null},{alias:null,args:null,concreteType:"FXCalDisclosuresScreenContent",kind:"LinkedField",name:"disclosures_screen",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"FXLinkDisclosuresScreen_disclosures_screen"}],storageKey:null}],storageKey:null},{args:null,kind:"FragmentSpread",name:"FXLinkDisclosuresScreen_account"}],storageKey:null},{alias:null,args:null,concreteType:"FXCalFlowErrorDialogContent",kind:"LinkedField",name:"error",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"FXLinkErrorDialog_error"}],storageKey:null}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[u,t,n,l,s],kind:"Operation",name:"FXLinkingFlowDialogQuery",selections:[{alias:null,args:o,concreteType:"FXCalFlowConfig",kind:"LinkedField",name:"fxcal_web_init",plural:!1,selections:[{alias:null,args:null,concreteType:"FXCALFlowInfo",kind:"LinkedField",name:"info",plural:!1,selections:[{alias:null,args:c,concreteType:"FXCALAccountData",kind:"LinkedField",name:"account",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"account_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"account_type",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"display_name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"profile_pic_url",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"platform_name",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"auth_proof_string",storageKey:null},{alias:null,args:null,concreteType:"FXCalContent",kind:"LinkedField",name:"display_content",plural:!1,selections:[{alias:null,args:null,concreteType:"FXCalScreenContent",kind:"LinkedField",name:"cal_screen",plural:!1,selections:[k,{alias:null,args:null,kind:"ScalarField",name:"change_label",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"terms",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"help_link_title",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"help_link",storageKey:null},F],storageKey:null},{alias:null,args:null,concreteType:"FXCalDecalContent",kind:"LinkedField",name:"decal_screen",plural:!1,selections:[k,{alias:null,args:null,kind:"ScalarField",name:"subtitle",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"confirm",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"cancel",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"FXCalDisclosuresScreenContent",kind:"LinkedField",name:"disclosures_screen",plural:!1,selections:[k,{alias:null,args:null,concreteType:"FXDSection",kind:"LinkedField",name:"disclosures",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"icon",storageKey:null},{alias:null,args:null,concreteType:"FXDSSection",kind:"LinkedField",name:"subsections",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"type",storageKey:null},{alias:null,args:null,concreteType:"FXDContent",kind:"LinkedField",name:"content",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"content",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"link",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null},F,{alias:null,args:null,kind:"ScalarField",name:"secondary_button_label",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"FXCalFlowErrorDialogContent",kind:"LinkedField",name:"error",plural:!1,selections:[k,{alias:null,args:null,kind:"ScalarField",name:"body",storageKey:null},{alias:null,args:null,concreteType:"FXLCalFlowErrorDialogButton",kind:"LinkedField",name:"primary_button",plural:!1,selections:y,storageKey:null},{alias:null,args:null,concreteType:"FXLCalFlowErrorDialogButton",kind:"LinkedField",name:"secondary_button",plural:!1,selections:y,storageKey:null},{alias:null,args:null,concreteType:"FXLCalFlowErrorDialogButton",kind:"LinkedField",name:"negative_button",plural:!1,selections:y,storageKey:null}],storageKey:null}],storageKey:null}]},params:{id:"4296602887035046",metadata:{},name:"FXLinkingFlowDialogQuery",operationKind:"query",text:null}}})();l.hash='e665cdafc75deca6ba781db09d2388ce',m.exports=l},14024713,[]);
__d(function(g,r,i,a,m,e,d){"use strict";function n({children:n,fallback:l,isVisible:o=!0,onClose:s}){const c=r(d[2]).useIsMobile();return a(d[0]).createElement(r(d[0]).Suspense,{fallback:t(c)(s,o)},n)}function l(t,o){function s(l){return a(d[0]).createElement(n,i(d[3])({},o,{isVisible:o.isVisible(l),onClose:o.onClose(l)}),a(d[0]).createElement(t,l))}var c;return Object.defineProperty(s,'name',{value:`${l.name}(${null!==(c=t.name)&&void 0!==c?c:'Component'})`,writable:!1}),s}Object.defineProperty(e,'__esModule',{value:!0});const t=n=>(l,t)=>a(d[0]).createElement(i(d[1]),{deferSpinner:!0,isVisible:n||t,onClose:l,size:n?'large':'default'});e.default=n,e.fxDesktopDialogAndMobilePageFallback=t,e.withFXDesktopDialogAndMobilePageShellSuspense=l},14024714,[3,20775595,20775591,20971957]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),e.default=function({content:o,error:l,onClose:n}){function t(o){const l=r(d[3]).getLocalStorage(),t=null===l||void 0===l?void 0:l.getItem(r(d[4]).WEB_AUTH_URL);switch(o){case'WEB_AUTH':return()=>r(d[5]).redirect(i(d[6])(t));case'EXIT_FLOW':default:return n}}var u,v,c,b,_,s,y;null!=o||null!=l||i(d[1])(0);const f=null!==(u=r(d[0]).useFragment(i(d[2]),l))&&void 0!==u?u:o;return a(d[7]).createElement(i(d[8]),{body:i(d[6])(null===f||void 0===f?void 0:f.body),negativeButton:null!=(null===f||void 0===f?void 0:f.negative_button)?{label:i(d[6])(null===f||void 0===f?void 0:null===(v=f.negative_button)||void 0===v?void 0:v.label),onClick:t(i(d[6])(null===f||void 0===f?void 0:null===(c=f.negative_button)||void 0===c?void 0:c.action))}:void 0,primaryButton:{label:i(d[6])(null===f||void 0===f?void 0:null===(b=f.primary_button)||void 0===b?void 0:b.label),onClick:t(i(d[6])(null===f||void 0===f?void 0:null===(_=f.primary_button)||void 0===_?void 0:_.action))},secondaryButton:null!=(null===f||void 0===f?void 0:f.secondary_button)?{label:i(d[6])(null===f||void 0===f?void 0:null===(s=f.secondary_button)||void 0===s?void 0:s.label),onClick:t(i(d[6])(null===f||void 0===f?void 0:null===(y=f.secondary_button)||void 0===y?void 0:y.action))}:void 0,title:i(d[6])(null===f||void 0===f?void 0:f.title)})}},14024715,[20775591,9699437,14024716,20971596,14024709,20971912,21037084,3,14024717]);
__d(function(g,r,i,a,m,e,d){'use strict';const l={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"FXLinkAccountCard_account",selections:[{alias:null,args:null,kind:"ScalarField",name:"account_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"account_type",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"display_name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"profile_pic_url",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"platform_name",storageKey:null}],type:"FXCALAccountData",abstractKey:null};l.hash='a848d24fc4817ddb71b77917bf8d74cb',m.exports=l},14024716,[]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),e.default=function({body:l,disablePopInAnimation:o,isVisible:t,negativeButton:n,primaryButton:c,secondaryButton:u,title:b}){var s,v,y;return null!=n||null!=c||null!=u||i(d[0])(0),a(d[1]).createElement(i(d[2]),{body:l,disablePopInAnimation:o,isVisible:t,title:b},c&&a(d[1]).createElement(r(d[3]).DialogItem,{color:null!==(s=c.color)&&void 0!==s?s:'ig-primary-button',onClick:c.onClick},c.label),u&&a(d[1]).createElement(r(d[3]).DialogItem,{color:null!==(v=u.color)&&void 0!==v?v:'ig-secondary-button',onClick:u.onClick},u.label),n&&a(d[1]).createElement(r(d[3]).DialogItem,{color:null!==(y=n.color)&&void 0!==y?y:'ig-error-or-destructive',onClick:n.onClick},n.label))}},14024717,[9699437,3,14024718,21037102]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),r(d[0]),e.default=function({body:l,children:n,disablePopInAnimation:t,isVisible:s,media:c,onModalClose:o,size:u="default",title:E}){const b=!!c,f=null!=E||null!=l;return a(d[1]).createElement(i(d[2]),{disablePopInAnimation:t,isVisible:s,onClose:o,size:u},a(d[1]).createElement("div",{className:"rmWEa"},null!=c&&a(d[1]).createElement("div",{className:"BO6j9"},c),f&&a(d[1]).createElement("div",{className:"_12Ygk"},null!=E&&(b?a(d[1]).createElement(i(d[3]).Headline2,null,E):a(d[1]).createElement(i(d[3]).Title,null,E)),null!=l&&a(d[1]).createElement(i(d[3]).Body,{color:"ig-secondary-text"},l)),null!=n&&a(d[1]).createElement("div",{className:"bn3nC"},n)))}},14024718,[14024719,3,20775597,21037128]);
__d(function() {},14024719,[]);
__d(function(g,r,i,a,m,e,d){"use strict";function n(n){return n?'ig_fb_nux_find_friends_msite':'ig_fb_nux_find_friends_web'}function t(n){function o(t){const o=r(d[8]).nuxOnboardingUnitAddAccountButtonUI({buttonText:a(d[10]).FACEBOOK_CTA,isButtonLoading:!0,onButtonClick:()=>{}});return a(d[6]).createElement(r(d[11]).Suspense,{fallback:o},a(d[6]).createElement(n,t))}var _;return Object.defineProperty(o,'name',{value:`${t.name}(${null!==(_=n.name)&&void 0!==_?_:'Component'})`,writable:!1}),o}Object.defineProperty(e,'__esModule',{value:!0});var o=r(d[0]).withFXAPI(r(d[12]).withFXErrorBoundaryDialog(t(function({returnURL:t}){var o;const _=r(d[0]).useIsMobile(),u=_?'IG_NUX_MSITE':'IG_NUX_WEB',c=n(_),l=i(d[1])._("ig_fx_comet_master")?r(d[2]).appendQueryParams(r(d[3]).FX_ACCOUNTS_CENTER_ON_COMET_PROFILES_PATH,{flow:u,entry_point:c,next:t}):r(d[2]).appendQueryParams(r(d[3]).FX_ACCOUNTS_CENTER_PROFILES_PATH,{flow:u,entry_point:c}),f={flow:_?'IG_NUX_MSITE':'IG_NUX_WEB',device_id:r(d[4]).getDeviceId(),ig_web_extra_data:l,interface:'IG_WEB'},s=r(d[0]).useLazyLoadQuery(i(d[5]),f);return a(d[6]).createElement(i(d[7]),{buttonUI:r(d[8]).nuxOnboardingUnitAddAccountButtonUI,entryPoint:c,flow:u,returnURL:t,screenResources:i(d[9])(null===s||void 0===s?void 0:null===(o=s.fx_identity_management)||void 0===o?void 0:o.screen_resources),webAuthConfig:i(d[9])(null===s||void 0===s?void 0:s.fxcal_web_init)})}),{errorContent:r(d[13]).GENERIC_LINKING_FLOW_ERROR_CONTENT,onClick:({returnURL:n})=>{r(d[14]).redirect(n)},onError:t=>(t,o,_)=>{r(d[15]).logFXLinkingFlowEvent({event:'generic_error',initiatorAccountId:o,linkingFlowEntryPoint:n(_),debugData:t.stack})}}));e.default=o},14024720,[20775591,20971577,20971709,20971739,20971525,20775605,3,14024707,14024708,21037084,10485780,21037104,13828133,14024710,20971912,20774962]);
__d(function(g,r,i,a,m,e,d){"use strict";function n({children:n,errorContent:o,onClick:t,onError:l=((n,o,t)=>{})}){var u;const c=i(d[0])(null===(u=r(d[1]).useSelector(r(d[2]).getViewer))||void 0===u?void 0:u.fbid),b=r(d[3]).useIsMobile();return a(d[4]).createElement(i(d[5]),{errorRenderer:n=>a(d[4]).createElement(i(d[6]),{body:o.body,primaryButton:{label:o.button_label,onClick:t},title:o.title}),onError:(n,o)=>{l(n,c,b)}},n)}function o(t,l){function u(o){return a(d[4]).createElement(n,{errorContent:l.errorContent,onClick:()=>l.onClick(o),onError:(n,t,u)=>{l.onError&&l.onError(o)(n,t,u)}},a(d[4]).createElement(t,o))}var c;return Object.defineProperty(u,'name',{value:`${o.name}(${null!==(c=t.name)&&void 0!==c?c:'Component'})`,writable:!1}),u}Object.defineProperty(e,'__esModule',{value:!0}),e.default=n,e.withFXErrorBoundaryDialog=o},13828133,[21037084,5,20971876,20775591,21037104,21037393,14024717]);