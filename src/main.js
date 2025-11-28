import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import BaseButton from './components/elements/BaseButton.vue'
import BaseTitle from './components/elements/BaseTitle.vue'
import HeroTitle from './components/elements/HeroTitle.vue'
import SubTitle from './components/elements/SubTitle.vue'
import InputField from './components/elements/InputField.vue'
import BaseImage from './components/elements/BaseImage.vue'
import BaseParagraph from './components/elements/BaseParagraph.vue'
import BaseTextArea from './components/elements/BaseTextArea.vue'
import ListItem from './components/elements/ListItem.vue'
import TableHeader from './components/elements/TableHeader.vue'
import BaseTable from './components/elements/BaseTable.vue'
import TableRow from './components/elements/TableRow.vue'

const app = createApp(App)

app.component('BaseButton', BaseButton)
app.component('BaseTitle', BaseTitle)
app.component('HeroTitle', HeroTitle)
app.component('SubTitle', SubTitle)
app.component('InputField', InputField)
app.component('BaseImage', BaseImage)
app.component('BaseParagraph', BaseParagraph)
app.component('BaseTextArea', BaseTextArea)
app.component('ListItem', ListItem)
app.component('TableHeader', TableHeader)
app.component('BaseTable', BaseTable)
app.component('TableRow', TableRow)

app.mount('#app')
