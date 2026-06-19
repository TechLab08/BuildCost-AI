// Navigation functionality
// SSR (State Schedule of Rates) - per sq ft in INR
const ssrRates = {
    maharashtra: {
        residential: 1850,
        commercial: 2200,
        industrial: 2000,
        infrastructure: 2500
    },
    delhi: {
        residential: 2100,
        commercial: 2600,
        industrial: 2300,
        infrastructure: 2800
    },
    karnataka: {
        residential: 1650,
        commercial: 2000,
        industrial: 1850,
        infrastructure: 2200
    },
    tamilnadu: {
        residential: 1600,
        commercial: 1950,
        industrial: 1800,
        infrastructure: 2150
    },
    gujarat: {
        residential: 1550,
        commercial: 1900,
        industrial: 1750,
        infrastructure: 2100
    },
    westbengal: {
        residential: 1500,
        commercial: 1850,
        industrial: 1700,
        infrastructure: 2000
    },
    rajasthan: {
        residential: 1400,
        commercial: 1700,
        industrial: 1600,
        infrastructure: 1900
    },
    kerala: {
        residential: 1700,
        commercial: 2050,
        industrial: 1900,
        infrastructure: 2250
    },
    punjab: {
        residential: 1650,
        commercial: 2000,
        industrial: 1850,
        infrastructure: 2200
    },
    haryana: {
        residential: 1800,
        commercial: 2200,
        industrial: 2000,
        infrastructure: 2400
    }
};

// DSR (District Schedule of Rates) - per sq ft in INR
const dsrRates = {
    maharashtra: {
        mumbai: { residential: 2200, commercial: 2800, industrial: 2400, infrastructure: 3000 },
        pune: { residential: 1900, commercial: 2300, industrial: 2100, infrastructure: 2600 },
        nagpur: { residential: 1600, commercial: 1950, industrial: 1800, infrastructure: 2200 },
        nashik: { residential: 1700, commercial: 2050, industrial: 1900, infrastructure: 2300 }
    },
    delhi: {
        newdelhi: { residential: 2500, commercial: 3200, industrial: 2800, infrastructure: 3500 },
        ncr: { residential: 2100, commercial: 2600, industrial: 2300, infrastructure: 2800 }
    },
    karnataka: {
        bangalore: { residential: 2000, commercial: 2500, industrial: 2200, infrastructure: 2700 },
        mysore: { residential: 1500, commercial: 1800, industrial: 1650, infrastructure: 2000 },
        mangalore: { residential: 1600, commercial: 1950, industrial: 1750, infrastructure: 2100 }
    },
    tamilnadu: {
        chennai: { residential: 1900, commercial: 2400, industrial: 2100, infrastructure: 2600 },
        coimbatore: { residential: 1500, commercial: 1850, industrial: 1700, infrastructure: 2050 },
        madurai: { residential: 1400, commercial: 1700, industrial: 1550, infrastructure: 1900 }
    },
    gujarat: {
        ahmedabad: { residential: 1700, commercial: 2100, industrial: 1900, infrastructure: 2300 },
        surat: { residential: 1600, commercial: 2000, industrial: 1800, infrastructure: 2200 },
        vadodara: { residential: 1550, commercial: 1900, industrial: 1750, infrastructure: 2100 }
    },
    westbengal: {
        kolkata: { residential: 1700, commercial: 2100, industrial: 1900, infrastructure: 2300 },
        howrah: { residential: 1600, commercial: 1950, industrial: 1750, infrastructure: 2150 }
    },
    rajasthan: {
        jaipur: { residential: 1550, commercial: 1900, industrial: 1750, infrastructure: 2100 },
        jodhpur: { residential: 1400, commercial: 1700, industrial: 1550, infrastructure: 1900 }
    },
    kerala: {
        kochi: { residential: 1900, commercial: 2300, industrial: 2100, infrastructure: 2500 },
        trivandrum: { residential: 1700, commercial: 2050, industrial: 1900, infrastructure: 2250 }
    },
    punjab: {
        ludhiana: { residential: 1750, commercial: 2150, industrial: 1950, infrastructure: 2350 },
        amritsar: { residential: 1600, commercial: 1950, industrial: 1800, infrastructure: 2150 }
    },
    haryana: {
        gurgaon: { residential: 2200, commercial: 2800, industrial: 2400, infrastructure: 3000 },
        faridabad: { residential: 1900, commercial: 2400, industrial: 2100, infrastructure: 2600 }
    }
};

