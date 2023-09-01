import { defineStore } from "pinia";

export const useVoteStore = defineStore('vote', ()=>{

    const voteData = ref({});

    setVoteData = (data)=>{
        voteData.value = data;
        console.log(data);
    }
    return{voteData,setVoteData};
});