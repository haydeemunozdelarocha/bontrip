var axios = require('axios');

const PATH = 'http://localhost:8080/';
const GET_RECOMMENDED = 'api/venues/recommended';
const GET_PLACES ='api/venues/';
const GET_LIKED_PLACES ='api/places/';
const GET_TEST_PLACES ='api/places/test';
const ADD_PLACE ='api/places/add';
const GET_DAY ='api/places/day/';
const UPDATE_PLACES ='api/places/schedule/';
const UPDATE_ORDER ='api/places/order';

module.exports = {
  getRecommended:function(city){
    city = encodeURI(city);

    var requestUrl = `${PATH}`+`${GET_RECOMMENDED}`+'?search='+city;

    return axios.request({
      method:'get',
      url:requestUrl,
      headers:{
        'Content-Type':'application/x-www-form-urlencoded'
      }
    }).then(function(res,err){
      if(res){
        return res;
      } else {
        return err;
      }
    },function(res){
      throw new Error('error');
    })
  },
    getLikedPlaces:function(user_id,tripId){

    var requestUrl = `${PATH}`+`${GET_TEST_PLACES}`+'?user='+user_id+'&trip='+tripId;

    return axios.request({
      method:'get',
      url:requestUrl,
      headers:{
        'Content-Type':'application/x-www-form-urlencoded'
      },
      data:{
        _id:user_id,
        tripId:tripId
      }
    }).then(function(res,err){
      if(res){
        return res;
      } else {
        console.log(err);
        return err;
      }
    },function(res){
      throw new Error('error');
    })
  },
    viewPlace:function(place_id){

    var requestUrl = `${PATH}`+`${GET_PLACES}`+place_id;

    return axios.request({
      method:'get',
      url:requestUrl,
      headers:{
        'Content-Type':'application/x-www-form-urlencoded'
      }
    }).then(function(res,err){
      if(res){
        return res;
      } else {
        return err;
      }
    },function(res){
      throw new Error('error');
    })
  },
    addPlace:function(place){

    var requestUrl = `${PATH}`+`${ADD_PLACE}`;


    return axios.request({
      method:'post',
      url:requestUrl,
      headers:{
        'Content-Type':'application/x-www-form-urlencoded'
      },
      data:{venueId:place.venueId,
            source:place.source,
            user_id:place.user_id}
    }).then(function(res,err){
      if(res){
        return res;
      } else {
        console.log(err);
        return err;
      }
    },function(res){
      throw new Error('error');
    })
  },
  getDay:function(day,tripId,userId){

    var requestUrl = `${PATH}`+`${GET_DAY}`+encodeURI(day)+`/`+tripId+`/`+userId;


    return axios.request({
      method:'get',
      url:requestUrl,
      headers:{
        'Content-Type':'application/x-www-form-urlencoded'
      }
    }).then(function(res,err){
      if(res){
        return res;
      } else {
        console.log(err);
        return err;
      }
    },function(res){
      throw new Error('error');
    })
  }
  ,
  schedulePlace:function(id,date){

    var requestUrl = `${PATH}`+`${UPDATE_PLACES}`+id+`/`+date;


    return axios.request({
      method:'get',
      url:requestUrl,
      headers:{
        'Content-Type':'application/x-www-form-urlencoded'
      }
    }).then(function(res,err){
      if(res){
        return res;
      } else {
        console.log(err);
        return err;
      }
    },function(res){
      throw new Error('error');
    })
  },
    changeOrder:function(id1,order1,id2,order2){

    var requestUrl = `${PATH}`+`${UPDATE_ORDER}`+`?id1=`+id1+`&id2=`+id2+`&order1=`+order1+`&order2=`+order2;

    return axios.request({
      method:'get',
      url:requestUrl,
      headers:{
        'Content-Type':'application/x-www-form-urlencoded'
      }
    }).then(function(res,err){
      if(res){
        return res;
      } else {
        console.log(err);
        return err;
      }
    },function(res){
      throw new Error('error');
    })
  }
}
