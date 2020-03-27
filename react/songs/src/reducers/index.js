
import { combineReducers } from "redux";

const songsReducer = ()=>{
  return [
    {title:'No scrubs',duration:'4:05'},
    {title:'Macerana',duration:'2:05'},
    {title:'All star',duration:'3:15'},
    {title:'I want it that',duration:'1:45'},
  ];
}

const selectedSongReducer = (selectedSong=null,action) =>{
  if(action.type === 'SONG_DELECTED'){
    return action.payload;
  }
  return selectedSong;
}

export default combineReducers({
  songs: songsReducer,
  selectedSong : selectedSongReducer
});