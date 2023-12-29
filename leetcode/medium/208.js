// A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker.

// Implement the Trie class:

// Trie() Initializes the trie object.
// void insert(String word) Inserts the string word into the trie.
// boolean search(String word) Returns true if the string word is in the trie (i.e., was inserted before), and false otherwise.
// boolean startsWith(String prefix) Returns true if there is a previously inserted string word that has the prefix prefix, and false otherwise.

class Trie{
    constructor(){
        this.root={}
    }
    insert(word){
        let node=this.root;
        for(let k of word){
            if(node[k]==null)node[k]={}
            node=node[k]
        }
        node.isWord=true;
    }
    traverse(word){
    let node=this.root
    for(let k of word){
        node=node[k]
        if(node==null) return null
    }
    return node;
    }
    search(word){
        const node=this.traverse(word);
        return node!=null&&node.isWord===true;
    }
    startsWith(prefix){
        return this.traverse(prefix) !=null
    }
}