// District data for Indian states
const districtData = {
    maharashtra: [
        { value: 'mumbai', text: 'Mumbai' },
        { value: 'pune', text: 'Pune' },
        { value: 'nagpur', text: 'Nagpur' },
        { value: 'nashik', text: 'Nashik' }
    ],
    delhi: [
        { value: 'newdelhi', text: 'New Delhi' },
        { value: 'ncr', text: 'NCR Region' }
    ],
    karnataka: [
        { value: 'bangalore', text: 'Bangalore' },
        { value: 'mysore', text: 'Mysore' },
        { value: 'mangalore', text: 'Mangalore' }
    ],
    tamilnadu: [
        { value: 'chennai', text: 'Chennai' },
        { value: 'coimbatore', text: 'Coimbatore' },
        { value: 'madurai', text: 'Madurai' }
    ],
    gujarat: [
        { value: 'ahmedabad', text: 'Ahmedabad' },
        { value: 'surat', text: 'Surat' },
        { value: 'vadodara', text: 'Vadodara' }
    ],
    westbengal: [
        { value: 'kolkata', text: 'Kolkata' },
        { value: 'howrah', text: 'Howrah' }
    ],
    rajasthan: [
        { value: 'jaipur', text: 'Jaipur' },
        { value: 'jodhpur', text: 'Jodhpur' }
    ],
    kerala: [
        { value: 'kochi', text: 'Kochi' },
        { value: 'trivandrum', text: 'Trivandrum' }
    ],
    punjab: [
        { value: 'ludhiana', text: 'Ludhiana' },
        { value: 'amritsar', text: 'Amritsar' }
    ],
    haryana: [
        { value: 'gurgaon', text: 'Gurgaon' },
        { value: 'faridabad', text: 'Faridabad' }
    ]
};

// Market Rates (per sq ft) in INR - typically higher than schedule rates
const marketRates = {
    maharashtra: { residential: 2200, commercial: 2800, industrial: 2400, infrastructure: 3000 },
    delhi: { residential: 2500, commercial: 3200, industrial: 2800, infrastructure: 3500 },
    karnataka: { residential: 2000, commercial: 2500, industrial: 2200, infrastructure: 2700 },
    tamilnadu: { residential: 1900, commercial: 2400, industrial: 2100, infrastructure: 2600 },
    gujarat: { residential: 1900, commercial: 2300, industrial: 2000, infrastructure: 2500 },
    westbengal: { residential: 1800, commercial: 2200, industrial: 1900, infrastructure: 2400 },
    rajasthan: { residential: 1600, commercial: 2000, industrial: 1750, infrastructure: 2200 },
    kerala: { residential: 2000, commercial: 2400, industrial: 2100, infrastructure: 2600 },
    punjab: { residential: 1900, commercial: 2300, industrial: 2000, infrastructure: 2500 },
    haryana: { residential: 2200, commercial: 2800, industrial: 2400, infrastructure: 3000 }
};

// Update district options when state changes
function updateDistrictOptions() {
    const stateSelect = document.getElementById('location');
    const districtSelect = document.getElementById('district');
    const selectedState = stateSelect.value;
    
    // Clear existing options
    districtSelect.innerHTML = '<option value="">Select District</option>';
    
    if (selectedState && districtData[selectedState]) {
        districtData[selectedState].forEach(district => {
            const option = document.createElement('option');
            option.value = district.value;
            option.textContent = district.text;
            districtSelect.appendChild(option);
        });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Mobile menu toggle
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
        }
    });

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.objective-card, .feature-card, .result-card, .timeline-item');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Cost Estimation Demo
    const costForm = document.getElementById('costEstimationForm');
    let costChart = null;

    if (costForm) {
        costForm.addEventListener('submit', function(e) {
            e.preventDefault();
            calculateCost();
        });
    }

    // Contact Form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleContactForm();
        });
    }

    // Initialize chart
    initializeChart();
});

