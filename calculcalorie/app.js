//IIFE (Immediately Invoked Function Expression) (Expression de fonction invoquée immédiatement) est une fonction JavaScript qui est exécutée dès qu'elle est définie，一旦定义立刻被执行的命令：(function () { 内部定义的变量不可以从外部直接获取，但是可以从内部return出来 })();
// Storage Controller
const StorageCtrl = (function() {
    return {
        storeItem: function(item) {
            let items;
            //localStorage only accept string, so we need to turn obj/arr to str to store and pull back to obj/arr to use again
            if (localStorage.getItem('items') === null) {
                items = [];
                items.push(item);
                localStorage.setItem('items', JSON.stringify(items));
            } else {
                items = JSON.parse(localStorage.getItem('items'));

                // Push new item:
                items.push(item);

                // Reset the updated 'items':
                localStorage.setItem('items', JSON.stringify(items));
            }
        },
        getItemFromStorage: function() {
            let items;
            if (localStorage.getItem('items') === null) {
                items = [];
            } else {
                items = JSON.parse(localStorage.getItem('items'));
            }
            return items;
        },
        updateStorageItem: function(updatedItem) {
            let items = JSON.parse(localStorage.getItem('items'));

            items.forEach(function(item, index) {
                if (item.id === updatedItem.id) {
                    // Array.splice(where, how many, replace by what)
                    items.splice(index, 1, updatedItem);
                }
            });
            localStorage.setItem('items', JSON.stringify(items));
        },
        deleteItemFromStorage: function(id) {
            let items = JSON.parse(localStorage.getItem('items'));
            items.forEach(function(item, index) {
                if (item.id === id) {
                    // Array.splice(where, how many)
                    items.splice(index, 1);
                }
            });
            localStorage.setItem('items', JSON.stringify(items));
        },
        clearAllFromStorage: function() {
            //localStorage.clear();
            localStorage.removeItem('items');
        }
    }
})();

// Item Controller
const ItemCtrl = (function() {
    //console.log('Item controller');
    // Item constructor:
    const Item = function(id, name, calories) {
            this.id = id;
            this.name = name;
            this.calories = calories;
        }
        // Data Structure / State (like in React)
    const data = {
        // items: [
        //     //{ id: 0, name: 'Beef Steak', calories: 1200 },
        //     //{ id: 1, name: 'Cookie', calories: 500 },
        //     //{ id: 2, name: 'Eggs', calories: 300 },

        // ],
        items: StorageCtrl.getItemFromStorage(), //这时发现还有update, delete两个按钮没有及时更新到localStorage
        currentItem: null,
        totalCalories: 0
    }

    // Above data are private, but everything we return will be public:
    // 这里直接return Data也可以，但是封装在function里更好？
    return {
        getItems: function() {
            return data.items;
        },
        setCurItem: function(item) {
            data.currentItem = item;
        },
        getCurItem: function() {
            return data.currentItem;
        },
        addItem: function(name, calories) {
            //console.log(name, calories);
            // Create ID, and make it auto-increment:
            let ID;
            if (data.items.length > 0) {
                ID = data.items[data.items.length - 1].id + 1; // id starts by 0, but the length starts by 1;
            } else {
                ID = 0;
            }
            // calories is a string, we need to parse it to a number:
            calories = parseInt(calories);

            newItem = new Item(ID, name, calories);

            data.items.push(newItem);

            return newItem;
        },
        getItemById: function(id) {
            let found = null;

            data.items.forEach(function(item) {
                if (item.id === id) {
                    found = item;
                }
            });
            return found;
        },
        getTotalCalories: function() {
            let total = 0;
            data.items.forEach(function(item) {
                total += item.calories;
            });
            // Set the real totalCalories:
            data.totalCalories = total;

            return data.totalCalories;
        },
        updateItem: function(name, calories) {
            calories = parseInt(calories);

            let found = null;
            data.items.forEach(function(item) {
                if (item.id === data.currentItem.id) {
                    item.name = name;
                    item.calories = calories;
                    found = item;
                }
            })
            return found;
        },
        deleteItem: function(id) {
            // Get all the ids:
            const ids = data.items.map(function(item) {
                return item.id;
            });

            const index = ids.indexOf(id);
            data.items.splice(index, 1);
            //用ItemCtrl.logData()在console里发现，data已经删除了，但是页面还有
        },
        deleteAllItems: function() {
            data.items = [];
            //用ItemCtrl.logData()在console里发现, totalCalories is not updated to 0;
        },

        logData: function() {
            return data;
        }
    }
})();

