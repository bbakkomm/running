import AuthStackNavigtor from "../stack/AuthStackNavigtor";
import MainDrawerNavigator from "../drawer/MainDrawerNavigator";

function RootNavigator (){
    // const isLoggedIn = true;
    const isLoggedIn = false;

    return <>{isLoggedIn ? <MainDrawerNavigator /> : <AuthStackNavigtor />}</>
}

export default RootNavigator;