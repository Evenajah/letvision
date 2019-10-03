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
        // backgroundColor: '#D2B48C',
    },

    inputBox: {
        fontFamily: 'Kanit-Light',
        width: 220,
        height: 40,
        color: '#ffffff',
        paddingHorizontal: 5,
        marginVertical: 10,
        fontSize: 15,
        borderBottomColor: '#fff',
        borderBottomWidth: 1

    },
    inputBoxUpdateUser: {
        fontFamily: 'Kanit-Light',
        width: 220,
        height: 40,
        color: '#ffffff',
        paddingHorizontal: 5,
        marginVertical: 10,
        fontSize: 15,

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
        backgroundColor: '#778899',
        marginVertical: 15,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },

    buttonSign: {
        flexDirection: 'row',
        width: 270,
        backgroundColor: '#778899',
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
        // backgroundColor: '#FA8072',

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
        color: '#2F4F4F',

    },


    textUserBoxHead: {
        fontFamily: 'Kanit-Light',
        fontSize: 15,
        color: '#2F4F4F',

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
    wrapEdit: {
        alignItems: 'center',
        padding: 30
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
    },

    wrapCardMyStory: {
        width: Dimensions.get('window').width - 45,
        alignSelf: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },

    //settingScreen
    wrapSettingItem: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        width: Dimensions.get('window').width - 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        padding: 25,
        zIndex: 1

    },

    iconSetting: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        padding: 15,

    },

    textIconSetting: {
        fontFamily: 'Kanit-Light',
        fontSize: 15,
        color: '#CD5C5C',
        textAlign: 'center'
    },

    contactContent: {
        flexDirection: 'row',
    },

    wrapContact: {
        marginVertical: 10,
        backgroundColor: '#DCDCDC',
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        width: Dimensions.get('window').width - 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        padding: 15,
    },

    inputBoxSetting: {
        fontFamily: 'Kanit-Light',
        width: 150,
        height: 40,
        color: '#ffffff',
        paddingHorizontal: 5,
        marginVertical: 10,
        fontSize: 15
    },

    btnChangeData: {
        borderRadius: 0,
        marginLeft: 0,
        marginRight: 0,
        marginBottom: 0,
        backgroundColor: '#FA8072',
        width: 280,
        marginVertical: 20,
        alignSelf: 'center'
    },

    shadowOverlay: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        padding: 15,
    },

    formSetting: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'

    },
    headerSettingText: {
        fontFamily: 'Kanit-Light',
        color: 'white',
        fontSize: 25,
        alignSelf: 'center',
        borderBottomWidth: 0.5,
        paddingBottom: 10,
        paddingHorizontal: 50,
        borderBottomColor: '#fff'
    },

    loading: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },

    overlayLoading: {
        backgroundColor: 'transparent', shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0,
        shadowRadius: 0,
        elevation: 0,
    },

    //textareaform
    textAreaForm: {
        backgroundColor: '#696969',
        padding: 10,
        textAlignVertical: 'top',
        fontFamily: 'Kanit-Light',
        fontSize: 17,
        color: '#fff',
        marginTop: 10,
        borderRadius: 15,
        marginHorizontal: 15,
        width: 300
    },

    headerCreateStoryText: {
        fontFamily: 'Kanit-Light',
        color: 'white',
        fontSize: 25,
        alignSelf: 'center',
        borderBottomWidth: 0.5,
        paddingBottom: 10,
        justifyContent: 'center',
        borderBottomColor: '#fff',
        marginTop: 15,
        marginBottom: 15,

    },

    isbnForm: {
        backgroundColor: '#696969',
        padding: 7,
        textAlignVertical: 'top',
        fontFamily: 'Kanit-Light',
        fontSize: 17,
        color: '#fff',
        borderRadius: 15,
        marginHorizontal: 15,
        marginBottom: 10,
        width: 200
    },

    itemsBookForm: {
        backgroundColor: '#696969',
        padding: 7,
        textAlignVertical: 'top',
        fontFamily: 'Kanit-Light',
        fontSize: 17,
        color: '#fff',
        borderRadius: 15,
        marginHorizontal: 15,
        marginBottom: 10,
        width: 300
    },

    btnFormAddStory: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        flexDirection: 'row'
    },

    // listStory

    cardListStory: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FA8072'
    },

    // bookList
    listBook: {
        flexDirection: 'row',
        backgroundColor: '#F5F5F5',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        
        elevation: 24,
    }



});


export default styles;