// UI Controller 
const UICtrl = (function() {
    // html元素都封装在function里，更加scalable，更容易修改维护
    const UISelectors = {
        itemList: '#item-list',
        clearAllBtn: '.clear-btn',
        addBtn: '.add-btn',
        listItems: '#item-list li',
        updateBtn: '.update-btn',
        deleteBtn: '.delete-btn',
        backBtn: '.back-btn',
        itemName: '#item-name',
        itemCalories: '#item-calories',
        totalCalories: '.total-calories',
    }

    return {
        populateItemList: function(items) {
            let html = '';
            items.forEach(function(item) {
                html += `
                <li class="collection-item" id="item-${item.id}">
                <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
                <a href="#" class="secondary-content">
                    <i class="edit-item fa fa-pencil"></i>
                </a>
                </li>             
                `;
            });

            document.querySelector(UISelectors.itemList).innerHTML = html;
        },
        getInput: function() {
            return {
                name: document.querySelector(
                    UISelectors.itemName).value,
                calories: document.querySelector(
                    UISelectors.itemCalories).value
            }
        },
        addListItem: function(item) {
            // Show the list:
            document.querySelector(UISelectors.itemList).style.display = 'block';
            // Create li element:
            const li = document.createElement('li');
            li.className = 'collection-item';
            // Add a dynamic id:
            li.id = `item-${item.id}`;
            // Add html:
            li.innerHTML = `
            <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
            <a href="#" class="secondary-content">
            <i class="edit-item fa fa-pencil"></i>
            </a>`;

            document.querySelector(UISelectors.itemList).insertAdjacentElement('beforeend', li);
        },
        hideList: function() {
            document.querySelector(UISelectors.itemList).style.display = 'none';
        },
        clearInput: function() {
            document.querySelector(UISelectors.itemName).value = '';
            document.querySelector(UISelectors.itemCalories).value = '';
        },
        showTotalCalories: function(totalCalories) {
            document.querySelector(UISelectors.totalCalories).innerHTML = totalCalories; // innerHTML or textContent, both OK;
        },
        setEditState: function() {
            UICtrl.clearInput();
            document.querySelector(UISelectors.updateBtn).style.display = 'none';
            document.querySelector(UISelectors.deleteBtn).style.display = 'none';
            document.querySelector(UISelectors.backBtn).style.display = 'none';
            document.querySelector(UISelectors.addBtn).style.display = 'inline';
        },
        addItemToField: function() {
            document.querySelector(UISelectors.itemName).value = ItemCtrl.getCurItem().name;
            document.querySelector(UISelectors.itemCalories).value = ItemCtrl.getCurItem().calories;
            UICtrl.showEditState();
        },
        showEditState: function() {
            document.querySelector(UISelectors.updateBtn).style.display = 'inline';
            document.querySelector(UISelectors.deleteBtn).style.display = 'inline';
            document.querySelector(UISelectors.backBtn).style.display = 'inline';
            document.querySelector(UISelectors.addBtn).style.display = 'none';
        },
        updateListItem: function(item) {
            let listItems = document.querySelectorAll(UISelectors.listItems);
            // Turn node list into array:
            listItems = Array.from(listItems);
            listItems.forEach(function(listItem) {
                const itemId = listItem.getAttribute('id');

                if (itemId === `item-${item.id}`) {
                    document.querySelector(`#${itemId}`).innerHTML = `<strong>${item.name}: </strong> <em>${item.calories} Calories</em>
                    <a href="#" class="secondary-content">
                        <i class="edit-item fa fa-pencil"></i>
                    </a>`;
                }
            })
        },
        deleteListItem: function(id) {
            const itemID = `#item-${id}`;
            const item = document.querySelector(itemID);
            //移除HTML某个元素，用id.remove();
            item.remove();
            //这时发现页面空格还保持数据，删除它并重新计算卡路里：
            // Get total calories:
            const totalCalories = ItemCtrl.getTotalCalories();
            UICtrl.showTotalCalories(totalCalories);

            //回到编辑页面：
            UICtrl.setEditState();
        },
        clearAll: function() {
            let listItems = document.querySelectorAll(UISelectors.listItems);
            // Node list to Array list first:
            listItems = Array.from(listItems);

            listItems.forEach(function(item) {
                item.remove();
            });
        },
        getSelectors: function() {
            return UISelectors;
        }
    }
})();

