import Dexie from 'dexie'

// Define the database
class MyDatabase extends Dexie {
  items: Dexie.Table<Item, number>

  constructor() {
    super('CRUDAppDB')
    this.version(1).stores({
      items: '++id, name',
    })
    this.items = this.table('items')
  }
}

// Define the structure of your data
interface Item {
  id?: number
  name: string
}

class DexieManager {
  private db: MyDatabase

  constructor() {
    this.db = new MyDatabase()
  }

  // Add a new item
  async addItem(name: string): Promise<number> {
    return this.db.items.add({ name })
  }

  // Get all items
  async getItems(): Promise<Item[]> {
    return this.db.items.toArray()
  }

  // Update an item
  async updateItem(id: number, name: string): Promise<void> {
    await this.db.items.update(id, { name })
  }

  // Delete an item
  async deleteItem(id: number): Promise<void> {
    await this.db.items.delete(id)
  }
}

export default DexieManager
