import { defineStore } from "pinia";

export const useVoteStore = defineStore('vote', ()=>{

    const voteData = ref({});

    const isFatch = ref(false);

    const setVoteData = (data)=>{
        voteData.value = data;
        //console.log(data);
    };

    const addVote = async (type)=>{
        if(isFatch.value) return;
        isFatch.value = true;
        try {
            const data = await $fetch('https://vue-lessons-api.vercel.app/vote/add',{
                method:'POST',
                body: { type },
            });
            voteData.value = data;
        } catch (error) {
            console.log(error)
        }finally{
            isFatch.value = false;
        }
        //console.log(data)
    }
    return{voteData,setVoteData,addVote,isFatch};
});