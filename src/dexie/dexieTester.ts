import DexieManager from './dexie'

const dexieManager = new DexieManager()

dexieManager.addItem('New Item').then((id) => {
  console.log(`Added item with ID ${id}`)
})

dexieManager.getItems().then((items) => {
  console.log('Items:', items)
})

dexieManager.updateItem(1, 'Updated Item').then(() => {
  console.log('Item updated')
})

dexieManager.deleteItem(1).then(() => {
  console.log('Item deleted')
})
