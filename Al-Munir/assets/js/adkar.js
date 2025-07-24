async function fetchAdkarData() {
    try {
        const response = await fetch('https://walidhmri.github.io/assets/adhkar.json');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching Adkar data:', error);
        return null;
    }
}

let adkarData = [];
let massAudioPlayer = null; 

function pauseOtherAudios(currentAudio) {
    document.querySelectorAll('audio').forEach(audio => {
        if (audio !== currentAudio && !audio.paused) {
            audio.pause();
        }
    });
}

document.addEventListener('DOMContentLoaded', async function() {
    const adkarList = document.getElementById('adkarList');
    const massToggle = document.getElementById('massPlayToggle');

    function playMassAudio(items) {
        if (massAudioPlayer) {
            massAudioPlayer.pause();
            massAudioPlayer.remove();
            massAudioPlayer = null;
        }
        const audioItems = items.filter(item => item.audio);
        if (audioItems.length === 0) return;
        let currentIndex = 0;
        const globalAudio = new Audio();
        globalAudio.controls = true;
        globalAudio.classList.add('mass-player'); // apply CSS class for styling
        globalAudio.addEventListener('play', function() { pauseOtherAudios(this); });
        massAudioPlayer = globalAudio;
        adkarList.insertBefore(globalAudio, adkarList.firstChild);
        globalAudio.addEventListener('ended', () => {
            currentIndex++;
            if (currentIndex < audioItems.length && massToggle.checked) {
                globalAudio.src = `https://walidhmri.github.io${audioItems[currentIndex].audio}`;
                globalAudio.play();
            } else {
                globalAudio.remove();
                massAudioPlayer = null;
            }
        });
        globalAudio.src = `https://walidhmri.github.io${audioItems[0].audio}`;
        globalAudio.play();
    }

    // Listen to mass toggle change to stop or restart mass play as needed
    massToggle.addEventListener('change', () => {
        if (!massToggle.checked && massAudioPlayer) {
            massAudioPlayer.pause();
            massAudioPlayer.currentTime = 0;
            massAudioPlayer.remove();
            massAudioPlayer = null;
        } else if (massToggle.checked) {
            // If a specific category is selected, trigger mass play immediately.
            const currentCategory = document.getElementById('categorySelect').value;
            if (currentCategory) {
                const found = adkarData.find(cat => cat.category === currentCategory);
                if (found) {
                    playMassAudio(found.array);
                }
            }
        }
    });

    async function displayAllAdkar(data) {
        adkarList.innerHTML = '';
        data.forEach(category => {
            console.debug('Processing category:', category.category);
            const categoryTitle = document.createElement('h2');
            categoryTitle.textContent = category.category;
            adkarList.appendChild(categoryTitle);

            if (!Array.isArray(category.array)) return;
            category.array.forEach(item => {
                const adkarItem = document.createElement('div');
                adkarItem.className = 'adkar-item';
                const displayText = item.text || (item.filename ? `Filename: ${item.filename}` : 'No text available');
                adkarItem.innerHTML = `
                    ${item.audio ? `<button class="play-btn" title="Play">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="#4CAF50" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                    </button>` : ''}
                    <div class="adkar-text">${displayText}</div>
                `;
                if (item.audio) {
                    const playBtn = adkarItem.querySelector('.play-btn');
                    playBtn.addEventListener('click', () => {
                        if (!adkarItem.querySelector('audio')) {
                            const audioEl = document.createElement('audio');
                            audioEl.controls = true;
                            audioEl.src = `https://walidhmri.github.io${item.audio}`;
                            audioEl.addEventListener('play', function() { pauseOtherAudios(this); });
                            adkarItem.insertBefore(audioEl, adkarItem.querySelector('.adkar-text'));
                            audioEl.play();
                        }
                    });
                }
                adkarList.appendChild(adkarItem);
            });
        });
    }

    function displayCategory(categoryData) {
        adkarList.innerHTML = '';
        const categoryTitle = document.createElement('h2');
        categoryTitle.textContent = categoryData.category;
        adkarList.appendChild(categoryTitle);
        if (!Array.isArray(categoryData.array)) return;
        categoryData.array.forEach(item => {
            const adkarItem = document.createElement('div');
            adkarItem.className = 'adkar-item';
            const displayText = item.text || (item.filename ? `Filename: ${item.filename}` : 'No text available');
            adkarItem.innerHTML = `
                    ${item.audio ? `<button class="play-btn" title="Play">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="#4CAF50" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                    </button>` : ''}
                    <div class="adkar-text">${displayText}</div>
                `;
            if (item.audio) {
                const playBtn = adkarItem.querySelector('.play-btn');
                playBtn.addEventListener('click', () => {
                    if (!adkarItem.querySelector('audio')) {
                        const audioEl = document.createElement('audio');
                        audioEl.controls = true;
                        audioEl.src = `https://walidhmri.github.io${item.audio}`;
                        audioEl.addEventListener('play', function() { pauseOtherAudios(this); });
                        adkarItem.insertBefore(audioEl, adkarItem.querySelector('.adkar-text'));
                        audioEl.play();
                    }
                });
            }
            adkarList.appendChild(adkarItem);
        });
    }

    function populateCategorySelect(data) {
        const categorySelect = document.getElementById('categorySelect');
        categorySelect.innerHTML = '<option value="">عرض الكل</option>';
        data.forEach(category => {
            const option = document.createElement('option');
            option.value = category.category;
            option.textContent = category.category;
            categorySelect.appendChild(option);
        });
    }

    function chooseCategory(selectedCategory) {
        if (!selectedCategory) {
            displayAllAdkar(adkarData);
        } else {
            const found = adkarData.find(cat => cat.category === selectedCategory);
            if (found) {
                displayCategory(found);
                if (document.getElementById('massPlayToggle').checked) {
                    playMassAudio(found.array);
                }
            }
        }
    }
    window.chooseCategory = chooseCategory;

    const data = await fetchAdkarData();
    if (!data) return;
    adkarData = data;
    populateCategorySelect(data);
    displayAllAdkar(data);
});