// App Controller
const App = (function(ItemCtrl, StorageCtrl, UICtrl) {
    //console.log(ItemCtrl.logData());
    // Event全部封装:
    const loadEventListeners = function() {
        const UISelectors = UICtrl.getSelectors();

        document.querySelector(UISelectors.addBtn).addEventListener('click', addItemSubmit);

        // 先修改:
        document.querySelector(UISelectors.itemList).addEventListener('click', updateItemClick);

        // 再确认：
        document.querySelector(UISelectors.updateBtn).addEventListener('click', updateItemSubmit);

        //避免点击edit，enter(e.which) === 13 自动重复添加:
        document.addEventListener('keypress', function(e) {
            if (e.which === 13) {
                e.preventDefault();
                return false;
            }
        })

        // Back button
        document.querySelector(UISelectors.backBtn).addEventListener('click', UICtrl.setEditState);

        // Delete button
        document.querySelector(UISelectors.deleteBtn).addEventListener('click', itemDeleteSubmit);

        // Clear all button
        document.querySelector(UISelectors.clearAllBtn).addEventListener('click', clearAllItemsClick);
    }

    const addItemSubmit = function(e) {
        //console.log('add');
        // get input data:
        const input = UICtrl.getInput();
        //console.log(input);
        if (input.name !== '' && input.calories !== '') {
            const newItem = ItemCtrl.addItem(input.name, input.calories);

            UICtrl.addListItem(newItem);

            // Get total calories:
            const totalCalories = ItemCtrl.getTotalCalories();
            UICtrl.showTotalCalories(totalCalories);

            // Store in localStorage:
            StorageCtrl.storeItem(newItem);

            // Clear all fields after added:
            UICtrl.clearInput();

        }
        e.preventDefault();
    }

    const updateItemClick = function(e) {
        //console.log('update');这时我们点击一整行都会反应，而我们要的是只有点击修改笔的时候才反应
        // Target the update pencil icon: 关键字：classList，而不是className:
        if (e.target.classList.contains('edit-item')) {
            //console.log('edit');
            // Get list id:
            const listId = e.target.parentNode.parentNode.id;
            //console.log(listId); //item-0;
            // Break the id to get only the number:
            const listArr = listId.split('-');
            //console.log(listArr);
            const id = parseInt(listArr[1]);

            const itemToEdit = ItemCtrl.getItemById(id);
            //console.log(itemToEdit);
            //Set current item:
            ItemCtrl.setCurItem(itemToEdit);

            UICtrl.addItemToField();

        }
        e.preventDefault();
    }

    const updateItemSubmit = function(e) {
        //console.log(e);
        const input = UICtrl.getInput();
        const updatedItem = ItemCtrl.updateItem(input.name, input.calories);
        // Update UI:
        UICtrl.updateListItem(updatedItem);

        // Update totalCalories
        const totalCalories = ItemCtrl.getTotalCalories();
        UICtrl.showTotalCalories(totalCalories);

        // Update localStorage
        StorageCtrl.updateStorageItem(updatedItem);

        UICtrl.setEditState();

        e.preventDefault();
    }

    const itemDeleteSubmit = function(e) {
        //console.log('eee');
        // Get the ID of the delete line:
        const currentItem = ItemCtrl.getCurItem();

        // Delete from the item structure:
        ItemCtrl.deleteItem(currentItem.id);

        // Delete from the UI:
        UICtrl.deleteListItem(currentItem.id);

        // Delete from localStorage:
        StorageCtrl.deleteItemFromStorage(currentItem.id);

        e.preventDefault();
    }

    const clearAllItemsClick = function() {
        //console.log('eeeeee');
        // First delete from the Item structure:
        ItemCtrl.deleteAllItems();

        //UI clear all:
        UICtrl.clearAll();

        // Update totalCalories in both Item structure and UI: 
        const totalCalories = ItemCtrl.getTotalCalories();
        UICtrl.showTotalCalories(totalCalories);

        // Hide the empty ul element in UI:
        UICtrl.hideList();

        // Clear all from localStorage:
        StorageCtrl.clearAllFromStorage();

    }

    return {
        init: function() {
            // Set edit state:
            UICtrl.setEditState();
            //console.log('Initializing App...');
            // Fetch items from data structure:
            const items = ItemCtrl.getItems();
            //console.log(items);
            if (items.length === 0) {
                UICtrl.hideList();
            } else {
                UICtrl.populateItemList(items);
            }

            const totalCalories = ItemCtrl.getTotalCalories();
            UICtrl.showTotalCalories(totalCalories);

            loadEventListeners();
        }
    }
})(ItemCtrl, StorageCtrl, UICtrl);

App.init();