// Cost calculation function
function calculateCost() {
    // Basic Project Parameters
    const projectType = document.getElementById('projectType').value;
    const projectSize = parseFloat(document.getElementById('projectSize').value);
    const builtUpArea = parseFloat(document.getElementById('builtUpArea').value);
    const numberOfFloors = parseFloat(document.getElementById('numberOfFloors').value);
    const cityType = document.getElementById('cityType').value;
    const rateType = document.getElementById('rateType').value;

    // Structural Parameters
    const foundationType = document.getElementById('foundationType').value;
    const structureType = document.getElementById('structureType').value;
    const roofType = document.getElementById('roofType').value;

    // Materials
    const brickType = document.getElementById('brickType').value;
    const cementGrade = document.getElementById('cementGrade').value;
    const steelGrade = document.getElementById('steelGrade').value;
    const sandType = document.getElementById('sandType').value;

    // Finishing & Interior
    const flooring = document.getElementById('flooring').value;
    const paintType = document.getElementById('paintType').value;
    const windowsType = document.getElementById('windowsType').value;
    const doorsType = document.getElementById('doorsType').value;

    // Utilities & MEP
    const electricalPoints = parseFloat(document.getElementById('electricalPoints').value) || 0;
    const plumbingFixtures = parseFloat(document.getElementById('plumbingFixtures').value) || 0;
    const elevator = document.getElementById('elevator').checked;
    const solarPoints = document.getElementById('solarPoints').checked;
    const rainwaterHarvesting = document.getElementById('rainwaterHarvesting').checked;
    const fireSafety = document.getElementById('fireSafety').checked;

    // Get base rate based on rate type (SSR, DSR, Market, or Combined)
    let baseRate = 0;
    const locationSelect = document.getElementById('location');
    const districtSelect = document.getElementById('district');
    const state = locationSelect ? locationSelect.value : cityType;
    const district = districtSelect ? districtSelect.value : cityType;
    
    if (rateType === 'ssr' && ssrRates[state]) {
        // SSR (State Schedule of Rates)
        baseRate = ssrRates[state][projectType];
    } else if (rateType === 'dsr' && dsrRates[state] && dsrRates[state][district]) {
        // DSR (District Schedule of Rates)
        baseRate = dsrRates[state][district][projectType];
    } else if (rateType === 'market' && marketRates[state]) {
        // Market Rate
        baseRate = marketRates[state][projectType];
    } else if (rateType === 'combined') {
        // Combined rate: average of SSR and DSR if available
        const ssrRate = ssrRates[state] ? ssrRates[state][projectType] : 0;
        const dsrRate = dsrRates[state] && dsrRates[state][district] ? dsrRates[state][district][projectType] : 0;
        if (ssrRate && dsrRate) {
            baseRate = (ssrRate + dsrRate) / 2;
        } else if (ssrRate) {
            baseRate = ssrRate;
        } else if (dsrRate) {
            baseRate = dsrRate;
        } else {
            baseRate = marketRates[state] ? marketRates[state][projectType] : 1500;
        }
    } else {
        // Default fallback to SSR if available, otherwise market rate
        baseRate = ssrRates[state] ? ssrRates[state][projectType] : (marketRates[state] ? marketRates[state][projectType] : 1500);
    }

    // City/Location Type multipliers
    const cityMultipliers = {
        tier1: 1.4,    // Tier-1 City (highest cost)
        tier2: 1.2,    // Tier-2 City
        tier3: 1.1,    // Tier-3 City
        mega: 1.5,      // Mega City (highest cost)
        urban: 1.3,      // Urban area
        suburban: 1.0,   // Suburban area (baseline)
        rural: 0.8        // Rural area (lowest cost)
    };

    // Foundation type multipliers
    const foundationMultipliers = {
        shallow: 0.8,
        deep: 1.2,
        raft: 1.1,
        pile: 1.3
    };

    // Structure type multipliers
    const structureMultipliers = {
        'rcc': 1.1,        // RCC (Reinforced Cement Concrete)
        steel: 1.2,        // Steel Structure
        'load-bearing': 0.9,  // Load Bearing
        prefab: 1.0         // Prefabricated Structure
    };

    // Roof type multipliers
    const roofMultipliers = {
        flat: 1.0,
        pitched: 1.1,
        curved: 1.3,
        green: 1.4
    };

    // Material multipliers
    const materialMultipliers = {
        brick: {
            clay: 1.0,
            concrete: 0.9,
            'fly-ash': 0.85,
            aac: 1.2
        },
        cement: {
            opc33: 0.9,
            opc43: 1.0,
            opc53: 1.1,
            ppc: 0.95
        },
        steel: {
            fe415: 0.9,      // Fe 415 ( Mild Steel )
            fe500: 1.0,      // Fe 500 ( Standard )
            fe500d: 1.05,    // Fe 500D ( Ductile )
            fe550: 1.15,     // Fe 550 ( High Strength )
            fe550d: 1.2,     // Fe 550D ( High Strength Ductile )
            fe600: 1.3       // Fe 600 ( Ultra High Strength )
        },
        sand: {
            river: 1.0,      // River Sand ( Natural )
            'm-sand': 0.95,  // M-Sand ( Manufactured )
            crushed: 0.9,    // Crushed Stone Sand
            pit: 0.85,       // Pit Sand ( Coarse )
            sea: 0.8,        // Sea Sand ( Not Recommended - lower quality)
            slag: 0.9        // Slag Sand
        }
    };

    // Finishing multipliers
    const finishingMultipliers = {
        flooring: {
            vitrified: 1.2,        // Vitrified Tiles (durable, premium)
            ceramic: 1.0,          // Ceramic Tiles (standard)
            porcelain: 1.3,        // Porcelain Tiles (high-end ceramic)
            'natural-stone': 1.8,  // Natural Stone (Marble/Granite) - luxury
            granite: 2.0,          // Granite Flooring (premium)
            marble: 1.9,           // Marble Flooring (luxury)
            'kotah-stone': 1.4,    // Kotah Stone (durable natural)
            hardwood: 1.6,         // Hardwood (premium natural)
            'engineered-wood': 1.4,  // Engineered Wood (modern alternative)
            laminate: 0.8,         // Laminate (economical)
            vinyl: 0.7,            // Vinyl (LVP/LVT/Sheet) - most economical
            pvc: 0.65,             // PVC Flooring (very economical)
            carpets: 0.9,          // Carpets (soft flooring)
            terrazzo: 1.5,         // Terrazzo Flooring (durable composite)
            mosaic: 1.3,           // Mosaic Tiles (decorative)
            concrete: 0.6,         // Polished Concrete (industrial/minimal)
            epoxy: 1.1,            // Epoxy Flooring (chemical resistant)
            bamboo: 1.3,           // Bamboo Flooring (eco-friendly)
            cork: 1.2,             // Cork Flooring (sustainable)
            rubber: 0.8            // Rubber Flooring (utility)
        },
        paint: {
            oil: 1.2,           // Oil Paint (premium)
            enamel: 1.3,        // Enamel Paint (high gloss, durable)
            emulsion: 1.0,      // Emulsion Paint (standard)
            cement: 0.6,        // Cement Paint (economical)
            distemper: 0.5,     // Distemper Paint (cheapest)
            aluminium: 1.4,     // Aluminium Paint (specialized)
            bituminous: 1.1,    // Bituminous Paint (waterproof)
            'anti-corrosive': 1.5  // Anti-corrosive Paint (industrial grade)
        },
        windows: {
            fixed: 0.8,           // Fixed Window (simplest, cheapest)
            casement: 1.0,        // Casement Window (standard)
            sliding: 0.9,         // Sliding Window (economical)
            pivoted: 1.1,         // Pivoted Window (moderate)
            'double-hung': 1.3,   // Double-hung Window (premium)
            louvered: 1.2,        // Louvered Window (specialized)
            bay: 1.5,             // Bay Window (architectural feature)
            corner: 1.4,          // Corner Window (architectural)
            dormer: 1.3,          // Dormer Window (specialized)
            clerestory: 1.2       // Clerestory Window (specialized)
        },
        doors: {
            wooden: 1.4,          // Wooden Doors (premium natural material)
            steel: 1.2,           // Steel Doors (durable, secure)
            aluminium: 1.1,       // Aluminium Doors (lightweight, modern)
            glass: 1.3,           // Glass Doors (architectural, premium)
            pvc: 0.7,             // PVC / Plastic Doors (economical)
            fiberglass: 1.0,      // Fiberglass Doors (standard composite)
            flush: 0.8,           // Flush Doors (simple, economical)
            metal: 1.0            // Metal Doors (standard industrial)
        }
    };

    // Calculate base cost using base rates
    let baseCost = baseRate * projectSize;
    
    // Apply number of floors multiplier (more floors = slightly higher cost per floor due to complexity)
    const floorMultiplier = 1 + (numberOfFloors - 1) * 0.05; // 5% increase per additional floor
    baseCost *= floorMultiplier;
    
    // Apply city/location type multiplier
    baseCost *= cityMultipliers[cityType] || 1.0;
    
    // Apply structural multipliers
    baseCost *= foundationMultipliers[foundationType];
    baseCost *= structureMultipliers[structureType];
    baseCost *= roofMultipliers[roofType];
    
    // Apply material multipliers
    baseCost *= materialMultipliers.brick[brickType];
    baseCost *= materialMultipliers.cement[cementGrade];
    baseCost *= materialMultipliers.steel[steelGrade];
    baseCost *= materialMultipliers.sand[sandType];
    
    // Apply finishing multipliers (weighted average)
    const finishingWeight = 0.15; // 15% of total cost
    const flooringMultiplier = finishingMultipliers.flooring[flooring];
    const paintMultiplier = finishingMultipliers.paint[paintType];
    const windowsMultiplier = finishingMultipliers.windows[windowsType];
    const doorsMultiplier = finishingMultipliers.doors[doorsType];
    const avgFinishingMultiplier = (flooringMultiplier + paintMultiplier + windowsMultiplier + doorsMultiplier) / 4;
    baseCost = baseCost * (1 - finishingWeight) + (baseCost * finishingWeight * avgFinishingMultiplier);
    
    // Add utilities costs based on schedule rates
    const utilityRates = {
        electrical: 150, // $150 per electrical point
        plumbing: 300,   // $300 per plumbing fixture
        elevator: 50000, // $50,000 for elevator
        solar: 15000,    // $15,000 for solar points
        rainwater: 8000, // $8,000 for rainwater harvesting
        fireSafety: 12000 // $12,000 for fire safety
    };
    
    const electricalCost = electricalPoints * utilityRates.electrical;
    const plumbingCost = plumbingFixtures * utilityRates.plumbing;
    const elevatorCost = elevator ? utilityRates.elevator : 0;
    const solarCost = solarPoints ? utilityRates.solar : 0;
    const rainwaterCost = rainwaterHarvesting ? utilityRates.rainwater : 0;
    const fireSafetyCost = fireSafety ? utilityRates.fireSafety : 0;
    
    const utilitiesCost = electricalCost + plumbingCost + elevatorCost + solarCost + rainwaterCost + fireSafetyCost;
    
    // Total cost
    let totalCost = baseCost + utilitiesCost;
    
    // Add BOQ items if any
    const boqItems = document.querySelectorAll('.boq-item');
    let boqTotal = 0;
    boqItems.forEach(item => {
        const quantity = parseFloat(item.querySelector('.boq-quantity').value) || 0;
        const rate = parseFloat(item.querySelector('.boq-rate').value) || 0;
        boqTotal += quantity * rate;
    });
    
    totalCost += boqTotal;
    
    // Cost breakdown
    const materialsCost = totalCost * 0.35;
    const laborCost = totalCost * 0.30;
    const equipmentCost = totalCost * 0.20;
    const overheadCost = totalCost * 0.15;

    // Update UI with calculated costs
    updateCostDisplay(totalCost, materialsCost, laborCost, equipmentCost, overheadCost);
    
    // Update chart
    updateChart(materialsCost, laborCost, equipmentCost, overheadCost);

    // Calculate confidence based on data completeness
    const confidence = calculateConfidence(
        projectType, projectSize, builtUpArea, numberOfFloors, cityType, rateType,
        foundationType, structureType, roofType,
        brickType, cementGrade, steelGrade, sandType,
        flooring, paintType, windowsType, doorsType
    );
    updateConfidenceMeter(confidence);

    // Show results with animation
    animateResults();
}

