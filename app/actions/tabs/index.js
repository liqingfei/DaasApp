/* import request from 'superagent' */

/* let ajaxObj = null */

/* const davidSearch = function(option){ */
/* 	return (dispatch)=>{ */
/* 		if( ajaxObj != null ){ */
/* 			ajaxObj.abort() */
/* 		} */
/* 		ajaxObj = request */
/* 			.get('/davidSearch') */
/* 			.query(option) */
/*             .end(function(err,res){ */
/*                 dispatch({ */
/*                     type : 'GET_COMPANY_LIST', */
/*                     companyList : res.body.company || [] */
/*                 }) */
/*             }) */
/* 	} */
/* } */

/* const showDavidSearchTipBox = function(){ */
/* 	return { */
/* 		type : 'SHOW_DAVID_SEARCH_TIP_BOX' */
/* 	} */
/* } */

const tabSelect = function(tab){
	return {
		type : 'tab_select' ,
		tab  : tab ,
	}
}

export {
	tabSelect ,
}
