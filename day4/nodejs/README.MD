#### Installation
``` 
npm install --save mongodb
npm install --save mongoose
```
#### Fix Warning 
```
mongoose.Promise = global.Promise;
const db = mongoose.connect('mongodb://localhost:27017/test', { useMongoClient: true });