function updateCostDisplay(total, materials, labor, equipment, overhead) {
    document.getElementById('totalCost').textContent = formatCurrency(total);
    document.getElementById('materialsCost').textContent = formatCurrency(materials);
    document.getElementById('laborCost').textContent = formatCurrency(labor);
    document.getElementById('equipmentCost').textContent = formatCurrency(equipment);
    document.getElementById('overheadCost').textContent = formatCurrency(overhead);
}

function formatCurrency(amount) {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(amount);
}

function calculateConfidence(
    projectType, projectSize, builtUpArea, numberOfFloors, cityType, rateType,
    foundationType, structureType, roofType,
    brickType, cementGrade, steelGrade, sandType,
    flooring, paintType, windowsType, doorsType
) {
    let confidence = 70; // Base confidence

    // Check basic parameters
    if (projectType && projectSize && builtUpArea && numberOfFloors && cityType && rateType) confidence += 5;
    
    // Check city type selection
    if (cityType) confidence += 3;
    
    // Check structural parameters
    if (foundationType && structureType && roofType) confidence += 5;
    
    // Check material parameters
    if (brickType && cementGrade && steelGrade && sandType) confidence += 5;
    
    // Check finishing parameters
    if (flooring && paintType && windowsType && doorsType) confidence += 5;
    
    // Adjust confidence based on rate type
    if (rateType === 'market') confidence += 3; // Market rates are reliable
    else if (rateType === 'combined') confidence += 5; // Combined is most reliable
    
    // Adjust confidence based on city type
    if (cityType === 'mega' || cityType === 'tier1') confidence += 2; // Higher confidence for major cities
    
    // Adjust confidence based on input ranges
    if (projectSize >= 1000 && projectSize <= 100000) confidence += 3;
    if (builtUpArea >= 500 && builtUpArea <= 50000) confidence += 2;
    if (numberOfFloors >= 1 && numberOfFloors <= 20) confidence += 2;
    
    return Math.min(confidence, 95); // Cap at 95%
}

