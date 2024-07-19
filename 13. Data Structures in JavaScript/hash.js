class HashTable {
    constructor(size) {
        this.map = new Array(size);
    }

    #hash(key) {
        let hash = 0;
        for(let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.map.length;
        }

        return hash;
    }

    set(key, value) {
        let hash = this.#hash(key);
        if(!this.map[hash])
            this.map[hash] = [];
        this.map[hash].push([key, value]);
    }

    get(key) {
        let hash = this.#hash(key);
        let bucket = this.map[hash];
        if(bucket) {
            for (let i = 0; i < bucket.length; i++) {
                if(bucket[i][0] === key)
                    return bucket[i][1];
            }
        }
        else
            return 'key does not exist';
    }
}

let map = new HashTable(10);
map.set('AB de Villiers', 17);
map.set('Virat Kohli', 18);
map.set('Sachin Tendulkar', 10);
map.set('Ricky Ponting', 14);
map.set('Brian Lara', 9);
map.set('Jacques Kallis', 3);
map.set('Kumar Sangakkara', 11);
map.set('Steve Smith', 49);
map.set('Chris Gayle', 333);
map.set('Kane Williamson', 22);
map.set('Joe Root', 66);


console.log(map.get('Steve Smith'));
