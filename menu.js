const menuItems = [
            // MAINS
            {
                id: 1,
                name: "Jollof Rice Special",
                category: "mains",
                price: "₦ 4,500",
                badge: "Popular",
                badgeType: "popular",
                description: "Smoky party jollof rice served with golden fried plantain (Dodo) and juicy seasoned fried chicken.",
                image: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 2,
                name: "Fried Rice with King Prawns",
                category: "mains",
                price: "₦ 5,200",
                badge: "Chef Special",
                badgeType: "chef",
                description: "Classic Nigerian savory fried rice loaded with crisp vegetables, liver bits, and jumbo king prawns.",
                image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 3,
                name: "Ofada Rice & Ayamase Sauce",
                category: "mains",
                price: "₦ 6,000",
                badge: "Spicy",
                badgeType: "spicy",
                description: "Local unpolished fragrant Ofada rice with rich, bleachted palm oil pepper sauce, boiled eggs, and assorted meats.",
                image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 4,
                name: "Native Smoked Fish Rice",
                category: "mains",
                price: "₦ 4,800",
                badge: "Popular",
                badgeType: "popular",
                description: "Hearty coconut and palm-infused rice cooked with shredded cat fish, scent leaves, and local spices.",
                image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 5,
                name: "Egusi Rice Bowl",
                category: "mains",
                price: "₦ 4,200",
                badge: "House Favorite",
                badgeType: "popular",
                description: "Steamed jasmine rice layered with thick melon seed stew, ponmo, and beef chunks.",
                image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=600&q=80"
            },

            // SOUPS & SWALLOWS
            {
                id: 6,
                name: "Pounded Yam & Egusi Soup",
                category: "soups",
                price: "₦ 5,500",
                badge: "Chef Special",
                badgeType: "chef",
                description: "Smooth, fluffy pounded yam served with rich melon seed soup cooked with bitterleaf, stockfish, and beef.",
                image: "https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 7,
                name: "Eba & Efo Riro",
                category: "soups",
                price: "₦ 4,800",
                badge: "Spicy",
                badgeType: "spicy",
                description: "Yellow garri swallow with rich vegetable spinach stew stewed with locus beans (Iru) and assorted meat.",
                image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 8,
                name: "Amala with Gbegiri & Ewedu",
                category: "soups",
                price: "₦ 5,000",
                badge: "Popular",
                badgeType: "popular",
                description: "Dark yam flour swallow served with smooth bean soup (Gbegiri), jute leaf (Ewedu), and spicy pepper stew.",
                image: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 9,
                name: "Oha Soup with Goat Meat",
                category: "soups",
                price: "₦ 6,200",
                badge: "Traditional",
                badgeType: "popular",
                description: "Eastern Nigerian delicacy made with fresh Oha leaves, cocoyam thickener, tender goat meat, and smoked fish.",
                image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 10,
                name: "Banga Soup with Fresh Fish",
                category: "soups",
                price: "₦ 6,500",
                badge: "Chef Special",
                badgeType: "chef",
                description: "Delta-style palm fruit extract soup simmered with native spices, oburunbebe stick, and fresh catfish.",
                image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 11,
                name: "Afang Soup & Wheat",
                category: "soups",
                price: "₦ 5,800",
                badge: "Healthy",
                badgeType: "popular",
                description: "Nutritious wild spinach and waterleaf soup with periwinkles, stockfish head, and soft wheat swallow.",
                image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 12,
                name: "Ogbono Soup Special",
                category: "soups",
                price: "₦ 4,900",
                badge: "Classic",
                badgeType: "popular",
                description: "Savory draw soup made from wild mango seeds, cooked with dried prawns, tripe (Shaki), and bitterleaf.",
                image: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=600&q=80"
            },

            // GRILL & STREET FOOD
            {
                id: 13,
                name: "Spicy Beef Suya",
                category: "grills",
                price: "₦ 3,500",
                badge: "Fiery Hot",
                badgeType: "spicy",
                description: "Thinly sliced tender beef skewered and coated in spicy Yaji peanut rub, grilled over open flames with onions.",
                image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 14,
                name: "Asun (Peppered Goat)",
                category: "grills",
                price: "₦ 4,500",
                badge: "Extra Spicy",
                badgeType: "spicy",
                description: "Smoky fire-roasted goat meat chopped into bite-sized pieces and tossed in fiery habanero pepper sauce.",
                image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 15,
                name: "Grilled Catfish Pepper Soup",
                category: "grills",
                price: "₦ 7,000",
                badge: "Chef Special",
                badgeType: "chef",
                description: "Whole fresh catfish cooked in aromatic African pepper soup broth infused with scent leaves and calabash nutmeg.",
                image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 16,
                name: "Nkwobi (Spiced Cow Foot)",
                category: "grills",
                price: "₦ 5,000",
                badge: "Delicacy",
                badgeType: "popular",
                description: "Tender cow foot cuts served in warm palm oil potash sauce, garnished with utazi leaves and onion rings.",
                image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 17,
                name: "Peppered Snail Platter",
                category: "grills",
                price: "₦ 6,500",
                badge: "Premium",
                badgeType: "chef",
                description: "Giant African land snails sautéed in rich garlic, bell pepper, and onion gravy.",
                image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 18,
                name: "Abacha (African Salad)",
                category: "grills",
                price: "₦ 3,800",
                badge: "Traditional",
                badgeType: "popular",
                description: "Shredded cassava salad mixed with palm oil sauce, ugba (oil bean), garden eggs, and fried fish.",
                image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80"
            },

            // SNACKS & SMALL CHOPS
            {
                id: 19,
                name: "Gourmet Puff Puff Basket",
                category: "snacks",
                price: "₦ 1,800",
                badge: "Sweet Snack",
                badgeType: "popular",
                description: "Golden-brown fried dough balls, crispy on the outside and pillowy soft inside with a hint of nutmeg.",
                image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 20,
                name: "Meat Pie Classic",
                category: "snacks",
                price: "₦ 1,200",
                badge: "Classic",
                badgeType: "popular",
                description: "Buttery flaky pastry filled with minced beef, diced potatoes, and carrots.",
                image: "https://images.unsplash.com/photo-1621996346565-e325d6255152?auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 21,
                name: "Chicken Pie",
                category: "snacks",
                price: "₦ 1,400",
                badge: "Fresh Baked",
                badgeType: "popular",
                description: "Rich savory pastry casing stuffed with seasoned minced chicken breast and mild herbs.",
                image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 22,
                name: "Nigerian Egg Roll",
                category: "snacks",
                price: "₦ 1,000",
                badge: "Street Snack",
                badgeType: "popular",
                description: "Hard-boiled egg wrapped inside a thick, fried sweet dough casing.",
                image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 23,
                name: "Akara & Ogi Combo",
                category: "snacks",
                price: "₦ 2,500",
                badge: "Breakfast",
                badgeType: "popular",
                description: "Crispy fried bean cakes (Akara) served with warm fermented corn pudding (Ogi/Pap).",
                image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 24,
                name: "Gizdodo (Gizzard & Plantain)",
                category: "snacks",
                price: "₦ 3,500",
                badge: "House Favorite",
                badgeType: "spicy",
                description: "Diced peppered turkey gizzards tossed together with sweet ripe fried plantain cubes.",
                image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80"
            },

            // DRINKS & REFRESHMENTS
            {
                id: 25,
                name: "Chilled Zobo with Mint",
                category: "drinks",
                price: "₦ 1,500",
                badge: "Cold Drink",
                badgeType: "drink",
                description: "Refreshing hibiscus flower tea brewed with fresh ginger, pineapple chunks, and mint leaves.",
                image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 26,
                name: "Fresh Palm Wine",
                category: "drinks",
                price: "₦ 2,000",
                badge: "Traditional Drink",
                badgeType: "drink",
                description: "Naturally sweet and lightly effervescent fresh palm sap, served chilled in a calabash style.",
                image: "https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 27,
                name: "Tiger Nut Milk (Kunu Aya)",
                category: "drinks",
                price: "₦ 1,800",
                badge: "Cold Drink",
                badgeType: "drink",
                description: "Creamy nut-milk drink made from blended tiger nuts, dates, coconut, and a hint of ginger.",
                image: "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 28,
                name: "Homemade Kunu Zaki",
                category: "drinks",
                price: "₦ 1,500",
                badge: "Cold Drink",
                badgeType: "drink",
                description: "Traditional Northern Nigerian millet beverage flavored with sweet potato, ginger, and cloves.",
                image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 29,
                name: "Chapman Mocktail",
                category: "drinks",
                price: "₦ 2,500",
                badge: "Signature",
                badgeType: "chef",
                description: "Famous Nigerian cocktail mix of Angostura bitters, citrus juices, sparkling soda, and cucumber slices.",
                image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 30,
                name: "Ice Cold Maltina",
                category: "drinks",
                price: "₦ 1,000",
                badge: "Cold Drink",
                badgeType: "drink",
                description: "Rich malt drink packed with essential vitamins, served chilled with ice.",
                image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=600&q=80"
            }
        ];

        let activeCategory = 'all';
        let searchQuery = '';

        const menuGrid = document.getElementById('menuGrid');
        const searchInput = document.getElementById('searchInput');
        const categoriesNav = document.getElementById('categoriesNav');
        const emptyState = document.getElementById('emptyState');

        function renderMenu() {
            const filteredItems = menuItems.filter(item => {
                const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
                const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                                      item.description.toLowerCase().includes(searchQuery.toLowerCase());
                return matchesCategory && matchesSearch;
            });

            if (filteredItems.length === 0) {
                menuGrid.innerHTML = '';
                emptyState.classList.add('visible');
                return;
            }

            emptyState.classList.remove('visible');

            menuGrid.innerHTML = filteredItems.map(item => `
                <article class="menu-card">
                    <div class="card-img-wrapper">
                        <img 
                            src="${item.image}" 
                            alt="${item.name}" 
                            class="card-img"
                            loading="lazy"
                            onerror="this.onerror=null; this.src='https://placehold.co/600x400/e5e0d8/1c2421?text=${encodeURIComponent(item.name)}';"
                        />
                        <span class="tag-badge ${item.badgeType}">${item.badge}</span>
                    </div>
                    <div class="card-body">
                        <div class="card-header">
                            <h2 class="item-name">${item.name}</h2>
                            <span class="item-price">${item.price}</span>
                        </div>
                        <p class="item-desc">${item.description}</p>
                        <div class="card-footer">
                            <span class="category-label">${getCategoryName(item.category)}</span>
                        </div>
                    </div>
                </article>
            `).join('');
        }

        function getCategoryName(catKey) {
            const map = {
                'mains': 'Main Dish',
                'soups': 'Soup & Swallow',
                'grills': 'Grill & Suya',
                'snacks': 'Snack & Chops',
                'drinks': 'Drink & Beverage'
            };
            return map[catKey] || 'Naija Special';
        }

        categoriesNav.addEventListener('click', (e) => {
            if (e.target.classList.contains('cat-btn')) {
                document.querySelectorAll('.cat-btn').forEach(btn => btn.classList.remove('active'));
                e.target.classList.add('active');
                activeCategory = e.target.getAttribute('data-category');
                renderMenu();
            }
        });

        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value.trim();
            renderMenu();
        });

        window.addEventListener('DOMContentLoaded', () => {
            renderMenu();
        });