// BOQ (Bill of Quantities) functionality
let boqItemCount = 0;

function addBOQItem() {
    boqItemCount++;
    const boqContainer = document.getElementById('boqItems');
    
    const boqItem = document.createElement('div');
    boqItem.className = 'boq-item';
    boqItem.innerHTML = `
        <input type="text" class="boq-description" placeholder="Item description" required>
        <div class="boq-nos-container">
            <span class="boq-label">Qty:</span>
            <input type="number" class="boq-quantity" placeholder="0" min="0" step="0.01" required>
        </div>
        <select class="boq-unit" required>
            <option value="nos" selected>Nos (Numbers)</option>
            <option value="brass">Brass</option>
            <option value="sqm">Sq m (Square Meters)</option>
            <option value="sqft">Sq ft (Square Feet)</option>
            <option value="cum">Cum (Cubic Meters)</option>
            <option value="cft">Cft (Cubic Feet)</option>
            <option value="rm">Rm (Running Meter)</option>
            <option value="rft">Rft (Running Feet)</option>
            <option value="kg">Kg (Kilograms)</option>
            <option value="tonnes">Tonnes</option>
            <option value="bags">Bags (50kg)</option>
            <option value="litres">Litres</option>
            <option value="sets">Sets</option>
            <option value="lump-sum">Lump Sum</option>
            <option value="each">Each</option>
            <option value="m">M (Meters)</option>
            <option value="ft">Ft (Feet)</option>
            <option value="inches">Inches</option>
            <option value="mm">MM (Millimeters)</option>
            <option value="sq-mtr">Sq Mtr (Square Meter)</option>
            <option value="sq-yd">Sq Yd (Square Yard)</option>
        </select>
        <input type="number" class="boq-rate" placeholder="Rate (₹)" min="0" step="0.01" required>
        <button type="button" class="boq-remove" onclick="removeBOQItem(this)" title="Remove Item">×</button>
    `;
    
    boqContainer.appendChild(boqItem);
}

