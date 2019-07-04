import { StyleSheet, Dimensions } from 'react-native';



const styles = StyleSheet.create({

    container: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    //sPlashScreen
    containerSplash: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#CD5C5C',
    },

    inputBox: {
        fontFamily: 'Kanit-Light',
        width: 250,
        height: 40,
        color: '#ffffff',
        paddingHorizontal: 5,
        marginVertical: 10,
        fontSize: 15
    },

    buttonText: {
        fontFamily: 'Kanit-Light',
        fontSize: 15,
        color: '#ffffff',
        marginVertical: 10,

    },

    button: {
        flexDirection: 'row',
        width: 270,
        backgroundColor: '#F08080',
        marginVertical: 15,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },

    buttonSign: {
        flexDirection: 'row',
        width: 270,
        backgroundColor: '#F08080',
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },

    viewInput: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },

    loginSocial: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
    },

    googleBtn: {
        backgroundColor: '#CC3333'
    },

    regisSocialText: {
        fontFamily: 'Kanit-Light',
        fontSize: 15,
        color: '#ffffff',
        alignSelf: 'center',
    },
    signupContext: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    flexIcon: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },

    signupText: {
        textDecorationLine: 'underline',
        fontFamily: 'Kanit-Light',
        color: '#DCDCDC',
        fontSize: 14
    },


    //Drawer
    sideMenuContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: '#CD5C5C',
        alignItems: 'center',

    },

    avatar: {
        marginVertical: 20,
        alignSelf: 'center'

    },
    avatarContainer: {
        width: '100%'

    },
    wrapDrawer: {
        width: '100%',
        height: 1,
    },
    listDrawer: {
        backgroundColor: '#FA8072',
        fontFamily: 'Kanit-Light',

    },

    textUser: {
        fontFamily: 'Kanit-Light',
        color: '#ffffff',
        alignSelf: 'center',
        fontSize: 20,
        paddingBottom: 13
    },

    //Overlay
    overlayText: {
        fontFamily: 'Kanit-Light',
        color: 'white',
        alignSelf: 'center',
    },


    overlayTextHeader: {
        fontFamily: 'Kanit-Light',
        fontSize: 20,
        alignSelf: 'center',
        color: 'white'
    },

    overlayContent: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#CD5C5C',

    },

    overlayBox: {
        backgroundColor: '#FA8072',
        padding: 50
    },

    // VolunteerScreen
    wrapVol: {
        flex: 1,
        backgroundColor: '#FA8072',

    },

    wrapChart: {
        alignSelf: 'center',
        paddingVertical: 15

    },

    wrapTextVolSc: {
        padding: 15,
        backgroundColor: 'white',
        alignItems: 'center',
        fontSize: 30,


    },

    textVolSc: {
        fontFamily: 'Kanit-Light',
        color: '#CD5C5C',

    },

    //chart
    chart: {
        backgroundColor: 'white',
        height: 200,
        fontFamily: 'Kanit-Light',
    },



    // userBox
    wrapUserBox: {

        backgroundColor: 'white',
        width: Dimensions.get('window').width - 15,
        alignSelf: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
        padding: 20,
        flexDirection: 'row'
    },

    textUserBox: {
        fontFamily: 'Kanit-Light',
        fontSize: 12,
        color: '#CD5C5C',

    },


    textUserBoxHead: {
        fontFamily: 'Kanit-Light',
        fontSize: 15,
        color: '#CD5C5C',

    },




    contentText: {
        flexDirection: 'row',
    },

    divideSection: {
        borderLeftWidth: 0.5,
        borderLeftColor: '#CD5C5C',
        paddingHorizontal: 15,
        marginLeft: 20
    },

    // editUser
    wrapEdit:{
        alignItems:'center',
        padding:30
    },


    // HowtoUse
    buttonHt: {
        width: Dimensions.get('window').width - 15,
        alignSelf: 'center',
        marginTop: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        backgroundColor: '#DCDCDC',


    },

    // CardStory
    wrapCardStory: {
        width: Dimensions.get('window').width - 15,
        alignSelf: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    }


});

export default styles;