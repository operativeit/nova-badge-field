import IndexField from './components/IndexField'
import DetailField from './components/DetailField'
import FormField from './components/FormField'

Nova.booting((app, router, store) => {
    app.component('index-badge', IndexField);
    app.component('detail-badge', DetailField);
    app.component('form-badge', FormField);

})