function removeBOQItem(button) {
    const boqItem = button.parentElement;
    boqItem.remove();
}

// Reset form function
function resetCostForm() {
    // Reset the form
    const form = document.getElementById('costEstimationForm');
    if (form) {
        form.reset();
    }
    
    // Clear BOQ items
    const boqContainer = document.getElementById('boqItems');
    if (boqContainer) {
        boqContainer.innerHTML = '';
    }
    boqItemCount = 0;
    
    // Reset cost displays
    document.getElementById('totalCost').textContent = '₹0';
    document.getElementById('materialsCost').textContent = '₹0';
    document.getElementById('laborCost').textContent = '₹0';
    document.getElementById('equipmentCost').textContent = '₹0';
    document.getElementById('overheadCost').textContent = '₹0';
    
    // Reset confidence meter
    const confidenceFill = document.getElementById('confidenceFill');
    const confidenceText = document.getElementById('confidenceText');
    if (confidenceFill) confidenceFill.style.width = '0%';
    if (confidenceText) confidenceText.textContent = '0%';
    
    // Reset chart
    if (costChart) {
        costChart.data.datasets[0].data = [40, 35, 15, 10];
        costChart.update();
    }
    
    // Show notification
    showNotification('Form reset successfully!', 'success');
}

function updateConfidenceMeter(confidence) {
    const confidenceFill = document.getElementById('confidenceFill');
    const confidenceText = document.getElementById('confidenceText');
    
    if (!confidenceFill || !confidenceText) {
        console.error('Confidence meter elements not found');
        return;
    }
    
    // Ensure confidence is a valid number
    const validConfidence = Math.max(0, Math.min(100, parseInt(confidence) || 0));
    
    confidenceFill.style.width = validConfidence + '%';
    confidenceText.textContent = validConfidence + '%';

    // Change color based on confidence level
    if (validConfidence >= 90) {
        confidenceFill.style.background = 'linear-gradient(90deg, #10b981 0%, #059669 100%)';
    } else if (validConfidence >= 80) {
        confidenceFill.style.background = 'linear-gradient(90deg, #3b82f6 0%, #2563eb 100%)';
    } else if (validConfidence >= 60) {
        confidenceFill.style.background = 'linear-gradient(90deg, #f59e0b 0%, #d97706 100%)';
    } else {
        confidenceFill.style.background = 'linear-gradient(90deg, #ef4444 0%, #dc2626 100%)';
    }
}

function animateResults() {
    const resultsContainer = document.querySelector('.demo-results');
    resultsContainer.style.opacity = '0';
    resultsContainer.style.transform = 'translateY(20px)';
    
    // Show the chart container
    const chartContainer = document.querySelector('.chart-container');
    if (chartContainer) {
        chartContainer.classList.add('show');
    }
    
    setTimeout(() => {
        resultsContainer.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        resultsContainer.style.opacity = '1';
        resultsContainer.style.transform = 'translateY(0)';
    }, 100);
}

