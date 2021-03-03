class Node {
    constructor(element){
        this.element = element
        this.next = null
    }
}

class LinkedList {
    constructor (){
        this.head = new Node("head")
    }

    remove(item){
        let prevNode = this.findPrevious(item)
        !(prevNode.next == null) ? prevNode.next = prevNode.next.next : null
    }

    findPrevious(item){
        let currNode = this.head
        while(!(currNode.next == null) && (currNode.next.element != item)){
            currNode = currNode.next
        }
        return currNode
    }

    display() {
        let currNode = this.head
        while(!(currNode.next == null)){
            console.log(currNode.next.element)
            currNode = currNode.next
        }
    }

    find(item){
        let currNode = this.head
        while(currNode.element != item){
            currNode = currNode.next
        }
        return currNode
    }

    insert(newElement, item){
        let newNode = new Node(newElement)
        let current = this.find(item)
        newNode.next = current.next
        current.next = newNode
    }
}

let cities = new LinkedList()
cities.insert("Conway", "head")
cities.insert("Russelville", "Conway")
cities.insert("Carlisle", "Russelville")
cities.insert("Alma", "Carlisle")

cities.display()

cities.remove("Carlisle")
cities.display()