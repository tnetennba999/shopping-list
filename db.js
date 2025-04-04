const { createClient } = supabase

class ShoppingList {
    databaseName = "shopping_list"
    constructor(client) {
        this.client = client
    }

    async fetch() {
        let { data, error } = await this.client.from(this.databaseName).select()
        if (!error) {
            console.log('data: ', data)
            return data
        } else {
            console.log('error: ', data)
            throw error
        }
    }

    async addItem(name, userName) {
        return await this.client.from(this.databaseName).insert({
            name,
            user_name: userName
        }).select()
    }

    async deleteItem(id) {
        return await this.client.from(this.databaseName).delete().eq('id', id)
    }
}