// Chart functionality
function initializeChart() {
    const ctx = document.getElementById('costChart');
    if (ctx) {
        // Register the datalabels plugin
        Chart.register(ChartDataLabels);
        
        costChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Materials', 'Labor', 'Equipment', 'Overhead'],
                datasets: [{
                    data: [40, 35, 15, 10],
                    backgroundColor: [
                        '#3b82f6',
                        '#10b981',
                        '#f59e0b',
                        '#ef4444'
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            padding: 15,
                            font: {
                                size: 12
                            }
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return context.label + ': ' + context.parsed + '%';
                            }
                        }
                    },
                    datalabels: {
                        display: true,
                        color: '#fff',
                        font: {
                            weight: 'bold',
                            size: 14
                        },
                        formatter: (value, ctx) => {
                            return value + '%';
                        }
                    }
                }
            }
        });
    }
}

function updateChart(materials, labor, equipment, overhead) {
    if (costChart) {
        const total = materials + labor + equipment + overhead;
        costChart.data.datasets[0].data = [
            (materials / total * 100).toFixed(1),
            (labor / total * 100).toFixed(1),
            (equipment / total * 100).toFixed(1),
            (overhead / total * 100).toFixed(1)
        ];
        costChart.update();
    }
}

// Contact form handling
function handleContactForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Simple validation
    if (!name || !email || !subject || !message) {
        showNotification('Please fill in all fields', 'error');
        return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showNotification('Please enter a valid email address', 'error');
        return;
    }

    // Simulate form submission
    showNotification('Message sent successfully! We will get back to you soon.', 'success');
    
    // Reset form
    document.getElementById('contactForm').reset();
}

