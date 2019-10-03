import React from 'react';
import { Text, View, TextInput, ScrollView, Alert, ActivityIndicator, Picker } from 'react-native';


// component
import { Icon, Button, Image } from 'react-native-elements'
import LoadingRequest from '../Overlay/LoadingRequest';
import OverlayScanBarcode from '../Overlay/OverlayScanBarcode';

// redux
import { connect } from 'react-redux';


//stylesheet
import styles from '../../styles';


// service
import axios from 'axios';

//timeStamp
import moment from 'moment';


// permission+barcode
import * as Permissions from 'expo-permissions';




class FormBook extends React.Component {

      constructor(props) {

            super(props);
            this.state = {
                  isbnInput: '',
                  categoryItems: [],
                  categorySelect: '',
                  book:{}
             
            }

            
      }



      componentDidMount() {
            this.getCategory();
      }


      getCategory() {

            this.props.setLoading(true);

            const service = 'https://us-central1-letview-db16d.cloudfunctions.net/category';

            axios.get(service)
                  .then((response) => {
                        
                        this.setState({ categoryItems: response.data })

                        this.props.setLoading(false);
                  })
                  .catch((error) => {
                        Alert.alert('Error', error.message);
                  })

      }

      mapCategory() {
            
            return this.state.categoryItems.map((itemCategory, i) => {
                  return (
                        
                        <Picker.Item key={i} label = {itemCategory.categoryValue} value= {itemCategory.categoryId} />

                  )
            });
      }


     
      getPermissionsCamera = async () => {
                  const { status } = await Permissions.askAsync(Permissions.CAMERA);

                  if (status === 'granted') {
                        this.props.setOverlayScan(true);
                  } else {
                        Alert.alert('Hey! You heve not enabled selected permissions');
                  }
      }



      getBookWithApi = () => {

            if (this.state.isbnInput === '' || this.state.isbnInput.length < 10) {

                  Alert.alert('Warning', 'ISBN is between 10 - 13 characters')

            } else {
                  this.props.setLoading(true);
                  // ยิง api เข้า googlebook
                  const apiBook = 'https://www.googleapis.com/books/v1/volumes?q=isbn=';


                  axios.get(apiBook + this.state.isbnInput)
                        .then((response) => {

                              // console.log(response.data);
                              const responseBookItem = response.data.items[0].volumeInfo;


                              // เช็ค response ว่าตรงกับหนังสือที่ inpuit ไหม
                              if (responseBookItem.industryIdentifiers[0].identifier !== this.state.isbnInput) {

                                    Alert.alert('Sorry', 'This book dont have in my data');
                                    this.props.setLoading(false);

                              } else {
                                   this.setState({

                                    book : {    
                                                isbn: this.state.isbnInput,
                                                titleBookName: responseBookItem.title,
                                                authorName: responseBookItem.authors[0],
                                                publishName: responseBookItem.publisher,
                                                discription: responseBookItem.description,
                                                userId: this.props.user.uid,
                                                // เช็คว่ามีใน Api ที่ยิงไปมั้ย
                                                image: !!(responseBookItem.imageLinks) ? responseBookItem.imageLinks.smallThumbnail : 'https://cdn.pixabay.com/photo/2018/01/03/09/09/book-3057902_960_720.png'
                                          }
                                    })

                                    // patch ข้อมูลหนังสือ
                                    this.props.setBookItem(this.state.book);

                                    // ปิดการ loading
                                    this.props.setLoading(false);
                              }


                        })
                        .catch((error) => {
                              Alert.alert('Error', error.message);

                              // ปิดการ loading
                              this.props.setLoading(false);
                        })
                  }
            }


            
            addBook = () => {
                  if(this.props.bookItems.isbnCode === '' || this.props.bookItems.titleBookName === '' || this.props.bookItems.authorName === ''
                        || this.props.bookItems.publishName === '' || this.props.bookItems.discription === '' 
                        || this.state.categorySelect === 'none' || this.props.bookItems.uid === '' ){
                        Alert.alert('Warning','Please fill up this form');
                  }else{

                        // Start Loading
                        this.props.setLoading(true);

                        const serviceBook = 'https://us-central1-letview-db16d.cloudfunctions.net/book/';
                          //timestamp
                        const date = moment(Date.now()).format("MMMM Do YYYY, h:mm:ss a");

                        // objAdd
                        const objAddBook = {
                              
                              ...this.state.book,
                              category:this.state.categorySelect,
                              date:date
                        };
                                              

                        axios.post(serviceBook, objAddBook)
                        .then((response) => {
                              
                              if(response.data === 'success'){
                                    this.props.setLoading(false);
                                    this.props.setBookItem({
                                          isbnCode: '',
                                          titleBookName: '',
                                          authorName: '',
                                          publishName: '',
                                          discription: '',
                                          userId: '',
                                          image: 'https://cdn.pixabay.com/photo/2018/01/03/09/09/book-3057902_960_720.png'
                                    });
                                    this.setState({ isbnInput:'' })
                                    Alert.alert("Success","Add your book in inventory");
                                    
                              }
                              
                        })
                        .catch((error) => {
                              Alert.alert('Error',error.message)
                              console.log(error)
                              this.props.setLoading(false);
                        })          
                  }
            }
            
           
            render() {

                  return (
                        <View style={{ flex: 1 }}>

                              <ScrollView>


                                    <View style={styles.viewInput}>
                                          <Icon

                                                name='book'
                                                type='font-awesome'
                                                color='#ffffff'
                                                size={35}
                                                iconStyle={{ marginRight: 15 }}
                                          />

                                          <Text style={styles.headerCreateStoryText}>

                                                สร้างหนังสือ
      
                                    </Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'center', }}>

