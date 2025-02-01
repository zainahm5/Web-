class Search {
    setup() {
        this.searchInput = document.querySelector(".search-input");
        this.locationFilter = document.querySelector("#location");
        this.searchButton = document.querySelector(".search-btn");
        this.eventList = document.querySelector(".opportunity-list");

        this.searchButton.addEventListener("click", () => this.performSearch());
        this.searchInput.addEventListener("input", () => this.performSearch());
        this.locationFilter.addEventListener("change", () => this.performSearch());
    }

    async performSearch() {
        const query = this.searchInput.value.trim();
        const location = this.locationFilter.value;

        try {
            const response = await fetch(`/search-events?query=${encodeURIComponent(query)}&location=${encodeURIComponent(location)}`);
            const data = await response.json();
            this.render(data);
        } catch (error) {
            console.error("Search failed:", error);
        }
    }

    render(events) {
        this.eventList.innerHTML = ""; // Clear previous results
        if (events.length === 0) {
            this.eventList.innerHTML = "<p>No events found.</p>";
            return;
        }

        events.forEach(event => {
            const eventCard = `
                <div class="opportunity-card red">
                    <div class="info">
                        <span><img class="event-image" src="${event.image}" alt="Event"></span>
                        <div class="text-block">
                            <div class="title">${event.title}</div>
                            <div class="subtitle">
                                <i class="fa-regular fa-calendar">&nbsp;</i>${event.time} &nbsp; 
                                <i class="fa-solid fa-location-dot"></i>&nbsp;${event.location}
                            </div>
                        </div>
                    </div>

                    <a href="/event/${event._id}" class="btn">View Details</a>
                </div>
            `;
            this.eventList.innerHTML += eventCard;
        });
    }
}

// Export the class to use in other files
export default Search;