// Notification system
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
    `;

    // Set background color based on type
    switch(type) {
        case 'success':
            notification.style.background = '#10b981';
            break;
        case 'error':
            notification.style.background = '#ef4444';
            break;
        default:
            notification.style.background = '#3b82f6';
    }

    // Add to page
    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Parallax effect disabled to prevent scrolling overlap
// window.addEventListener('scroll', function() {
//     const scrolled = window.pageYOffset;
//     const hero = document.querySelector('.hero');
//     if (hero) {
//         hero.style.transform = `translateY(${scrolled * 0.5}px)`;
//     }
// });

// Add typing effect to hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
window.addEventListener('load', function() {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 50);
    }
});

// Add hover effects to cards
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.objective-card, .feature-card, .result-card, .stat-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-5px) scale(1)';
        });
    });
});

// Add smooth reveal animation for stats
function animateStats() {
    const stats = document.querySelectorAll('.stat-card h3');
    
    stats.forEach(stat => {
        const target = parseInt(stat.textContent);
        let current = 0;
        const increment = target / 50;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            stat.textContent = Math.floor(current) + '%';
        }, 30);
    });
}

// Trigger stats animation when in view
const statsObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateStats();
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const aboutStats = document.querySelector('.about-stats');
if (aboutStats) {
    statsObserver.observe(aboutStats);
}

// Comparison Chart - Traditional vs ML-Based
let comparisonChart = null;

function initializeComparisonChart() {
    const ctx = document.getElementById('comparisonChart');
    if (ctx) {
        comparisonChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Accuracy (%)', 'Time (Hours)', 'Error Rate (%)', 'Cost Savings (%)'],
                datasets: [
                    {
                        label: 'Traditional Method',
                        data: [70, 120, 20, 5],
                        backgroundColor: 'rgba(239, 68, 68, 0.8)',
                        borderColor: '#ef4444',
                        borderWidth: 2
                    },
                    {
                        label: 'AI/ML Based System',
                        data: [96, 2, 3, 25],
                        backgroundColor: 'rgba(16, 185, 129, 0.8)',
                        borderColor: '#10b981',
                        borderWidth: 2
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                        labels: {
                            font: {
                                size: 14,
                                weight: 'bold'
                            },
                            padding: 20
                        }
                    },
                    datalabels: {
                        display: true,
                        color: '#fff',
                        font: {
                            weight: 'bold',
                            size: 12
                        },
                        formatter: function(value) {
                            return value;
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return context.dataset.label + ': ' + context.parsed.y;
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(0, 0, 0, 0.1)'
                        },
                        ticks: {
                            font: {
                                size: 12
                            }
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        },
                        ticks: {
                            font: {
                                size: 11,
                                weight: 'bold'
                            }
                        }
                    }
                }
            }
        });
    }
}

// Initialize comparison chart when section is in view
const comparisonObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (!comparisonChart) {
                initializeComparisonChart();
            }
            comparisonObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

const comparisonSection = document.getElementById('comparison');
if (comparisonSection) {
    comparisonObserver.observe(comparisonSection);
}

// Download PDF Function
function downloadPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    // Get current date
    const currentDate = new Date().toLocaleDateString('en-IN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    // Get cost values - clean the text and replace ₹ with Rs. to avoid encoding issues
    const totalCost = document.getElementById('totalCost').textContent.replace(/₹/g, 'Rs.').trim();
    const materialsCost = document.getElementById('materialsCost').textContent.replace(/₹/g, 'Rs.').trim();
    const laborCost = document.getElementById('laborCost').textContent.replace(/₹/g, 'Rs.').trim();
    const equipmentCost = document.getElementById('equipmentCost').textContent.replace(/₹/g, 'Rs.').trim();
    const overheadCost = document.getElementById('overheadCost').textContent.replace(/₹/g, 'Rs.').trim();
    const confidenceText = document.getElementById('confidenceText').textContent;
    
    // Check if results are generated
    if (totalCost === 'Rs.0' || totalCost === '' || !totalCost) {
        showNotification('Please generate a cost estimate first!', 'error');
        return;
    }
    
    // Set document properties
    doc.setProperties({
        title: 'AI Construction Cost Estimation Report',
        subject: 'Cost Estimation Report',
        author: 'AI Cost Estimator',
        keywords: 'construction, cost, estimation, AI',
        creator: 'AI Cost Estimation System'
    });
    
    // Header
    doc.setFontSize(20);
    doc.setTextColor(59, 130, 246);
    doc.text('AI Construction Cost Estimation Report', 105, 20, { align: 'center' });
    
    // Date
    doc.setFontSize(12);
    doc.setTextColor(100, 100, 100);
    doc.text(`Generated on: ${currentDate}`, 105, 30, { align: 'center' });
    
    // Line separator
    doc.setDrawColor(200, 200, 200);
    doc.line(20, 35, 190, 35);
    
    // Project Details Section
    doc.setFontSize(16);
    doc.setTextColor(31, 41, 55);
    doc.text('Project Details', 20, 45);
    
    const projectType = document.getElementById('projectType').value || 'Not specified';
    const projectSize = document.getElementById('projectSize').value || '0';
    const builtUpArea = document.getElementById('builtUpArea').value || '0';
    const numberOfFloors = document.getElementById('numberOfFloors').value || '1';
    const cityType = document.getElementById('cityType').value || 'Not specified';
    
    doc.setFontSize(11);
    doc.setTextColor(75, 85, 99);
    doc.text(`Project Type: ${projectType}`, 20, 55);
    doc.text(`Plot Area: ${projectSize} sq ft`, 20, 62);
    doc.text(`Built-up Area per Floor: ${builtUpArea} sq ft`, 20, 69);
    doc.text(`Number of Floors: ${numberOfFloors}`, 20, 76);
    doc.text(`Location Type: ${cityType}`, 20, 83);
    
    // Cost Breakdown Section
    doc.setFontSize(16);
    doc.setTextColor(31, 41, 55);
    doc.text('Cost Breakdown', 20, 95);
    
    // Create cost table
    const costData = [
        ['Category', 'Amount'],
        ['Total Estimated Cost', totalCost],
        ['Materials Cost', materialsCost],
        ['Labor Cost', laborCost],
        ['Equipment Cost', equipmentCost],
        ['Overhead Cost', overheadCost]
    ];
    
    let startY = 105;
    costData.forEach((row, index) => {
        if (index === 0) {
            // Header row
            doc.setFillColor(59, 130, 246);
            doc.rect(20, startY - 5, 170, 10, 'F');
            doc.setTextColor(255, 255, 255);
            doc.setFontSize(12);
            doc.text(row[0], 25, startY);
            doc.text(row[1], 150, startY);
        } else {
            // Data rows
            doc.setTextColor(31, 41, 55);
            doc.setFontSize(11);
            if (index === 1) {
                doc.setFont(undefined, 'bold');
                doc.setTextColor(16, 185, 129);
            } else {
                doc.setFont(undefined, 'normal');
            }
            doc.text(row[0], 25, startY);
            doc.text(row[1], 150, startY);
        }
        startY += 10;
    });
    
    // Confidence Level
    doc.setFontSize(12);
    doc.setTextColor(31, 41, 55);
    doc.text(`Confidence Level: ${confidenceText}`, 20, startY + 10);
    
    // Footer
    doc.setFontSize(10);
    doc.setTextColor(150, 150, 150);
    doc.text('Generated by AI-Based Construction Cost Estimation System', 105, 280, { align: 'center' });
    doc.text('© 2024 AI Cost Estimator. All rights reserved.', 105, 285, { align: 'center' });
    
    // Save PDF
    doc.save(`Cost_Estimation_Report_${currentDate.replace(/\s+/g, '_')}.pdf`);
    
    showNotification('PDF report downloaded successfully!', 'success');
}
