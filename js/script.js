

const{createApp} = Vue;

const app = createApp({
    data() {
        return{
            message: 'Hello Vue!',

            image:'https://picsum.photos/seed/picsum/200/300',
            
            imageContainer:   'img-container',

            imageStyle:'picsum-img',
        }
    }
}).mount('#app');