                                          <TextInput
                                                placeholder='เลข ISBN'
                                                keyboardType='numeric'
                                                placeholderTextColor='#fff'
                                                value={this.state.isbnInput}
                                                onChangeText={isbnInput => this.setState({ isbnInput })}
                                                style={styles.isbnForm}
                                          />

                                          <Icon

                                                name='search'
                                                type='font-awesome'
                                                color='#ffffff'
                                                onPress={() => this.getBookWithApi()}
                                          />
                                    </View>


                                    <Button
                                          icon={
                                                <Icon

                                                      name='barcode'
                                                      type='font-awesome'
                                                      color='#ffffff'

                                                />
                                          }
                                          title="สแกน Barcode ISBN"
                                          buttonStyle={{ width: 300, alignSelf: 'center', backgroundColor: '#708090' }}
                                          titleStyle={{ marginLeft: 15, fontFamily: 'Kanit-Light' }}
                                          onPress={() => this.getPermissionsCamera()}

                                    />





                                    <View style={{ backgroundColor: '#708090', marginTop: 30, padding: 20, alignItems: 'center', justifyContent: 'center' }}>

                                          <Image
                                                source={{ uri: this.props.bookItems.image }}
                                                style={{ width: 200, height: 200, resizeMode: 'contain', marginBottom: 15 }}
                                                PlaceholderContent={<ActivityIndicator />}
                                          />


                                          <Picker
                                                selectedValue={this.state.categorySelect}                                                                                     
                                                style={{ width: 300 ,backgroundColor: '#2F4F4F',color:'#ffffff',marginBottom:15,borderRadius:15 }}
                                                onValueChange={(itemValue, itemIndex) => 
                                                            this.setState({categorySelect: itemValue})                                                                                                                                                    
                                                }>
                                                      

                                                <Picker.Item label="กรุณาเลือกหมวดหมู่..." value="none" />
                                                {this.mapCategory()}

                                          </Picker>


                                          <TextInput
                                                placeholder='ชื่อเรื่อง'
                                                placeholderTextColor='#fff'
                                                value={this.props.bookItems.titleBookName}
                                                editable={false}
                                                style={styles.itemsBookForm}
                                          />


                                          <TextInput
                                                placeholder='ชื่อผู้แต่ง'
                                                placeholderTextColor='#fff'
                                                value={this.props.bookItems.authorName}
                                                editable={false}
                                                style={styles.itemsBookForm}
                                          />


                                          <TextInput
                                                placeholder='สำนักพิมพ์'
                                                placeholderTextColor='#fff'
                                                value={this.props.bookItems.publishName}
                                                editable={false}
                                                style={styles.itemsBookForm}
                                          />



                                          <TextInput
                                                multiline={true}
                                                numberOfLines={5}
                                                value={this.props.bookItems.discription}
                                                placeholder='รายละเอียด...'
                                                placeholderTextColor='#fff'
                                                editable={false}
                                                style={styles.textAreaForm}

                                          />



                                    </View>


                              </ScrollView>





                              <View style={styles.btnFormAddStory}>
                                    <Icon
                                          raised
                                          name='backward'
                                          type='font-awesome'
                                          color='#BEBEBE'
                                          reverse={true}
                                          underlayColor='#FF6347'
                                          containerStyle={{ opacity: 0.8 }}
                                          onPress={() => this.props.setOverlayCreateStory(false)}
                                          iconStyle={{color:'#2F4F4F'}}
                                    />

                                    <Icon
                                          raised
                                          name='check'
                                          type='font-awesome'
                                          color='#F5F5F5'
                                          reverse={true}
                                          underlayColor='#FF6347'
                                          containerStyle={{ opacity: 0.8 }}
                                          onPress={() => this.addBook()}
                                          iconStyle={{color:'#2F4F4F'}}

                                    />



                              </View>

                              <LoadingRequest />

                              <OverlayScanBarcode />

                        </View>


                  );
            }
      }


      const mapStatetoProps = (state) => {
            return {
                  user: state.user,
                  overlayCreateStory: state.overlayCreateStory,
                  overlayScan: state.overlayScan,
                  loading: state.loading,
                  bookItems: state.bookItems
            }
      }

      const mapDispatchToProps = (dispatch) => {
            return {
                  setOverlayCreateStory: (status) => {
                        dispatch({
                              type: "setOverlayCreateStory",
                              status: status
                        })

                  },

                  setLoading: (status) => {
                        dispatch({
                              type: "startLoading",
                              status: status
                        })

                  },

                  setOverlayScan: (status) => {
                        dispatch({
                              type: "setOverlayScan",
                              status: status
                        })

                  },

                  setBookItem: (items) => {
                        dispatch({
                              type: "setBookItems",
                              item: items
                        })

                  },
                  
            }
      }

      export default connect(mapStatetoProps, mapDispatchToProps)(FormBook);
