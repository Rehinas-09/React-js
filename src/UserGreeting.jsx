import PropTypes from "prop-types"

function UserGreeting(props){
    const welcomeMessage=<h2 className="welcome-message">
               welcome{props.username}</h2>
    const loginPrompt=  <h2 class="login-prompt">
                Please log in to continue</h2>   
 return(props.isLoggedIn?welcomeMessage:loginPrompt

 )
}
UserGreeting.prototype={
    isLoggedIn:PropTypes.bool,
    username:PropTypes.string,
}
UserGreeting.defaultProps={
   isLoggedIn:true,
   username:"Geust" 
}
export default UserGreeting        