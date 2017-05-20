var list = function(previus, pos, data) {
    if(pos == undefined){
        this.pos = -1;
        this.DATA = {};
        this.previus = null;
        this.next = null;
    } else {
        this.pos = pos;
        this.DATA = data;
        this.previus = previus;
        this.next = null;
    }
}

list.prototype.isEmpty = function() {
    if(this.next != null) {
        return false;
    }
    return true;
}

list.prototype.add = function (parameter) {
    if (this.next != null) {
        this.next.add(parameter);
    } else {
        this.next = new list((new list(this.previus, this.pos, this.DATA)), this.pos+1, parameter);
    }
}

list.prototype.length = function() {
    if (this.next != null) {
        return this.next.length();
    } else {
        return this.pos + 1;
    }
}

list.prototype.printLikeList = function() {
    if (this.pos >= 0) {
        console.log(this.DATA);
        if (this.next != null) {
            this.next.printLikeList();
        }
    } else {
        this.next.printLikeList();
    }
}

list.prototype.getFirst = function() {
    if (this.next != null) {
        if(this.pos == 0) {
            return this.DATA;
        } else {
            return this.next.getFirst();
        }
    } else {
        return null;
    }
}

list.prototype.printLikePile = function() {
    if (this.next != null) {
        this.next.printLikePile();
    } else {
        if (this.pos >= 0) {
            console.log(this.DATA);
            this.previus.printLikePile();
        }
    }
}

list.prototype.getLast = function() {
    if (this.next != null) {
        return this.next.getLast();
    } else {
        if (this.pos >= 0) {
            return this.DATA;
        }
    }
}

list.prototype.getItem = function(index) {
    if (this.pos == index) {
        return this.DATA;
    } else {
        return this.next.getItem(index);
    }
}

list.prototype.delItem = function(index) {
    if (this.pos == (index - 1)) {
        var newList = this.next.next;
        this.next = newList;
        if (newList != null) {
            this.next.reRoll();
        }
    } else {
        this.next.delItem(index)
    }
}

list.prototype.delFirst = function(){
    // console.log(this);
    // console.log("---");
    // console.log(this.next);
    // console.log("---");
    // console.log(this.next.next);
    var newList = this.next.next;
    this.next = newList;
    this.next.reRoll();
}

list.prototype.delLast = function() {
    if (this.next != null) {
        if (this.next.next == null) {
            this.next = null
        } else {
            this.next.delLast();
        }
    }
}

list.prototype.reRoll = function() {
    if (this.next != null) {
        if (this.pos >= 0) {
            this.pos--;
            this.next.reRoll();
        } else {
            this.next.reRoll();
        }
    }
}
module.exports = new list();
