import AuthStackNavigtor from "../stack/AuthStackNavigtor";
import MainDrawerNavigator from "../drawer/MainDrawerNavigator";

function RootNavigator (){
    const isLoggedIn = true;

    return <>{isLoggedIn ? <MainDrawerNavigator /> : <AuthStackNavigtor />}</>
}

export default RootNavigator;