//83. Remove Duplicates from Sorted List

const head = {
    val: 1,
    next: {
        val: 1,
        next: {
            val: 2,
            next: {
                val: 3,
                next: {
                    val: 3,
                    next: null
                }
            }
        },

    }
}
var deleteDuplicates = function (head) {
    debugger;

    let current = head;
    while (current !== null && current.next !== null) {
        debugger;
        if(current.val === current.next.val) {
            current.next = current.next.next; // Удаляем дубликат - перепрыгиваем через него
        } else {
            current = current.next; // Двигаемся вперед только если нет дубликата
        }

    }
    return head;
};

console.log(deleteDuplicates(head))

