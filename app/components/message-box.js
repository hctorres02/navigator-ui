const computed = {
    ...Vuex.mapState('message', ['type', 'path', 'body'])
}

const methods = {
    ...Vuex.mapActions('message', ['clearMessage'])
}

const MessageBox = {
    name: 'MessageBox',
    computed,
    methods,
    template: `
    <div v-if="path" class="message" :class="type">
        <div class="message-header">
            <p>{{ body }}</p>
            <button class="delete" @click="clearMessage"></button>
        </div>
        <div class="message-body">
          {{ path }}
        </div>
    </div>
    `
}

export default MessageBox