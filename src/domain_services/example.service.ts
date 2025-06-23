export class ExampleService {
    async create(payload: any) {
        return { id: 1, name: "example" }
    }

    async getById(id: any) {
        return { id: id, name: "example" }
    }

    async paginate(page: any, pageSize: any) {
        return [{id: 1, name: "test"}]
    }

    async delete(id: any) {
        return { id }
    }

    async update(id: any) {
        return { id }
    }
}