/*
 * Plan Man product catalog.
 * Specs summarised from public vendor product pages (NVIDIA, Supermicro, ASUS), Oct 2026;
 * ASUSTOR NAS line-up from asustor.com, Nov 2026.
 * Extended content for each product page lives in data/product-details.js.
 * Always confirm the final configuration and availability with the vendor before quoting.
 *
 * To add a product, copy an entry and edit it. Fields:
 *   id       unique slug
 *   brand    'nvidia' | 'supermicro' | 'asus' | 'msi' | 'asustor'
 *   cat      one of the keys in CATEGORIES below
 *   name     product name
 *   summary  one-line description (shown on the card)
 *   specs    array of [label, value] pairs (first 3 shown on the card, all in the detail view)
 *   art      optional illustration name in assets/illustrations (defaults to the category's art)
 *   isNew    optional, shows a "New" badge
 *   preorder optional, shows a "Pre-booking" badge, adds the product to the home page pre-booking banner
 *            and turns its quote buttons into "Pre-book" (contact form type=prebook)
 *   img      optional product photo (assets/products/<id>.webp) with imgSize [width, height]; replaces the illustration
 *            imgAlt optional alt text when the photo shows one model of a product family
 *   series   optional collection key from COLLECTIONS below (e.g. 'gold' for Supermicro Gold Series)
 *   seriesGroup  optional 'section/tab' within that collection's groups (e.g. 'enterprise-compute/multi-node')
 */

window.BRANDS = {
    nvidia: 'NVIDIA',
    supermicro: 'Supermicro',
    asus: 'ASUS',
    msi: 'MSI',
    asustor: 'ASUSTOR'
};

window.CATEGORIES = {
    'rack-scale': 'Rack-Scale AI Systems',
    'gpu-servers': 'GPU & AI Servers',
    'accelerators': 'Data Center GPUs',
    'networking': 'AI Networking',
    'servers': 'Rack & Multi-Node Servers',
    'storage': 'Storage',
    'nas': 'NAS Storage',
    'nas-accessories': 'NAS Accessories',
    'desktop-ai': 'AI Workstations & Deskside',
    'client': 'Desktops & Client PCs',
    'laptops': 'AI Laptops',
    'edge': 'Edge Systems',
    'software': 'Software & Management'
};

// Intro line shown in the products page header when a category or brand is selected
window.CATEGORY_LEADS = {
    'rack-scale': 'Liquid-cooled NVL72 racks with 72 GPUs in one NVLink domain, built for training and AI reasoning at scale.',
    'gpu-servers': 'Eight-GPU HGX servers and PCIe GPU servers for AI training, inference and HPC, air- or liquid-cooled.',
    'accelerators': 'Data center GPUs for AI inference, training, rendering and virtual workstations.',
    'networking': 'InfiniBand and Ethernet fabrics, SuperNICs and DPUs that connect GPU clusters at up to 800 Gb/s.',
    'servers': 'Rackmount, multi-node and blade servers for virtualization, databases, cloud and HPC.',
    'nas-accessories': 'Genuine ASUSTOR memory, network cards, switches, power supplies, drive trays, rail kits and licenses for your NAS.',
    'nas': 'ASUSTOR network-attached storage, from 2-bay home units to 24-bay rackmount systems, plus expansion units.',
    'storage': 'All-flash NVMe, high-capacity and object storage to feed GPU clusters and protect enterprise data.',
    'desktop-ai': 'Desktop and deskside AI supercomputers for building, fine-tuning and running models locally.',
    'client': 'Business desktops and AI PCs for offices, SMBs and local AI work, pre-configured with Windows.',
    'laptops': 'Windows laptops with NVIDIA RTX Spark for running AI models and agents locally, wherever you work.',
    'edge': 'Short-depth and compact servers for AI and computing at branch, retail, telco and factory sites.',
    'software': 'AI software, GPU virtualization and infrastructure management to run your platform.'
};
// Brand logo shown in the products page header when that brand is selected (files in assets/brands/)
window.BRAND_LOGOS = {
    supermicro: 'assets/brands/supermicro.svg',
    asus: 'assets/brands/asus.svg',
    msi: 'assets/brands/msi.png',
    asustor: 'assets/brands/asustor.svg'
};
// Optional dark-theme version of a brand logo (used when the normal one would not show on a dark background)
window.BRAND_LOGOS_DARK = {
    msi: 'assets/brands/msi-dark.png'
};
window.BRAND_LEADS = {
    nvidia: 'NVIDIA rack-scale systems, HGX platforms, data center GPUs, networking, DGX systems and AI software.',
    supermicro: 'Supermicro GPU servers, NVL72 SuperClusters, enterprise servers, storage and data center building blocks.',
    asus: 'ASUS AI PODs, GPU servers, rack and multi-node servers, storage, AI workstations and mini PCs.',
    asustor: 'ASUSTOR NAS for home, office and business: Drivestor, Lockerstor and all-flash Flashstor models, rackmount NAS, expansion units and genuine accessories.',
    msi: 'MSI business laptops for AI, development and creative work, including NVIDIA RTX Spark models.'
};

// Collections: extra catalog filters that group products across categories (products.html?cat=<key>).
// A product joins a collection through its `series` field.
window.COLLECTIONS = {
    gold: {
        name: 'Supermicro Gold Series',
        nav: 'Gold Series · Ready to Ship',
        badge: 'Ready to ship',
        logo: 'assets/brands/supermicro.svg',
        // Sections and tabs as on supermicro.com/en/products/gold-series; products join one via seriesGroup: 'section/tab'
        groups: [
            { key: 'enterprise-compute', name: 'Enterprise Compute', subs: [['enterprise-data-center', 'Enterprise Data Center'], ['cloud-data-center', 'Cloud Data Center'], ['multi-node', 'Multi-Node'], ['wio', 'WIO']] },
            { key: 'enterprise-ai', name: 'Enterprise AI', subs: [['ai-systems', 'AI Systems']] },
            { key: 'enterprise-storage', name: 'Enterprise Storage', subs: [['storage-systems', 'Storage Systems']] },
            { key: 'intelligent-edge', name: 'Intelligent Edge', subs: [['edgeiot', 'Edge/IoT']] },
            { key: 'client-workstation', name: 'Client & Workstation', subs: [['workstation', 'Workstation'], ['client-system', 'Client System']] }
        ],
        lead: 'Supermicro’s best-selling servers, pre-configured with CPUs, GPUs, memory, storage and networking, tested and ready to ship within days.'
    }
};

// Illustration shown for each category (files in assets/illustrations/)
window.CATEGORY_ART = {
    'rack-scale': 'rack',
    'gpu-servers': 'gpu-server',
    'accelerators': 'gpu-card',
    'networking': 'network',
    'servers': 'servers',
    'storage': 'storage',
    'nas': 'storage',
    'nas-accessories': 'storage',
    'desktop-ai': 'desktop',
    'client': 'desktop',
    'laptops': 'desktop',
    'edge': 'edge',
    'software': 'software'
};

window.PRODUCTS = [
    /* ---------------- NVIDIA ---------------- */
    {
        id: 'nvidia-vera-rubin-nvl72', brand: 'nvidia', cat: 'rack-scale', isNew: true, icon: 'ph-cube-transparent',
        img: 'assets/products/nvidia-vera-rubin-nvl72.webp', imgSize: [315, 720],
        name: 'NVIDIA Vera Rubin NVL72',
        summary: 'Next-generation rack-scale platform for agentic AI and reasoning, unifying 72 Rubin GPUs and 36 Vera CPUs in a single NVLink domain.',
        specs: [
            ['GPUs', '72× NVIDIA Rubin'],
            ['CPUs', '36× NVIDIA Vera'],
            ['Scale-up fabric', 'Sixth-generation NVLink & NVLink Switch'],
            ['Networking', 'ConnectX-9 SuperNICs, BlueField-4 DPUs'],
            ['Scale-out', 'Quantum-X800 InfiniBand or Spectrum-X Ethernet'],
            ['Cooling', 'Liquid-cooled, third-generation MGX NVL72 rack']
        ]
    },
    {
        id: 'nvidia-dgx-vera-rubin-nvl72', brand: 'nvidia', cat: 'rack-scale', isNew: true, icon: 'ph-cube',
        img: 'assets/products/nvidia-dgx-vera-rubin-nvl72.webp', imgSize: [720, 340],
        name: 'NVIDIA DGX Vera Rubin NVL72',
        summary: 'Turnkey, ready-to-deploy enterprise AI infrastructure built on the Vera Rubin platform and managed with NVIDIA Mission Control.',
        specs: [
            ['GPUs', '72× NVIDIA Rubin'],
            ['CPUs', '36× NVIDIA Vera'],
            ['Networking', 'ConnectX-9 SuperNICs, BlueField-4, Spectrum-X'],
            ['Delivery', 'Turnkey DGX system with NVIDIA software stack'],
            ['Use cases', 'Frontier model training, large-scale inference']
        ]
    },
    {
        id: 'nvidia-gb300-nvl72', brand: 'nvidia', cat: 'rack-scale', icon: 'ph-cube-transparent',
        img: 'assets/products/nvidia-gb300-nvl72.webp', imgSize: [360, 720],
        name: 'NVIDIA GB300 NVL72',
        summary: 'Blackwell Ultra rack-scale system built for AI reasoning, training and data processing at scale.',
        specs: [
            ['GPUs', '72× NVIDIA Blackwell Ultra'],
            ['CPUs', '36× NVIDIA Grace'],
            ['GPU memory', '288 GB HBM3e per GPU'],
            ['NVLink bandwidth', '1.8 TB/s GPU-to-GPU'],
            ['Networking', 'ConnectX-8 SuperNICs, 800 Gb/s compute fabric'],
            ['Cooling', 'Liquid-cooled rack']
        ]
    },
    {
        id: 'nvidia-gb200-nvl72', brand: 'nvidia', cat: 'rack-scale', icon: 'ph-cube-transparent',
        img: 'assets/products/nvidia-gb200-nvl72.webp', imgSize: [330, 720],
        name: 'NVIDIA GB200 NVL72',
        summary: 'Liquid-cooled 72-GPU NVLink domain that acts as a single massive GPU for trillion-parameter LLM inference and training.',
        specs: [
            ['GPUs', '72× NVIDIA Blackwell'],
            ['CPUs', '36× NVIDIA Grace'],
            ['NVLink domain', '72 GPUs, 1.8 TB/s per GPU'],
            ['Management', 'NVIDIA Mission Control'],
            ['Cooling', 'Liquid-cooled rack']
        ]
    },
    {
        id: 'nvidia-hgx-rubin-nvl8', brand: 'nvidia', cat: 'gpu-servers', isNew: true, icon: 'ph-circuitry',
        img: 'assets/products/nvidia-hgx.webp', imgSize: [720, 644], imgAlt: "NVIDIA HGX platform 8-GPU baseboard",
        name: 'NVIDIA HGX Rubin NVL8',
        summary: 'Eight Rubin GPUs on sixth-generation NVLink — the building block for partner servers from Supermicro, ASUS and others.',
        specs: [
            ['GPUs', '8× NVIDIA Rubin'],
            ['Interconnect', 'Sixth-generation NVLink'],
            ['Host CPU', 'NVIDIA Vera or x86 baseboards'],
            ['Form factor', 'HGX baseboard for OEM systems']
        ]
    },
    {
        id: 'nvidia-dgx-rubin-nvl8', brand: 'nvidia', cat: 'gpu-servers', isNew: true, icon: 'ph-hard-drives',
        img: 'assets/products/nvidia-dgx-rubin-nvl8.webp', imgSize: [720, 627],
        name: 'NVIDIA DGX Rubin NVL8',
        summary: 'Liquid-cooled DGX system for training, post-training and inference across every AI workload.',
        specs: [
            ['GPUs', '8× NVIDIA Rubin'],
            ['Interconnect', 'Sixth-generation NVLink'],
            ['Cooling', 'Liquid-cooled'],
            ['Software', 'NVIDIA DGX software stack']
        ]
    },
    {
        id: 'nvidia-hgx-b300', brand: 'nvidia', cat: 'gpu-servers', icon: 'ph-circuitry',
        img: 'assets/products/nvidia-hgx.webp', imgSize: [720, 644], imgAlt: "NVIDIA HGX platform 8-GPU baseboard",
        name: 'NVIDIA HGX B300',
        summary: 'Blackwell Ultra 8-GPU platform for AI reasoning, available in air- and liquid-cooled partner servers.',
        specs: [
            ['GPUs', '8× NVIDIA Blackwell Ultra'],
            ['GPU memory', '2.1 TB HBM3e total'],
            ['NVLink', '1.8 TB/s GPU-to-GPU'],
            ['Networking', 'Integrated ConnectX-8 SuperNICs, 800 Gb/s']
        ]
    },
    {
        id: 'nvidia-hgx-b200', brand: 'nvidia', cat: 'gpu-servers', icon: 'ph-circuitry',
        img: 'assets/products/nvidia-hgx.webp', imgSize: [720, 644], imgAlt: "NVIDIA HGX platform 8-GPU baseboard",
        name: 'NVIDIA HGX B200',
        summary: 'The proven Blackwell 8-GPU platform for LLM training and high-volume inference.',
        specs: [
            ['GPUs', '8× NVIDIA Blackwell'],
            ['GPU memory', '180 GB HBM3e per GPU'],
            ['NVLink', '1.8 TB/s GPU-to-GPU'],
            ['Networking', '1:1 GPU-to-NIC with ConnectX-7 or BlueField-3']
        ]
    },
    {
        id: 'nvidia-rtx-pro-6000-server', brand: 'nvidia', cat: 'accelerators', icon: 'ph-graphics-card',
        img: 'assets/products/nvidia-rtx-pro-6000-server.webp', imgSize: [720, 449],
        name: 'NVIDIA RTX PRO 6000 Blackwell Server Edition',
        summary: 'Universal data center GPU for agentic AI, physical AI, scientific computing, rendering and video.',
        specs: [
            ['Architecture', 'NVIDIA Blackwell'],
            ['Memory', '96 GB GDDR7'],
            ['Form factor', 'PCIe, dual-slot, passive'],
            ['Workloads', 'AI inference, digital twins, 3D graphics, vGPU']
        ]
    },
    {
        id: 'nvidia-rtx-pro-4500-server', brand: 'nvidia', cat: 'accelerators', icon: 'ph-graphics-card',
        img: 'assets/products/nvidia-rtx-pro-4500-server.webp', imgSize: [720, 302],
        name: 'NVIDIA RTX PRO 4500 Blackwell Server Edition',
        summary: 'Energy-efficient multi-workload accelerator for AI inference, data science, video and visual computing.',
        specs: [
            ['Architecture', 'NVIDIA Blackwell'],
            ['Form factor', 'PCIe'],
            ['Workloads', 'AI inference, data processing, video, VDI']
        ]
    },
    {
        id: 'nvidia-h200-nvl', brand: 'nvidia', cat: 'accelerators', icon: 'ph-graphics-card',
        img: 'assets/products/nvidia-h200-nvl.webp', imgSize: [720, 714],
        name: 'NVIDIA H200 NVL',
        summary: 'Hopper-generation PCIe GPU with large HBM3e memory for LLM inference and HPC in air-cooled racks.',
        specs: [
            ['Architecture', 'NVIDIA Hopper'],
            ['Memory', '141 GB HBM3e'],
            ['Form factor', 'PCIe, dual-slot, NVLink bridge support'],
            ['Workloads', 'LLM inference, fine-tuning, HPC']
        ]
    },
    {
        id: 'nvidia-l40s', brand: 'nvidia', cat: 'accelerators', icon: 'ph-graphics-card',
        img: 'assets/products/nvidia-l40s.webp', imgSize: [684, 304],
        name: 'NVIDIA L40S',
        summary: 'Ada Lovelace universal GPU for generative AI inference, graphics and Omniverse workloads.',
        specs: [
            ['Architecture', 'NVIDIA Ada Lovelace'],
            ['Memory', '48 GB GDDR6'],
            ['Form factor', 'PCIe, dual-slot, passive'],
            ['Workloads', 'GenAI inference, rendering, Omniverse']
        ]
    },
    {
        id: 'nvidia-quantum-x800', brand: 'nvidia', cat: 'networking', icon: 'ph-network',
        img: 'assets/products/nvidia-quantum-x800.webp', imgSize: [720, 400],
        name: 'NVIDIA Quantum-X800 InfiniBand',
        summary: 'End-to-end 800 Gb/s InfiniBand platform for the largest AI training clusters.',
        specs: [
            ['Speed', '800 Gb/s per port'],
            ['Components', 'Switches, ConnectX-8 SuperNICs, LinkX cables'],
            ['Features', 'In-network computing (SHARP), adaptive routing'],
            ['Use case', 'Scale-out fabric for GPU clusters']
        ]
    },
    {
        id: 'nvidia-spectrum-x', brand: 'nvidia', cat: 'networking', icon: 'ph-network',
        img: 'assets/products/nvidia-spectrum-x.webp', imgSize: [709, 720],
        name: 'NVIDIA Spectrum-X Ethernet',
        summary: 'Ethernet platform purpose-built for AI, from single-cluster fabrics to multi-site AI factories with Spectrum-XGS.',
        specs: [
            ['Components', 'Spectrum-X switches + SuperNICs'],
            ['Scale', 'Within and across data centers (Spectrum-XGS)'],
            ['Features', 'RoCE, adaptive routing, congestion control'],
            ['Use case', 'AI cloud, multi-tenant GPU clusters']
        ]
    },
    {
        id: 'nvidia-connectx-8', brand: 'nvidia', cat: 'networking', icon: 'ph-plugs-connected',
        img: 'assets/products/nvidia-connectx-8.webp', imgSize: [720, 450],
        name: 'NVIDIA ConnectX-8 SuperNIC',
        summary: 'SuperNIC delivering up to 800 Gb/s for InfiniBand or Ethernet GPU-to-GPU networking.',
        specs: [
            ['Speed', 'Up to 800 Gb/s'],
            ['Protocols', 'InfiniBand and Ethernet'],
            ['Host interface', 'PCIe Gen6'],
            ['Use case', 'East-west GPU compute fabric']
        ]
    },
    {
        id: 'nvidia-bluefield', brand: 'nvidia', cat: 'networking', icon: 'ph-shield-check',
        img: 'assets/products/nvidia-bluefield.webp', imgSize: [720, 397], imgAlt: "NVIDIA BlueField-4 DPU",
        name: 'NVIDIA BlueField DPU',
        summary: 'Data processing unit that offloads networking, storage and security from host CPUs using NVIDIA DOCA.',
        specs: [
            ['Generations', 'BlueField-3, BlueField-4'],
            ['Functions', 'Networking, storage, zero-trust security offload'],
            ['Software', 'NVIDIA DOCA microservices'],
            ['Use case', 'North-south fabric, multi-tenant isolation']
        ]
    },
    {
        id: 'nvidia-dgx-spark', brand: 'nvidia', cat: 'desktop-ai', icon: 'ph-desktop-tower',
        img: 'assets/products/nvidia-dgx-spark.webp', imgSize: [264, 165],
        name: 'NVIDIA DGX Spark',
        summary: 'Compact desktop AI supercomputer for prototyping, fine-tuning and running models locally.',
        specs: [
            ['Superchip', 'NVIDIA GB10 Grace Blackwell'],
            ['Memory', 'Up to 128 GB unified system memory'],
            ['AI performance', 'Up to 1 petaFLOP (FP4)'],
            ['Software', 'NVIDIA DGX OS and AI software stack']
        ]
    },
    {
        id: 'nvidia-dgx-station', brand: 'nvidia', cat: 'desktop-ai', icon: 'ph-desktop-tower',
        img: 'assets/products/nvidia-dgx-station.webp', imgSize: [720, 470], imgAlt: "NVIDIA DGX Station GB300 Desktop Superchip board",
        name: 'NVIDIA DGX Station',
        summary: 'Deskside AI supercomputer for developers and research teams working on large models.',
        specs: [
            ['Superchip', 'NVIDIA GB300 Grace Blackwell Ultra Desktop'],
            ['Memory', '748 GB coherent memory'],
            ['Networking', 'ConnectX-8 SuperNIC'],
            ['Form factor', 'Deskside workstation']
        ]
    },
    {
        id: 'nvidia-ai-enterprise', brand: 'nvidia', cat: 'software', icon: 'ph-stack',
        name: 'NVIDIA AI Enterprise',
        summary: 'Production-grade software platform with NIM microservices, frameworks and enterprise support for AI.',
        specs: [
            ['Includes', 'NIM microservices, NeMo, Triton, RAPIDS'],
            ['Deployment', 'On-prem, cloud and edge'],
            ['Licensing', 'Per-GPU subscription'],
            ['Support', 'Enterprise support & security updates']
        ]
    },
    {
        id: 'nvidia-vgpu', brand: 'nvidia', cat: 'software', icon: 'ph-squares-four',
        name: 'NVIDIA Virtual GPU (vGPU)',
        summary: 'Share data center GPUs across virtual desktops, workstations and compute VMs.',
        specs: [
            ['Editions', 'vPC/vApps, RTX Virtual Workstation'],
            ['Hypervisors', 'VMware, Citrix, Nutanix, Red Hat and more'],
            ['Use case', 'VDI, virtual workstations, AI in VMs']
        ]
    },

    /* ---------------- Supermicro ---------------- */
    {
        id: 'smc-gb300-nvl72', brand: 'supermicro', cat: 'rack-scale', icon: 'ph-cube-transparent',
        name: 'Supermicro NVIDIA GB300 NVL72 SuperCluster',
        summary: 'End-to-end liquid-cooled rack with 72 Blackwell Ultra GPUs — an exascale supercomputer in a single rack.',
        specs: [
            ['GPUs', '72× NVIDIA Blackwell Ultra, 288 GB HBM3e each'],
            ['CPUs', '36× NVIDIA Grace (72-core Arm Neoverse V2)'],
            ['NVLink', '1.8 TB/s across all 72 GPUs'],
            ['Cooling', '250 kW liquid-to-liquid CDU or 200 kW liquid-to-air sidecar'],
            ['Networking', '800 Gb/s compute fabric']
        ]
    },
    {
        id: 'smc-gb200-nvl72', brand: 'supermicro', cat: 'rack-scale', icon: 'ph-cube-transparent',
        name: 'Supermicro NVIDIA GB200 NVL72 SuperCluster',
        summary: 'Liquid-cooled 72-GPU NVLink rack with Supermicro DLC and rack-level integration.',
        specs: [
            ['GPUs', '72× NVIDIA Blackwell'],
            ['CPUs', '36× NVIDIA Grace'],
            ['NVLink', '72-GPU domain, 1.8 TB/s per GPU'],
            ['Cooling', 'Direct liquid cooling with in-rack CDU']
        ]
    },
    {
        id: 'smc-hgx-b300-8u', brand: 'supermicro', cat: 'gpu-servers', icon: 'ph-hard-drives',
        name: 'Supermicro 8U Air-Cooled HGX B300 System',
        summary: 'Front-I/O air-cooled server for 8× 1100 W Blackwell Ultra GPUs with integrated 800 Gb/s networking.',
        specs: [
            ['GPUs', 'NVIDIA HGX B300 8-GPU (2.3 TB HBM3e)'],
            ['CPUs', 'Dual Intel Xeon 6 or AMD EPYC 9005/9004'],
            ['Networking', '8× front OSFP, integrated ConnectX-8 at 800 Gb/s'],
            ['Form factor', '8U, air-cooled, front I/O']
        ]
    },
    {
        id: 'smc-hgx-b300-4u-lc', brand: 'supermicro', cat: 'gpu-servers', icon: 'ph-drop',
        name: 'Supermicro 4U Liquid-Cooled HGX B300 System',
        summary: 'DLC-2 liquid-cooled 8-GPU node capturing up to 98% of heat for dense, efficient AI factories.',
        specs: [
            ['GPUs', 'NVIDIA HGX B300 8-GPU'],
            ['Density', 'Up to 64 GPUs per rack'],
            ['Cooling', 'DLC-2 direct liquid cooling, ~98% heat capture'],
            ['Networking', 'Integrated ConnectX-8, 800 Gb/s']
        ]
    },
    {
        id: 'smc-hgx-b300-orv3', brand: 'supermicro', cat: 'gpu-servers', isNew: true, icon: 'ph-drop',
        name: 'Supermicro 2-OU OCP ORV3 HGX B300 System',
        summary: 'The most compact hyperscale HGX B300 platform — up to 144 liquid-cooled GPUs in one 21-inch rack.',
        specs: [
            ['GPUs', 'NVIDIA HGX B300 8-GPU per node'],
            ['Density', 'Up to 18 nodes / 144 GPUs per rack'],
            ['Rack standard', '21-inch OCP ORV3, blind-mate manifolds'],
            ['GPU power', 'Up to 1,100 W TDP per GPU sustained']
        ]
    },
    {
        id: 'smc-hgx-b200-air', brand: 'supermicro', cat: 'gpu-servers', icon: 'ph-hard-drives',
        name: 'Supermicro 8U/10U Air-Cooled HGX B200 System',
        summary: 'Best-selling air-cooled 8-GPU platform, redesigned for Blackwell with front or rear I/O.',
        specs: [
            ['GPUs', 'NVIDIA HGX B200 8-GPU, 180 GB HBM3e each'],
            ['CPUs', 'Dual Intel Xeon 6 or AMD EPYC 9005/9004'],
            ['Density', 'Up to 32 GPUs per rack'],
            ['Networking', '1:1 GPU-to-NIC, ConnectX-7 or BlueField-3']
        ]
    },
    {
        id: 'smc-hgx-b200-lc', brand: 'supermicro', cat: 'gpu-servers', icon: 'ph-drop',
        name: 'Supermicro 4U Liquid-Cooled HGX B200 System',
        summary: 'Front-I/O DLC-2 system enabling up to 96 Blackwell GPUs in a single rack.',
        specs: [
            ['GPUs', 'NVIDIA HGX B200 8-GPU'],
            ['Density', 'Up to 96 GPUs per rack'],
            ['Cooling', 'DLC-2 direct liquid cooling'],
            ['Form factor', '4U, front I/O']
        ]
    },
    {
        id: 'smc-rtx-pro-server', brand: 'supermicro', cat: 'gpu-servers', icon: 'ph-graphics-card',
        name: 'Supermicro NVIDIA RTX PRO Servers',
        summary: 'PCIe GPU servers for RTX PRO 6000 Blackwell, H200 NVL and L40S — enterprise AI from data center to edge.',
        specs: [
            ['GPUs', 'Multiple double-width PCIe GPUs'],
            ['GPU options', 'RTX PRO 6000 Blackwell SE, H200 NVL, L40S'],
            ['CPUs', 'Intel Xeon 6 or AMD EPYC'],
            ['Workloads', 'Inference, fine-tuning, VDI, rendering']
        ]
    },
    {
        id: 'smc-super-ai-station', brand: 'supermicro', cat: 'desktop-ai', isNew: true, icon: 'ph-desktop-tower',
        name: 'Supermicro Super AI Station',
        summary: 'Deskside AI supercomputer that brings data-center-class compute to the lab or office.',
        specs: [
            ['Superchip', 'NVIDIA GB300 Grace Blackwell Ultra Desktop'],
            ['Cooling', 'Liquid-cooled deskside chassis'],
            ['Use case', 'Local model development and fine-tuning']
        ]
    },
    {
        id: 'smc-hyper', brand: 'supermicro', cat: 'servers', icon: 'ph-hard-drives',
        name: 'Supermicro Hyper Rackmount Servers',
        summary: 'Flagship 1U/2U dual-processor rackmount servers for virtualization, databases and enterprise apps.',
        specs: [
            ['CPUs', 'Dual Intel Xeon 6 or AMD EPYC 9005'],
            ['Form factor', '1U / 2U'],
            ['Storage', 'All-NVMe and hybrid options'],
            ['Use case', 'Virtualization, database, HCI']
        ]
    },
    {
        id: 'smc-cloud-dc', brand: 'supermicro', cat: 'servers', icon: 'ph-cloud',
        name: 'Supermicro CloudDC Servers',
        summary: 'Cost-optimised single- and dual-socket servers for cloud and hosting providers.',
        specs: [
            ['Form factor', '1U / 2U'],
            ['Design', 'Tool-less serviceability, OCP 3.0 networking'],
            ['Use case', 'Web hosting, cloud, VPS platforms']
        ]
    },
    {
        id: 'smc-twin', brand: 'supermicro', cat: 'servers', icon: 'ph-squares-four',
        name: 'Supermicro BigTwin & GrandTwin',
        summary: 'Multi-node servers with shared power and cooling for high-density compute and HCI clusters.',
        specs: [
            ['Nodes', '2U 4-node (BigTwin) / 2U 4-node single-socket (GrandTwin)'],
            ['CPUs', 'Intel Xeon 6 or AMD EPYC'],
            ['Use case', 'HPC, HCI, cloud, hosting']
        ]
    },
    {
        id: 'smc-superblade', brand: 'supermicro', cat: 'servers', icon: 'ph-rows',
        name: 'Supermicro SuperBlade & MicroBlade',
        summary: 'Blade architectures with integrated switching for maximum density and energy efficiency.',
        specs: [
            ['Density', 'Up to 20 blades per 8U (SuperBlade)'],
            ['Networking', 'Integrated Ethernet / InfiniBand switches'],
            ['Use case', 'HPC clusters, private cloud']
        ]
    },
    {
        id: 'smc-petascale', brand: 'supermicro', cat: 'storage', icon: 'ph-database',
        name: 'Supermicro All-Flash NVMe Storage',
        summary: 'Petascale all-flash NVMe servers built to feed GPU clusters and AI data pipelines.',
        specs: [
            ['Media', 'E3.S / U.2 NVMe'],
            ['Form factor', '1U / 2U'],
            ['Use case', 'AI storage, parallel file systems, data lakes']
        ]
    },
    {
        id: 'smc-top-loading', brand: 'supermicro', cat: 'storage', icon: 'ph-archive',
        name: 'Supermicro Top-Loading Storage & JBOD',
        summary: 'High-capacity top-loading storage servers and JBOD enclosures for object storage and backup.',
        specs: [
            ['Media', '3.5" SAS/SATA HDD with NVMe cache'],
            ['Form factor', '4U high-density top-loading'],
            ['Use case', 'Object storage, backup, archive']
        ]
    },
    {
        id: 'smc-edge', brand: 'supermicro', cat: 'edge', icon: 'ph-broadcast',
        name: 'Supermicro Edge AI Systems',
        summary: 'Short-depth rackmount and compact edge servers with GPU options for retail, telco and industry.',
        specs: [
            ['Form factor', 'Short-depth 1U/2U, compact fanless'],
            ['GPU options', 'NVIDIA L4, RTX PRO and more'],
            ['Use case', 'Edge inference, 5G, smart retail']
        ]
    },
    {
        id: 'smc-networking', brand: 'supermicro', cat: 'networking', icon: 'ph-plugs',
        name: 'Supermicro Switches & Adapters',
        summary: 'Ethernet switches and 10G–400G adapters, cables and transceivers validated with Supermicro systems.',
        specs: [
            ['Adapters', '10G / 25G / 100G / 200G / 400G, InfiniBand'],
            ['Switches', 'Top-of-rack and management switches'],
            ['Use case', 'Cluster management and data networks']
        ]
    },
    {
        id: 'smc-dcbbs', brand: 'supermicro', cat: 'software', icon: 'ph-buildings',
        name: 'Supermicro Data Center Building Block Solutions (DCBBS)',
        summary: 'Complete data center building blocks: compute, storage, networking, liquid cooling, power and management software.',
        specs: [
            ['Scope', 'Rack-level integration with networking and cabling'],
            ['Validation', 'Cluster-level L12 testing'],
            ['Cooling', 'DLC-2 liquid cooling, CDUs, cooling towers']
        ]
    },

    /* ---------------- Supermicro Gold Series (pre-configured, ready to ship) ----------------
       Source: https://www.supermicro.com/en/products/gold-series and each system's datasheet. */
    {
        id: "smc-gold-sys-112h-tn-02-g2", brand: 'supermicro', cat: "servers", series: 'gold', seriesGroup: 'enterprise-compute/enterprise-data-center', icon: "ph-hard-drives",
        img: 'assets/products/smc-gold-sys-112h-tn-02-g2.webp', imgSize: [602, 98],
        name: "Supermicro 1U Hyper SYS-112H-TN-02-G2",
        summary: "Ready-to-ship Gold Series 1U Hyper (IaaS – Compute/Virtualization Bare Metal) with 1× Intel Xeon 6731P, 1TB DDR5-6000 and 1.9TB flash storage.",
        specs: [
            ["CPU", "1× Intel Xeon 6731P (32C/2.5GHz)"],
            ["Memory", "1TB DDR5-6000"],
            ["Storage", "2× 960GB M.2 NVMe SSD"],
            ["Networking", "25GbE"],
            ["Form factor", "1U Rackmount"],
            ["Availability", "Gold Series, pre-configured and ready to ship"]
        ]
    },
    {
        id: "smc-gold-as-2115hs-tnr-02-g2", brand: 'supermicro', cat: "servers", series: 'gold', seriesGroup: 'enterprise-compute/enterprise-data-center', icon: "ph-hard-drives",
        img: 'assets/products/smc-gold-as-2115hs-tnr-02-g2.webp', imgSize: [700, 211],
        name: "Supermicro 2U Hyper AS -2115HS-TNR-02-G2",
        summary: "Ready-to-ship Gold Series 2U Hyper (In-Memory Databases & Analytics) with 1× AMD EPYC 9655P, 768GB DDR5-6400 and 15.36TB flash storage.",
        specs: [
            ["CPU", "1× AMD EPYC 9655P (96C/2.6GHz)"],
            ["Memory", "768GB DDR5-6400"],
            ["Storage", "2× 7.68TB NVMe SSD"],
            ["Networking", "25GbE"],
            ["Form factor", "2U"],
            ["Availability", "Gold Series, pre-configured and ready to ship"]
        ]
    },
    {
        id: "smc-gold-as-2126hs-tn-01-g2", brand: 'supermicro', cat: "servers", series: 'gold', seriesGroup: 'enterprise-compute/enterprise-data-center', icon: "ph-hard-drives",
        img: 'assets/products/smc-gold-as-2126hs-tn-01-g2.webp', imgSize: [700, 219],
        name: "Supermicro 2U Hyper AS -2126HS-TN-01-G2",
        summary: "Ready-to-ship Gold Series 2U Hyper (Virtualization & Private Cloud Consolidation) with 2× AMD EPYC 9965, 1.5TB DDR5-6400 and 1.92TB flash storage.",
        specs: [
            ["CPUs", "2× AMD EPYC 9965 (192C/2.25GHz)"],
            ["Memory", "1.5TB DDR5-6400"],
            ["Storage", "2× 960GB M.2 NVMe SSD"],
            ["Networking", "25GbE"],
            ["Form factor", "2U Rackmount"],
            ["Availability", "Gold Series, pre-configured and ready to ship"]
        ]
    },
    {
        id: "smc-gold-sys-222h-tn-01-g2", brand: 'supermicro', cat: "servers", series: 'gold', seriesGroup: 'enterprise-compute/enterprise-data-center', icon: "ph-hard-drives",
        img: 'assets/products/smc-gold-sys-222h-tn-01-g2.webp', imgSize: [700, 221],
        name: "Supermicro 2U Hyper SYS-222H-TN-01-G2",
        summary: "Ready-to-ship Gold Series 2U Hyper (Virtualization & Private Cloud Consolidation) with 2× Intel Xeon 6740P, 1TB DDR5-6400 and 7.68TB flash storage.",
        specs: [
            ["CPUs", "2× Intel Xeon 6740P (48C/2.1GHz)"],
            ["Memory", "1TB DDR5-6400"],
            ["Storage", "2× 3.8TB U.2 NVMe SSD"],
            ["Networking", "25GbE"],
            ["Form factor", "2U Rackmount"],
            ["Availability", "Gold Series, pre-configured and ready to ship"]
        ]
    },
    {
        id: "smc-gold-as-1126hs-tn-01-g2", brand: 'supermicro', cat: "servers", series: 'gold', seriesGroup: 'enterprise-compute/enterprise-data-center', icon: "ph-hard-drives",
        img: 'assets/products/smc-gold-as-1126hs-tn-01-g2.webp', imgSize: [700, 119],
        name: "Supermicro 1U Hyper AS -1126HS-TN-01-G2",
        summary: "Ready-to-ship Gold Series 1U Hyper (IaaS – Compute/Virtualization Bare Metal) with 2× AMD EPYC 9355, 1.5TB DDR5-6400 and 1.92TB flash storage.",
        specs: [
            ["CPUs", "2× AMD EPYC 9355 (32C/3.55GHz)"],
            ["Memory", "1.5TB DDR5-6400"],
            ["Storage", "2× 960GB M.2 NVMe SSD"],
            ["Networking", "25GbE"],
            ["Form factor", "1U Rackmount"],
            ["Availability", "Gold Series, pre-configured and ready to ship"]
        ]
    },
    {
        id: "smc-gold-as-1115cs-tnr-01-g2", brand: 'supermicro', cat: "servers", series: 'gold', seriesGroup: 'enterprise-compute/cloud-data-center', icon: "ph-hard-drives",
        img: 'assets/products/smc-gold-as-1115cs-tnr-01-g2.webp', imgSize: [423, 92],
        name: "Supermicro 1U CloudDC AS -1115CS-TNR-01-G2",
        summary: "Ready-to-ship Gold Series 1U CloudDC (Compute/Metadata Node for AI Storage Cluster) with 1× AMD EPYC 9555P, 384GB DDR5-6400 and 960GB flash storage.",
        specs: [
            ["CPU", "1× AMD EPYC 9555P (64C/3.2GHz)"],
            ["Memory", "384GB DDR5-6400"],
            ["Storage", "1× 960GB U.2 NVMe SSD"],
            ["Networking", "200GbE/NDR200"],
            ["Form factor", "1U Rackmount"],
            ["Availability", "Gold Series, pre-configured and ready to ship"]
        ]
    },
    {
        id: "smc-gold-as-1115cs-tnr-02-g2", brand: 'supermicro', cat: "servers", series: 'gold', seriesGroup: 'enterprise-compute/cloud-data-center', icon: "ph-hard-drives",
        img: 'assets/products/smc-gold-as-1115cs-tnr-02-g2.webp', imgSize: [423, 92],
        name: "Supermicro 1U CloudDC AS -1115CS-TNR-02-G2",
        summary: "Ready-to-ship Gold Series 1U CloudDC (Compute Node for Web Hosting & SMB Infrastructure) with 1× AMD EPYC 9115, 64GB DDR5-6400 and 960GB flash storage.",
        specs: [
            ["CPU", "1× AMD EPYC 9115 (16C/2.6GHz)"],
            ["Memory", "64GB DDR5-6400"],
            ["Storage", "1× 960GB M.2 NVMe SSD"],
            ["Networking", "10GbE"],
            ["Form factor", "1U Rackmount"],
            ["Availability", "Gold Series, pre-configured and ready to ship"]
        ]
    },
    {
        id: "smc-gold-sbi-612b-1ne34-01-g2", brand: 'supermicro', cat: "servers", series: 'gold', seriesGroup: 'enterprise-compute/multi-node', icon: "ph-hard-drives",
        img: 'assets/products/smc-gold-sbi-612b-1ne34-01-g2.webp', imgSize: [700, 384],
        name: "Supermicro 6U SuperBlade SBI-612B-1NE34-01-G2",
        summary: "Ready-to-ship Gold Series 6U SuperBlade (FSI, AI, EDA, 3D Rendering & Simulation) with 1× Intel Xeon 6517P per node, 128GB DDR5-6400 per node and 1.92TB flash storage per node.",
        specs: [
            ["CPU", "1× Intel Xeon 6517P (16C/3.2GHz) per node"],
            ["Memory", "128GB DDR5-6400 per node"],
            ["Storage", "1× 1.92TB M.2 NVMe SSD per node"],
            ["Networking", "Up to 4× 25G Ethernet switches on the enclosure"],
            ["Form factor", "6U"],
            ["Availability", "Gold Series, pre-configured and ready to ship"]
        ]
    },
    {
        id: "smc-gold-as-3015mr-h8tnr-01-g2", brand: 'supermicro', cat: "servers", series: 'gold', seriesGroup: 'enterprise-compute/multi-node', icon: "ph-hard-drives",
        img: 'assets/products/smc-gold-as-3015mr-h8tnr-01-g2.webp', imgSize: [700, 245],
        name: "Supermicro 3U 8-Node MicroCloud AS -3015MR-H8TNR-01-G2",
        summary: "Ready-to-ship Gold Series 3U 8-Node MicroCloud (Hosting & Cloud Gaming) with 1× AMD EPYC 4565P per node, 64GB DDR5-5600 per node and 3.84TB flash storage per node.",
        specs: [
            ["CPU", "1× AMD EPYC 4565P (16C/4.3GHz) per node"],
            ["Memory", "64GB DDR5-5600 per node"],
            ["Storage", "2× 1.92TB U.2 NVMe SSD per node"],
            ["Networking", "2-port 10GbE/25GbE AOC (MLP or LP PCIe NIC) per node"],
            ["Form factor", "3U Rackmount"],
            ["Availability", "Gold Series, pre-configured and ready to ship"]
        ]
    },
    {
        id: "smc-gold-sys-511e-wr-01-g2", brand: 'supermicro', cat: "servers", series: 'gold', seriesGroup: 'enterprise-compute/wio', icon: "ph-hard-drives",
        img: 'assets/products/smc-gold-sys-511e-wr-01-g2.webp', imgSize: [700, 163],
        name: "Supermicro 1U WIO SYS-511E-WR-01-G2",
        summary: "Ready-to-ship Gold Series 1U WIO (Virtualization and Cloud Infrastructure) with 1× Intel Xeon 4510, 64GB DDR5-4400 and 960GB flash storage.",
        specs: [
            ["CPU", "1× Intel Xeon 4510 (12C/2.4GHz)"],
            ["Memory", "64GB DDR5-4400"],
            ["Storage", "1× 960GB M.2 NVMe SSD"],
            ["Networking", "1GbE"],
            ["Form factor", "1U"],
            ["Availability", "Gold Series, pre-configured and ready to ship"]
        ]
    },
    {
        id: "smc-gold-sys-c542i-11302u", brand: 'supermicro', cat: "client", series: 'gold', seriesGroup: 'client-workstation/client-system', icon: "ph-desktop",
        img: 'assets/products/smc-gold-sys-c542i-11302u.webp', imgSize: [400, 868],
        name: "Supermicro Mid-Tower AI PC SYS-C542i-11302U",
        summary: "Ready-to-ship Gold Series Mid-Tower AI PC (Private/Sovereign AI Endpoint) with 1× Intel Core Ultra 7 Processor 265, 32GB DDR5-5600 and 1TB flash storage.",
        specs: [
            ["CPU", "1× Intel Core Ultra 7 Processor 265 (20C/5.3GHz)"],
            ["Memory", "32GB DDR5-5600"],
            ["Storage", "1TB NVMe SSD"],
            ["Networking", "1GbE"],
            ["Form factor", "Mid-Tower"],
            ["Availability", "Gold Series, pre-configured and ready to ship"]
        ]
    },
    {
        id: "smc-gold-as-c521d-31101u", brand: 'supermicro', cat: "client", series: 'gold', seriesGroup: 'client-workstation/client-system', icon: "ph-desktop",
        img: 'assets/products/smc-gold-as-c521d-31101u.webp', imgSize: [486, 723],
        name: "Supermicro Slim Tower System AS -C521D-31101U",
        summary: "Ready-to-ship Gold Series Slim Tower System (Commercial SMB Desktop) with 1× AMD EPYC 4124P, 16GB DDR5-5600 and 1TB flash storage.",
        specs: [
            ["CPU", "1× AMD EPYC 4124P (4C/5.3GHz)"],
            ["Memory", "16GB DDR5-5600"],
            ["Storage", "1× 1TB M.2 NVMe SSD"],
            ["Networking", "5GbE"],
            ["Operating system", "Windows 11 Home"],
            ["Form factor", "Compact Mini-Tower"],
            ["Availability", "Gold Series, pre-configured and ready to ship"]
        ]
    },
    {
        id: "smc-gold-as-c521d-21101u", brand: 'supermicro', cat: "client", series: 'gold', seriesGroup: 'client-workstation/client-system', icon: "ph-desktop",
        img: 'assets/products/smc-gold-as-c521d-21101u.webp', imgSize: [400, 1029],
        name: "Supermicro Slim Tower System AS -C521D-21101U",
        summary: "Ready-to-ship Gold Series Slim Tower System (Business AI Desktop) with 1× AMD EPYC 4245P, 16GB DDR5-5600 and 1TB flash storage.",
        specs: [
            ["CPU", "1× AMD EPYC 4245P (6C/5.4GHz)"],
            ["Memory", "16GB DDR5-5600"],
            ["Storage", "1× 1TB M.2 NVMe SSD"],
            ["Networking", "5GbE"],
            ["Operating system", "Windows 11 Home"],
            ["Form factor", "Compact Mini-Tower"],
            ["Availability", "Gold Series, pre-configured and ready to ship"]
        ]
    },
    {
        id: "smc-gold-as-c521d-11302u", brand: 'supermicro', cat: "client", series: 'gold', seriesGroup: 'client-workstation/client-system', icon: "ph-desktop",
        img: 'assets/products/smc-gold-as-c521d-11302u.webp', imgSize: [400, 1029],
        name: "Supermicro Slim Tower System AS -C521D-11302U",
        summary: "Ready-to-ship Gold Series Slim Tower System (Compact AI-Ready Slim Tower) with 1× AMD Ryzen 9700X, 32GB DDR5-5600 and 1TB flash storage.",
        specs: [
            ["CPU", "1× AMD Ryzen 9700X (8C/5.5GHz)"],
            ["Memory", "32GB DDR5-5600"],
            ["Storage", "1× 1TB M.2 NVMe SSD"],
            ["Networking", "5GbE"],
            ["Operating system", "Windows 11 Pro"],
            ["Form factor", "Compact Mini-Tower"],
            ["Availability", "Gold Series, pre-configured and ready to ship"]
        ]
    },
    {
        id: "smc-gold-sys-822gs-nb3rt-01-g2", brand: 'supermicro', cat: "gpu-servers", series: 'gold', seriesGroup: 'enterprise-ai/ai-systems', icon: "ph-graphics-card",
        img: 'assets/products/smc-gold-sys-822gs-nb3rt-01-g2.webp', imgSize: [700, 507],
        name: "Supermicro 8U 8-GPU System SYS-822GS-NB3RT-01-G2",
        summary: "Ready-to-ship Gold Series 8U 8-GPU System (Large-Scale AI Inference Serving) with 2× Intel Xeon 6768P, NVIDIA HGX B300 8-GPU, 2TB DDR5-6400 and 960GB flash storage.",
        specs: [
            ["GPUs", "NVIDIA HGX B300 8-GPU"],
            ["CPUs", "2× Intel Xeon 6768P (64C/2.4GHz)"],
            ["Memory", "2TB DDR5-6400"],
            ["Networking", "8-port 800G IB or 16-port 400GbE"],
            ["Form factor", "8U Rackmount"],
            ["Availability", "Gold Series, pre-configured and ready to ship"]
        ]
    },
    {
        id: "smc-gold-sys-822gs-nb3rt-02-g2", brand: 'supermicro', cat: "gpu-servers", series: 'gold', seriesGroup: 'enterprise-ai/ai-systems', icon: "ph-graphics-card",
        img: 'assets/products/smc-gold-sys-822gs-nb3rt-02-g2.webp', imgSize: [500, 364],
        name: "Supermicro 8U 8-GPU System SYS-822GS-NB3RT-02-G2",
        summary: "Ready-to-ship Gold Series 8U 8-GPU System (Large-Scale AI Inference Serving) with 2× Intel Xeon 6776P, NVIDIA HGX B300 8-GPU, 2TB DDR5-6400 and 960GB flash storage.",
        specs: [
            ["GPUs", "NVIDIA HGX B300 8-GPU"],
            ["CPUs", "2× Intel Xeon 6776P (64C/2.4GHz)"],
            ["Memory", "2TB DDR5-6400"],
            ["Networking", "8-port 800G IB or 16-port 400GbE"],
            ["Form factor", "8U Rackmount"],
            ["Availability", "Gold Series, pre-configured and ready to ship"]
        ]
    },
    {
        id: "smc-gold-as-8126gs-nb3rt-01-g2", brand: 'supermicro', cat: "gpu-servers", series: 'gold', seriesGroup: 'enterprise-ai/ai-systems', icon: "ph-graphics-card",
        img: 'assets/products/smc-gold-as-8126gs-nb3rt-01-g2.webp', imgSize: [700, 512],
        name: "Supermicro 8U 8-GPU System AS -8126GS-NB3RT-01-G2",
        summary: "Ready-to-ship Gold Series 8U 8-GPU System (Large-Scale AI Inference Serving) with 2× AMD EPYC 9575F, NVIDIA HGX B300 8-GPU, 3TB DDR5-6400 and 65.28TB flash storage.",
        specs: [
            ["GPUs", "NVIDIA HGX B300 8-GPU"],
            ["CPUs", "2× AMD EPYC 9575F (128C/3.3GHz)"],
            ["Memory", "3TB DDR5-6400"],
            ["Networking", "8-port 800G IB or 16-port 400GbE"],
            ["Form factor", "8U Rackmount"],
            ["Availability", "Gold Series, pre-configured and ready to ship"]
        ]
    },
    {
        id: "smc-gold-sys-212gb-fnr-01-g2", brand: 'supermicro', cat: "gpu-servers", series: 'gold', seriesGroup: 'enterprise-ai/ai-systems', icon: "ph-graphics-card",
        img: 'assets/products/smc-gold-sys-212gb-fnr-01-g2.webp', imgSize: [688, 137],
        name: "Supermicro 2U 2-GPU System SYS-212GB-FNR-01-G2",
        summary: "Ready-to-ship Gold Series 2U 2-GPU System (SaaS - Agent Flow AI Inference) with 1× Intel Xeon 6731P, 2× NVIDIA RTX PRO 6000 Blackwell Server Edition, 512GB DDR5-6400 and 8.64TB flash storage.",
        specs: [
            ["GPUs", "2× NVIDIA RTX PRO 6000 Blackwell Server Edition"],
            ["CPUs", "1× Intel Xeon 6731P (32C/2.5GHz)"],
            ["Memory", "512GB DDR5-6400"],
            ["Networking", "10GbE"],
            ["Form factor", "2U Rackmount"],
            ["Availability", "Gold Series, pre-configured and ready to ship"]
        ]
    },
    {
        id: "smc-gold-sys-422ga-nrt-01-g2", brand: 'supermicro', cat: "gpu-servers", series: 'gold', seriesGroup: 'enterprise-ai/ai-systems', icon: "ph-graphics-card",
        img: 'assets/products/smc-gold-sys-422ga-nrt-01-g2.webp', imgSize: [503, 225],
        name: "Supermicro 4U 4-GPU System SYS-422GA-NRT-01-G2",
        summary: "Ready-to-ship Gold Series 4U 4-GPU System (PaaS - Agent Flow AI Inference) with 2× Intel Xeon 6960P, 4× NVIDIA RTX PRO 6000 Blackwell Server Edition, 1TB DDR5-6400 and 8.64TB flash storage.",
        specs: [
            ["GPUs", "4× NVIDIA RTX PRO 6000 Blackwell Server Edition"],
            ["CPUs", "2× Intel Xeon 6960P (144 cores/2.7GHz)"],
            ["Memory", "1TB DDR5-6400"],
            ["Networking", "10GbE"],
            ["Form factor", "4U Rackmount"],
            ["Availability", "Gold Series, pre-configured and ready to ship"]
        ]
    },
    {
        id: "smc-gold-sys-422ga-nrt-02-g2", brand: 'supermicro', cat: "gpu-servers", series: 'gold', seriesGroup: 'enterprise-ai/ai-systems', icon: "ph-graphics-card",
        img: 'assets/products/smc-gold-sys-422ga-nrt-02-g2.webp', imgSize: [500, 216],
        name: "Supermicro 4U 8-GPU System SYS-422GA-NRT-02-G2",
        summary: "Ready-to-ship Gold Series 4U 8-GPU System (PaaS - Agent Flow AI Inference) with 2× Intel Xeon 6962P, 8× NVIDIA RTX PRO 6000 Blackwell Server Edition, 1.5TB DDR5-6400 and 8.64TB flash storage.",
        specs: [
            ["GPUs", "8× NVIDIA RTX PRO 6000 Blackwell Server Edition"],
            ["CPUs", "2× Intel Xeon 6962P (144C/2.7GHz)"],
            ["Memory", "1.5TB DDR5-6400"],
            ["Networking", "2-port 400GbE & 2-port 200GbE"],
            ["Form factor", "4U Rackmount"],
            ["Availability", "Gold Series, pre-configured and ready to ship"]
        ]
    },
    {
        id: "smc-gold-as-5126gs-tnrt-01-g2", brand: 'supermicro', cat: "gpu-servers", series: 'gold', seriesGroup: 'enterprise-ai/ai-systems', icon: "ph-graphics-card",
        img: 'assets/products/smc-gold-as-5126gs-tnrt-01-g2.webp', imgSize: [700, 361],
        name: "Supermicro 5U 2-GPU System AS -5126GS-TNRT-01-G2",
        summary: "Ready-to-ship Gold Series 5U 2-GPU System (SaaS - Agent Flow AI Inference) with 2× AMD EPYC 9355, 2× NVIDIA RTX PRO 6000 Blackwell Server Edition, 1.5TB DDR5-6400 and 960GB flash storage.",
        specs: [
            ["GPUs", "2× NVIDIA RTX PRO 6000 Blackwell Server Edition"],
            ["CPUs", "2× AMD EPYC 9355 (32C/3.55GHz)"],
            ["Memory", "1.5TB DDR5-6400"],
            ["Networking", "10GbE"],
            ["Form factor", "5U Rackmount"],
            ["Availability", "Gold Series, pre-configured and ready to ship"]
        ]
    },
    {
        id: "smc-gold-ars-511gd-nb-lcc-01-g2", brand: 'supermicro', cat: "desktop-ai", series: 'gold', seriesGroup: 'enterprise-ai/ai-systems', icon: "ph-desktop-tower",
        img: 'assets/products/smc-gold-ars-511gd-nb-lcc-01-g2.webp', imgSize: [500, 770],
        name: "Supermicro Super AI Station ARS-511GD-NB-LCC-01-G2",
        summary: "Ready-to-ship Gold Series Super AI Station (AI Agent Development and Deployment) with 1 NVIDIA Grace 72-core ARM Neoverse V2 CPU, 1 NVIDIA Blackwell Ultra (B300) GPU, 748 GB coherent memory and 3.84TB flash storage.",
        specs: [
            ["GPUs", "1 NVIDIA Blackwell Ultra (B300) GPU"],
            ["CPUs", "1 NVIDIA Grace 72-core ARM Neoverse V2 CPU"],
            ["Memory", "748 GB of Coherent Memory"],
            ["Networking", "2-port 400GbE & 1-port 10GbE"],
            ["Form factor", "Tower or 5U"],
            ["Availability", "Gold Series, pre-configured and ready to ship"]
        ]
    },
    {
        id: "smc-gold-asg-2015s-e1cr24l-01-g2", brand: 'supermicro', cat: "storage", series: 'gold', seriesGroup: 'enterprise-storage/storage-systems', icon: "ph-database",
        img: 'assets/products/smc-gold-asg-2015s-e1cr24l-01-g2.webp', imgSize: [523, 162],
        name: "Supermicro 2U Simply Double ASG-2015S-E1CR24L-01-G2",
        summary: "Ready-to-ship Gold Series 2U Simply Double (Big Data Analytics/Content Repository) with 1× AMD EPYC 9334, 512GB DDR5-4800 and 528TB raw capacity.",
        specs: [
            ["Raw capacity", "528TB"],
            ["Drives", "24× 22TB 3.5\" SAS3 HDD; 1× 960GB 2.5\" SATA SSD"],
            ["CPU", "1× AMD EPYC 9334 (32C/2.7GHz)"],
            ["Memory", "512GB DDR5-4800"],
            ["Networking", "100GbE"],
            ["Availability", "Gold Series, pre-configured and ready to ship"]
        ]
    },
    {
        id: "smc-gold-as-2015cs-tnr-01-g2", brand: 'supermicro', cat: "storage", series: 'gold', seriesGroup: 'enterprise-storage/storage-systems', icon: "ph-database",
        img: 'assets/products/smc-gold-as-2015cs-tnr-01-g2.webp', imgSize: [502, 145],
        name: "Supermicro 2U CloudDC AS -2015CS-TNR-01-G2",
        summary: "Ready-to-ship Gold Series 2U CloudDC (Storage Hardware for IaaS) with 1× AMD EPYC 9455P, 768GB DDR5-6400 and 192TB raw capacity.",
        specs: [
            ["Raw capacity", "192TB"],
            ["Drives", "2× 3.8TB U.2 NVMe SSD; 8× 24TB 3.5\" SATA HDD; 2× 240GB 2.5\" SATA SSD"],
            ["CPU", "1× AMD EPYC 9455P (48C/3.15GHz)"],
            ["Memory", "768GB DDR5-6400"],
            ["Networking", "25GbE"],
            ["Availability", "Gold Series, pre-configured and ready to ship"]
        ]
    },
    {
        id: "smc-gold-as-e300-14gr-01-g2", brand: 'supermicro', cat: "edge", series: 'gold', seriesGroup: 'intelligent-edge/edgeiot', icon: "ph-broadcast",
        img: 'assets/products/smc-gold-as-e300-14gr-01-g2.webp', imgSize: [700, 150],
        name: "Supermicro Compact Edge System AS -E300-14GR-01-G2",
        summary: "Ready-to-ship Gold Series Compact Edge System (Branch Office / Store Appliance) with 1× AMD EPYC 4545P, 32GB DDR5-5600 and 960GB flash storage.",
        specs: [
            ["CPU", "1× AMD EPYC 4545P (16C/3.0GHz)"],
            ["Memory", "32GB DDR5-5600"],
            ["Storage", "1× 960GB M.2 NVMe SSD"],
            ["Networking", "1GbE"],
            ["Form factor", "Fan-based Embedded"],
            ["Availability", "Gold Series, pre-configured and ready to ship"]
        ]
    },
    {
        id: "smc-gold-sys-111ad-hn2-01-g2", brand: 'supermicro', cat: "edge", series: 'gold', seriesGroup: 'intelligent-edge/edgeiot', icon: "ph-broadcast",
        img: 'assets/products/smc-gold-sys-111ad-hn2-01-g2.webp', imgSize: [700, 222],
        name: "Supermicro 1U Ultra-Short Depth SYS-111AD-HN2-01-G2",
        summary: "Ready-to-ship Gold Series 1U Ultra-Short Depth (Self-Checkout Kiosk - Retail) with 1× Intel Core i7-12700E, 64GB DDR5-5600 and 3.84TB flash storage.",
        specs: [
            ["CPU", "1× Intel Core i7-12700E (12C/2.1GHz)"],
            ["Memory", "64GB DDR5-5600"],
            ["Storage", "2× 1.92TB 2.5\" SATA SSD"],
            ["Networking", "2.5GbE"],
            ["Form factor", "1U Rackmount"],
            ["Availability", "Gold Series, pre-configured and ready to ship"]
        ]
    },
    {
        id: "smc-gold-as-1015a-mt-01-g2", brand: 'supermicro', cat: "servers", series: 'gold', seriesGroup: 'client-workstation/workstation', icon: "ph-hard-drives",
        img: 'assets/products/smc-gold-as-1015a-mt-01-g2.webp', imgSize: [700, 114],
        name: "Supermicro 1U Mainstream AS -1015A-MT-01-G2",
        summary: "Ready-to-ship Gold Series 1U Mainstream (Remote Office/Branch Office Infrastructure) with 1× AMD EPYC 4564P, 32GB DDR5-5600 and 1.92TB flash storage.",
        specs: [
            ["CPU", "1× AMD EPYC 4564P (16C/4.5GHz)"],
            ["Memory", "32GB DDR5-5600"],
            ["Storage", "1× 1.92TB M.2 NVMe SSD"],
            ["Networking", "1GbE"],
            ["Form factor", "1U"],
            ["Availability", "Gold Series, pre-configured and ready to ship"]
        ]
    },

    /* ---------------- ASUS ---------------- */
    {
        id: 'asus-ai-pod', brand: 'asus', cat: 'rack-scale', icon: 'ph-cube-transparent',
        img: 'assets/products/asus-ai-pod.webp', imgSize: [305, 800],
        name: 'ASUS AI POD (NVIDIA GB300 NVL72)',
        summary: 'ASUS rack-scale AI infrastructure built on NVIDIA Grace Blackwell Ultra, with liquid cooling and deployment services.',
        specs: [
            ['GPUs', '72× NVIDIA Blackwell Ultra'],
            ['CPUs', '36× NVIDIA Grace'],
            ['Cooling', 'Liquid-cooled rack'],
            ['Services', 'ASUS Infrastructure Deployment Center (AIDC)']
        ]
    },
    {
        id: 'asus-xa-nb3i-e12', brand: 'asus', cat: 'gpu-servers', icon: 'ph-hard-drives',
        img: 'assets/products/asus-xa-nb3i-e12.webp', imgSize: [554, 512],
        name: 'ASUS XA NB3I-E12',
        summary: '9U NVIDIA HGX B300 8-GPU server with dual Intel Xeon 6 for heavy AI training and inference.',
        specs: [
            ['GPUs', 'NVIDIA HGX B300 8-GPU'],
            ['CPUs', 'Dual Intel Xeon 6'],
            ['Networking', '8× embedded ConnectX-8 InfiniBand, dual 10 GbE'],
            ['Memory', '32 DIMM slots'],
            ['Storage', '10× NVMe'],
            ['Expansion', '5 PCIe slots'],
            ['Form factor', '9U']
        ]
    },
    {
        id: 'asus-esc8000a-e13x', brand: 'asus', cat: 'gpu-servers', isNew: true, icon: 'ph-graphics-card',
        img: 'assets/products/asus-esc8000a-e13x.webp', imgSize: [732, 470],
        name: 'ASUS ESC8000A-E13X',
        summary: '4U NVIDIA RTX PRO Server with ConnectX-8 SuperNICs and eight RTX PRO 6000 Blackwell GPUs.',
        specs: [
            ['GPUs', '8× RTX PRO 6000 Blackwell Server Edition'],
            ['CPUs', 'Dual AMD EPYC 9005'],
            ['Networking', '8× 400 Gb/s QSFP (ConnectX-8)'],
            ['Memory', '24 DIMM slots'],
            ['Expansion', '8× PCIe 6.0 + 2× PCIe 5.0'],
            ['Storage', '8× 2.5" NVMe'],
            ['Form factor', '4U']
        ]
    },
    {
        id: 'asus-esc8000-e12p', brand: 'asus', cat: 'gpu-servers', icon: 'ph-graphics-card',
        img: 'assets/products/asus-esc8000-e12p.webp', imgSize: [732, 470],
        name: 'ASUS ESC8000-E12P',
        summary: 'Intel Xeon 6 4U NVIDIA MGX server for eight dual-slot GPUs or Gaudi 3 accelerators.',
        specs: [
            ['GPUs', '8× dual-slot: H200, RTX PRO 6000 Blackwell SE or Intel Gaudi 3'],
            ['CPUs', 'Dual Intel Xeon 6'],
            ['Memory', 'Up to 32 DIMM'],
            ['Expansion', '5× PCIe 5.0'],
            ['Storage', '8× 2.5" NVMe'],
            ['Form factor', '4U, NVIDIA MGX']
        ]
    },
    {
        id: 'asus-esc8000a-e13', brand: 'asus', cat: 'gpu-servers', icon: 'ph-graphics-card',
        img: 'assets/products/asus-esc8000a-e13.webp', imgSize: [732, 470],
        name: 'ASUS ESC8000A-E13',
        summary: 'AMD EPYC 4U server supporting eight dual-slot NVIDIA H200 or RTX PRO 6000 Blackwell GPUs.',
        specs: [
            ['GPUs', '8× dual-slot: H200, RTX PRO 6000 Blackwell SE, AMD Instinct MI350P'],
            ['CPUs', 'Dual AMD EPYC 9005/9004'],
            ['Memory', 'Up to 24 DIMM'],
            ['Storage', 'Up to 6× U.2 NVMe'],
            ['Form factor', '4U']
        ]
    },
    {
        id: 'asus-esc-a8a-e12u', brand: 'asus', cat: 'gpu-servers', icon: 'ph-hard-drives',
        img: 'assets/products/asus-esc-a8a-e12u.webp', imgSize: [766, 548],
        name: 'ASUS ESC A8A-E12U',
        summary: '7U eight-GPU AMD Instinct MI325X server for large AI models and HPC.',
        specs: [
            ['GPUs', '8× AMD Instinct MI325X'],
            ['CPUs', 'Dual AMD EPYC 9005'],
            ['Memory', '24 DIMM slots'],
            ['Expansion', 'Up to 11 PCIe slots'],
            ['Storage', '10× NVMe'],
            ['Form factor', '7U']
        ]
    },
    {
        id: 'asus-esc4000a-e12', brand: 'asus', cat: 'gpu-servers', icon: 'ph-graphics-card',
        img: 'assets/products/asus-esc4000a-e12.webp', imgSize: [755, 388],
        name: 'ASUS ESC4000A-E12',
        summary: 'Single-socket 2U GPU server for four dual-slot GPUs — ideal for inference and VDI.',
        specs: [
            ['GPUs', '4× dual-slot GPUs'],
            ['CPU', 'Single AMD EPYC 9004/9005'],
            ['Memory', 'Up to 12 DIMM'],
            ['Expansion', '8× PCIe 5.0, OCP 3.0'],
            ['Storage', '6× NVMe'],
            ['Form factor', '2U']
        ]
    },
    {
        id: 'asus-esc4000-e11', brand: 'asus', cat: 'gpu-servers', icon: 'ph-graphics-card',
        img: 'assets/products/asus-esc4000-e11.webp', imgSize: [754, 386],
        name: 'ASUS ESC4000-E11',
        summary: '2U dual-socket GPU server with 5th Gen Intel Xeon Scalable and four dual-slot GPUs.',
        specs: [
            ['GPUs', '4× dual-slot GPUs'],
            ['CPUs', 'Dual 5th Gen Intel Xeon Scalable'],
            ['Memory', '16 DIMM'],
            ['Power', '2× 2600 W Titanium PSUs'],
            ['Form factor', '2U']
        ]
    },
    {
        id: 'asus-rs-series', brand: 'asus', cat: 'servers', icon: 'ph-hard-drives',
        img: 'assets/products/asus-rs-series.webp', imgSize: [724, 451], imgAlt: "ASUS RS720A-E13-RS24U, shown as an example of the RS Series",
        name: 'ASUS RS Series Rack Servers',
        summary: '1U and 2U rack servers with Intel Xeon 6 and AMD EPYC 9005 for virtualization and enterprise workloads.',
        specs: [
            ['CPUs', 'Intel Xeon 6 or AMD EPYC 9005'],
            ['Form factor', '1U / 2U, single or dual socket'],
            ['Management', 'ASMB iKVM, ASUS Control Center'],
            ['Use case', 'Virtualization, database, web hosting']
        ]
    },
    {
        id: 'asus-high-density', brand: 'asus', cat: 'servers', icon: 'ph-squares-four',
        img: 'assets/products/asus-high-density.webp', imgSize: [774, 658], imgAlt: "ASUS RS720QA-E12-RS8U, shown as an example of ASUS high-density servers",
        name: 'ASUS High-Density Multi-Node Servers',
        summary: 'Multi-node 2U systems that maximise compute per rack unit for HPC and cloud.',
        specs: [
            ['Nodes', 'Multi-node 2U chassis'],
            ['CPUs', 'Intel Xeon 6 or AMD EPYC'],
            ['Use case', 'HPC, cloud hosting, HCI']
        ]
    },
    {
        id: 'asus-storage', brand: 'asus', cat: 'storage', icon: 'ph-database',
        img: 'assets/products/asus-storage.webp', imgSize: [709, 426], imgAlt: "ASUS OJ340A-RS60 object storage server, one of the ASUS storage systems",
        name: 'ASUS Storage Solutions',
        summary: 'AI/HPC, block, unified and object storage plus JBOD expansion from the ASUS Infrastructure Solution Group.',
        specs: [
            ['Types', 'AI/HPC, block, unified, object, JBOD'],
            ['Use case', 'GPU cluster data, backup, enterprise file']
        ]
    },
    {
        id: 'asus-edge', brand: 'asus', cat: 'edge', icon: 'ph-broadcast',
        img: 'assets/products/asus-edge.webp', imgSize: [756, 276], imgAlt: "ASUS EG500-E11-RS4-R, shown as an example of ASUS edge servers",
        name: 'ASUS Edge & Tower Servers',
        summary: 'Edge servers and tower servers for branch offices, retail and on-site AI inference.',
        specs: [
            ['Form factor', 'Tower, short-depth edge'],
            ['GPU options', 'Single and dual GPU configurations'],
            ['Use case', 'SMB, branch IT, edge AI']
        ]
    },
    {
        id: 'asus-ascent-gx10', brand: 'asus', cat: 'desktop-ai', icon: 'ph-desktop-tower',
        img: 'assets/products/asus-ascent-gx10.webp', imgSize: [681, 257],
        name: 'ASUS Ascent GX10',
        summary: 'Compact personal AI supercomputer built on the NVIDIA GB10 Grace Blackwell Superchip.',
        specs: [
            ['Superchip', 'NVIDIA GB10 Grace Blackwell'],
            ['Memory', '128 GB unified memory'],
            ['Software', 'NVIDIA DGX OS / AI software stack'],
            ['Form factor', 'Desktop mini PC']
        ]
    },
    {
        id: 'asus-acc', brand: 'asus', cat: 'software', icon: 'ph-gauge',
        name: 'ASUS Control Center Data Center Edition',
        summary: 'Centralised IT management for ASUS servers — monitoring, firmware updates and remote control at scale.',
        specs: [
            ['Features', 'Monitoring, BIOS/BMC updates, power control'],
            ['Out-of-band', 'ASMB BMC integration'],
            ['Use case', 'Fleet management across data centers']
        ]
    },

    /* ---------------- Pre-booking (new launches) ---------------- */
    {
        id: 'asus-expertcenter-pro-et900n-g3', brand: 'asus', cat: 'desktop-ai', preorder: true, icon: 'ph-desktop-tower',
        img: 'assets/products/asus-expertcenter-pro-et900n-g3.webp', imgSize: [602, 900],
        name: 'ASUS ExpertCenter Pro ET900N G3',
        summary: 'Deskside AI supercomputer on NVIDIA DGX Station architecture with the GB300 Grace Blackwell Ultra Desktop Superchip.',
        specs: [
            ['Superchip', 'NVIDIA GB300 Grace Blackwell Ultra'],
            ['Memory', '748 GB coherent memory'],
            ['AI performance', 'Up to 20 PFLOPS'],
            ['Networking', 'NVIDIA ConnectX-8 SuperNIC']
        ]
    },
    {
        id: 'asus-proart-gr1x', brand: 'asus', cat: 'desktop-ai', preorder: true, icon: 'ph-desktop',
        img: 'assets/products/asus-proart-gr1x.webp', imgSize: [656, 338],
        name: 'ASUS ProArt GR1X Mini PC',
        summary: 'Windows mini PC powered by NVIDIA RTX Spark, with up to 128 GB unified memory for local AI agents and creative work.',
        specs: [
            ['Superchip', 'NVIDIA RTX Spark N1X'],
            ['Memory', 'Up to 128 GB unified memory'],
            ['AI performance', 'Up to 1 PFLOP FP4'],
            ['Size', '150 × 150 × 51 mm']
        ]
    },
    {
        id: 'msi-prestige-n16-flip-ai-plus', brand: 'msi', cat: 'laptops', preorder: true, icon: 'ph-laptop',
        img: 'assets/products/msi-prestige-n16-flip-ai-plus.webp', imgSize: [900, 644],
        name: 'MSI Prestige N16 Flip AI+',
        summary: '16-inch 2-in-1 AI laptop powered by NVIDIA RTX Spark, with up to 128 GB unified memory and an OLED touch display.',
        specs: [
            ['Superchip', 'NVIDIA RTX Spark N1X'],
            ['Memory', '64 GB or 128 GB unified memory'],
            ['Display', '16" OLED touch, 120 Hz, 100% DCI-P3'],
            ['Storage', '1 TB or 2 TB NVMe SSD']
        ]
    },

    /* ---------------- ASUSTOR ---------------- */
    {
        id: 'asustor-as1102tl', brand: 'asustor', cat: 'nas', icon: 'ph-database',
        img: 'assets/products/asustor-as1102tl.webp', imgSize: [323, 384],
        name: 'ASUSTOR Drivestor 2 Lite (AS1102TL)',
        summary: 'Entry-level 2-bay NAS for home backup, photo libraries and media streaming at a budget price.',
        specs: [
            ['Drive bays', '2× 3.5"/2.5" SATA'],
            ['CPU', 'Realtek RTD1619B (quad-core, 1.7 GHz)'],
            ['Networking', '1× 1GbE'],
            ['Memory', '1GB DDR4'],
            ['Max internal raw', '36 TB'],
            ['USB', '1× USB 3.2 Gen 1, 1× USB 2.0'],
            ['Form factor', 'Desktop tower'],
            ['Warranty', '3 Years']
        ]
    },
    {
        id: 'asustor-as1202t', brand: 'asustor', cat: 'nas', isNew: true, icon: 'ph-database',
        img: 'assets/products/asustor-as1202t.webp', imgSize: [323, 384],
        name: 'ASUSTOR Drivestor 2 Gen2 (AS1202T)',
        summary: 'Compact 2-bay home NAS with 2.5GbE networking for personal backup and media.',
        specs: [
            ['Drive bays', '2× 3.5"/2.5" SATA'],
            ['CPU', 'Realtek RTD1619B (quad-core, 1.7 GHz)'],
            ['Networking', '1× 2.5GbE'],
            ['Memory', '1GB DDR4'],
            ['Max internal raw', '36 TB'],
            ['USB', '3× USB 5Gbps Type-A'],
            ['Form factor', 'Desktop tower'],
            ['Warranty', '3 Years']
        ]
    },
    {
        id: 'asustor-as1204t', brand: 'asustor', cat: 'nas', isNew: true, icon: 'ph-database',
        img: 'assets/products/asustor-as1204t.webp', imgSize: [382, 380],
        name: 'ASUSTOR Drivestor 4 Gen2 (AS1204T)',
        summary: '4-bay home and small-office NAS with 2.5GbE for shared storage and backups.',
        specs: [
            ['Drive bays', '4× 3.5"/2.5" SATA'],
            ['CPU', 'Realtek RTD1619B (quad-core, 1.7 GHz)'],
            ['Networking', '1× 2.5GbE'],
            ['Memory', '1GB DDR4'],
            ['Max internal raw', '72 TB'],
            ['USB', '3× USB 5Gbps Type-A'],
            ['Form factor', 'Desktop tower'],
            ['Warranty', '3 Years']
        ]
    },
    {
        id: 'asustor-as1104t', brand: 'asustor', cat: 'nas', icon: 'ph-database',
        img: 'assets/products/asustor-as1104t.webp', imgSize: [382, 380],
        name: 'ASUSTOR Drivestor 4 (AS1104T)',
        summary: '4-bay value NAS with 2.5GbE for home users and small teams.',
        specs: [
            ['Drive bays', '4× 3.5"/2.5" SATA'],
            ['CPU', 'Realtek RTD1296 (quad-core, 1.4 GHz)'],
            ['Networking', '1× 2.5GbE'],
            ['Memory', '1GB DDR4'],
            ['Max internal raw', '72 TB'],
            ['USB', '2× USB 3.2 Gen 1'],
            ['Form factor', 'Desktop tower'],
            ['Warranty', '3 Years']
        ]
    },
    {
        id: 'asustor-as3302t-v2', brand: 'asustor', cat: 'nas', icon: 'ph-database',
        img: 'assets/products/asustor-as3302t-v2.webp', imgSize: [373, 411],
        name: 'ASUSTOR Drivestor 2 Pro Gen2 (AS3302T v2)',
        summary: '2-bay NAS with Btrfs snapshots and media transcoding for home offices and creators.',
        specs: [
            ['Drive bays', '2× 3.5"/2.5" SATA'],
            ['CPU', 'Realtek RTD1619B (quad-core, 1.7 GHz)'],
            ['Networking', '1× 2.5GbE'],
            ['Memory', '2GB DDR4'],
            ['Max internal raw', '36 TB'],
            ['USB', '3× USB 3.2 Gen 1'],
            ['Form factor', 'Desktop tower'],
            ['Warranty', '3 Years']
        ]
    },
    {
        id: 'asustor-as3304t-v2', brand: 'asustor', cat: 'nas', icon: 'ph-database',
        img: 'assets/products/asustor-as3304t-v2.webp', imgSize: [396, 358],
        name: 'ASUSTOR Drivestor 4 Pro Gen2 (AS3304T v2)',
        summary: '4-bay NAS with Btrfs snapshots and media transcoding for small offices and creators.',
        specs: [
            ['Drive bays', '4× 3.5"/2.5" SATA'],
            ['CPU', 'Realtek RTD1619B (quad-core, 1.7 GHz)'],
            ['Networking', '1× 2.5GbE'],
            ['Memory', '2GB DDR4'],
            ['Max internal raw', '72 TB'],
            ['USB', '3× USB 3.2 Gen 1'],
            ['Form factor', 'Desktop tower'],
            ['Warranty', '3 Years']
        ]
    },
    {
        id: 'asustor-as5202t', brand: 'asustor', cat: 'nas', icon: 'ph-database',
        img: 'assets/products/asustor-as5202t.webp', imgSize: [293, 391],
        name: 'ASUSTOR AS5202T',
        summary: '2-bay Intel NAS with dual 2.5GbE and HDMI output for home and media use.',
        specs: [
            ['Drive bays', '2× 3.5"/2.5" SATA'],
            ['CPU', 'Intel Celeron J4005 (dual-core, 2.0–2.7 GHz)'],
            ['Networking', '2× 2.5GbE'],
            ['Memory', '2GB SO-DIMM DDR4, up to 8GB'],
            ['Max internal raw', '36 TB'],
            ['USB', '3× USB 3.2 Gen 1'],
            ['Form factor', 'Desktop tower'],
            ['Warranty', '3 Years']
        ]
    },
    {
        id: 'asustor-as5304t', brand: 'asustor', cat: 'nas', icon: 'ph-database',
        img: 'assets/products/asustor-as5304t.webp', imgSize: [373, 394],
        name: 'ASUSTOR AS5304T',
        summary: '4-bay Intel NAS with dual 2.5GbE and HDMI for content creators and small offices.',
        specs: [
            ['Drive bays', '4× 3.5"/2.5" SATA'],
            ['CPU', 'Intel Celeron J4105 (quad-core, 2.0–2.7 GHz)'],
            ['Networking', '2× 2.5GbE'],
            ['Memory', '4GB SO-DIMM DDR4, up to 8GB'],
            ['Max internal raw', '72 TB'],
            ['USB', '3× USB 3.2 Gen 1'],
            ['Form factor', 'Desktop tower'],
            ['Warranty', '3 Years']
        ]
    },
    {
        id: 'asustor-as5402t', brand: 'asustor', cat: 'nas', icon: 'ph-database',
        img: 'assets/products/asustor-as5402t.webp', imgSize: [330, 362],
        name: 'ASUSTOR AS5402T',
        summary: '2-bay NAS with four M.2 NVMe slots and dual 2.5GbE for fast, hybrid flash storage.',
        specs: [
            ['Drive bays', '2× 3.5"/2.5" SATA + 4× M.2 NVMe'],
            ['CPU', 'Intel Celeron N5105 (quad-core, 2.0–2.9 GHz)'],
            ['Networking', '2× 2.5GbE'],
            ['Memory', '4GB SO-DIMM DDR4, up to 16GB'],
            ['Max internal raw', '36 TB'],
            ['USB', '3× USB 3.2 Gen 2'],
            ['Form factor', 'Desktop tower'],
            ['Warranty', '3 Years']
        ]
    },
    {
        id: 'asustor-as5404t', brand: 'asustor', cat: 'nas', icon: 'ph-database',
        img: 'assets/products/asustor-as5404t.webp', imgSize: [395, 357],
        name: 'ASUSTOR AS5404T',
        summary: '4-bay NAS with four M.2 NVMe slots and dual 2.5GbE for fast shared storage.',
        specs: [
            ['Drive bays', '4× 3.5"/2.5" SATA + 4× M.2 NVMe'],
            ['CPU', 'Intel Celeron N5105 (quad-core, 2.0–2.9 GHz)'],
            ['Networking', '2× 2.5GbE'],
            ['Memory', '4GB SO-DIMM DDR4, up to 16GB'],
            ['Max internal raw', '72 TB'],
            ['USB', '3× USB 3.2 Gen 2'],
            ['Form factor', 'Desktop tower'],
            ['Warranty', '3 Years']
        ]
    },
    {
        id: 'asustor-as6702t', brand: 'asustor', cat: 'nas', icon: 'ph-database',
        img: 'assets/products/asustor-as6702t.webp', imgSize: [301, 352],
        name: 'ASUSTOR Lockerstor 2 Gen2 (AS6702T)',
        summary: '2-bay enthusiast NAS with Celeron N5105, dual 2.5GbE and four M.2 NVMe slots.',
        specs: [
            ['Drive bays', '2× 3.5"/2.5" SATA + 4× M.2 NVMe'],
            ['CPU', 'Intel Celeron N5105 (quad-core, 2.0–2.9 GHz)'],
            ['Networking', '2× 2.5GbE'],
            ['Memory', '4GB SO-DIMM DDR4, up to 16GB'],
            ['Max internal raw', '36 TB'],
            ['USB', '2× USB 3.2 Gen 2'],
            ['Form factor', 'Desktop tower'],
            ['Warranty', '3 Years']
        ]
    },
    {
        id: 'asustor-as6704t', brand: 'asustor', cat: 'nas', icon: 'ph-database',
        img: 'assets/products/asustor-as6704t.webp', imgSize: [376, 352],
        name: 'ASUSTOR Lockerstor 4 Gen2 (AS6704T)',
        summary: '4-bay enthusiast NAS with dual 2.5GbE, four M.2 slots and a PCIe slot for 10GbE.',
        specs: [
            ['Drive bays', '4× 3.5"/2.5" SATA + 4× M.2 NVMe'],
            ['CPU', 'Intel Celeron N5105 (quad-core, 2.0–2.9 GHz)'],
            ['Networking', '2× 2.5GbE'],
            ['Memory', '4GB SO-DIMM DDR4, up to 16GB'],
            ['Max internal raw', '72 TB'],
            ['USB', '2× USB 3.2 Gen 2'],
            ['Form factor', 'Desktop tower'],
            ['Warranty', '3 Years']
        ]
    },
    {
        id: 'asustor-as6706t', brand: 'asustor', cat: 'nas', icon: 'ph-database',
        img: 'assets/products/asustor-as6706t.webp', imgSize: [372, 283],
        name: 'ASUSTOR Lockerstor 6 Gen2 (AS6706T)',
        summary: '6-bay enthusiast NAS with dual 2.5GbE, four M.2 slots and a PCIe slot for 10GbE.',
        specs: [
            ['Drive bays', '6× 3.5"/2.5" SATA + 4× M.2 NVMe'],
            ['CPU', 'Intel Celeron N5105 (quad-core, 2.0–2.9 GHz)'],
            ['Networking', '2× 2.5GbE'],
            ['Memory', '8GB SO-DIMM DDR4, up to 16GB'],
            ['Max internal raw', '108 TB'],
            ['USB', '2× USB 3.2 Gen 2'],
            ['Form factor', 'Desktop tower'],
            ['Warranty', '3 Years']
        ]
    },
    {
        id: 'asustor-as6702t-v2', brand: 'asustor', cat: 'nas', isNew: true, icon: 'ph-database',
        img: 'assets/products/asustor-as6702t-v2.webp', imgSize: [301, 352],
        name: 'ASUSTOR Lockerstor 2 Gen2+ (AS6702T v2)',
        summary: 'Refreshed 2-bay Lockerstor with dual 5GbE and four M.2 NVMe slots.',
        specs: [
            ['Drive bays', '2× 3.5"/2.5" SATA + 4× M.2 NVMe'],
            ['CPU', 'Intel Celeron N5105 (quad-core, 2.0–2.9 GHz)'],
            ['Networking', '2× 5GbE'],
            ['Memory', '4GB SO-DIMM DDR4, up to 16GB'],
            ['Max internal raw', '36 TB'],
            ['USB', '2× USB 3.2 Gen 2 Type-A, 1× USB 2.0 Type-A'],
            ['Form factor', 'Desktop tower'],
            ['Warranty', '3 Years']
        ]
    },
    {
        id: 'asustor-as6704t-v2', brand: 'asustor', cat: 'nas', isNew: true, icon: 'ph-database',
        img: 'assets/products/asustor-as6704t-v2.webp', imgSize: [376, 352],
        name: 'ASUSTOR Lockerstor 4 Gen2+ (AS6704T v2)',
        summary: 'Refreshed 4-bay Lockerstor with dual 5GbE, four M.2 slots and a 10GbE upgrade path.',
        specs: [
            ['Drive bays', '4× 3.5"/2.5" SATA + 4× M.2 NVMe'],
            ['CPU', 'Intel Celeron N5105 (quad-core, 2.0–2.9 GHz)'],
            ['Networking', '2× 5GbE'],
            ['Memory', '4GB SO-DIMM DDR4, up to 16GB'],
            ['Max internal raw', '72 TB'],
            ['USB', '2× USB 3.2 Gen 2 Type-A, 1× USB 2.0 Type-A'],
            ['Form factor', 'Desktop tower'],
            ['Warranty', '3 Years']
        ]
    },
    {
        id: 'asustor-as6706t-v2', brand: 'asustor', cat: 'nas', isNew: true, icon: 'ph-database',
        img: 'assets/products/asustor-as6706t-v2.webp', imgSize: [372, 283],
        name: 'ASUSTOR Lockerstor 6 Gen2+ (AS6706T v2)',
        summary: 'Refreshed 6-bay Lockerstor with dual 5GbE, four M.2 slots and a 10GbE upgrade path.',
        specs: [
            ['Drive bays', '6× 3.5"/2.5" SATA + 4× M.2 NVMe'],
            ['CPU', 'Intel Celeron N5105 (quad-core, 2.0–2.9 GHz)'],
            ['Networking', '2× 5GbE'],
            ['Memory', '8GB SO-DIMM DDR4, up to 16GB'],
            ['Max internal raw', '108 TB'],
            ['USB', '2× USB 3.2 Gen 2 Type-A, 1× USB 2.0 Type-A'],
            ['Form factor', 'Desktop tower'],
            ['Warranty', '3 Years']
        ]
    },
    {
        id: 'asustor-as6804t', brand: 'asustor', cat: 'nas', isNew: true, icon: 'ph-database',
        img: 'assets/products/asustor-as6804t.webp', imgSize: [381, 350],
        name: 'ASUSTOR Lockerstor 4 Gen3 (AS6804T)',
        summary: '4-bay AMD Ryzen NAS with ECC DDR5, dual 10GbE, dual 5GbE and USB4.',
        specs: [
            ['Drive bays', '4× 3.5"/2.5" SATA + 4× M.2 NVMe'],
            ['CPU', 'AMD Ryzen V3C14 (quad-core, 2.3–3.8 GHz)'],
            ['Networking', '2× 10GbE, 2× 5GbE'],
            ['Memory', '16GB ECC DDR5-4800 SO-DIMM, up to 64GB'],
            ['Max internal raw', '72 TB'],
            ['USB', '3× USB 3.2 Gen 2 Type-A, 2× USB4 (40 Gbps)'],
            ['Form factor', 'Desktop tower'],
            ['Warranty', '3 Years']
        ]
    },
    {
        id: 'asustor-as6806t', brand: 'asustor', cat: 'nas', isNew: true, icon: 'ph-database',
        img: 'assets/products/asustor-as6806t.webp', imgSize: [384, 289],
        name: 'ASUSTOR Lockerstor 6 Gen3 (AS6806T)',
        summary: '6-bay AMD Ryzen NAS with ECC DDR5, dual 10GbE, dual 5GbE and USB4.',
        specs: [
            ['Drive bays', '6× 3.5"/2.5" SATA + 4× M.2 NVMe'],
            ['CPU', 'AMD Ryzen V3C14 (quad-core, 2.3–3.8 GHz)'],
            ['Networking', '2× 10GbE, 2× 5GbE'],
            ['Memory', '16GB ECC DDR5-4800 SO-DIMM, up to 64GB'],
            ['Max internal raw', '108 TB'],
            ['USB', '3× USB 3.2 Gen 2 Type-A, 2× USB4 (40 Gbps)'],
            ['Form factor', 'Desktop tower'],
            ['Warranty', '3 Years']
        ]
    },
    {
        id: 'asustor-as6808t', brand: 'asustor', cat: 'nas', isNew: true, icon: 'ph-database',
        img: 'assets/products/asustor-as6808t.webp', imgSize: [359, 329],
        name: 'ASUSTOR Lockerstor 8 Gen3 (AS6808T)',
        summary: '8-bay AMD Ryzen NAS with ECC DDR5, dual 10GbE, dual 5GbE and USB4.',
        specs: [
            ['Drive bays', '8× 3.5"/2.5" SATA + 4× M.2 NVMe'],
            ['CPU', 'AMD Ryzen V3C14 (quad-core, 2.3–3.8 GHz)'],
            ['Networking', '2× 10GbE, 2× 5GbE'],
            ['Memory', '16GB ECC DDR5-4800 SO-DIMM, up to 64GB'],
            ['Max internal raw', '144 TB'],
            ['USB', '3× USB 3.2 Gen 2 Type-A, 2× USB4 (40 Gbps)'],
            ['Form factor', 'Desktop tower'],
            ['Warranty', '3 Years']
        ]
    },
    {
        id: 'asustor-as6810t', brand: 'asustor', cat: 'nas', isNew: true, icon: 'ph-database',
        img: 'assets/products/asustor-as6810t.webp', imgSize: [359, 329],
        name: 'ASUSTOR Lockerstor 10 Gen3 (AS6810T)',
        summary: '10-bay AMD Ryzen NAS with ECC DDR5, dual 10GbE, dual 5GbE and USB4 for busy teams.',
        specs: [
            ['Drive bays', '10× 3.5"/2.5" SATA + 4× M.2 NVMe'],
            ['CPU', 'AMD Ryzen V3C14 (quad-core, 2.3–3.8 GHz)'],
            ['Networking', '2× 10GbE, 2× 5GbE'],
            ['Memory', '16GB ECC DDR5-4800 SO-DIMM, up to 64GB'],
            ['Max internal raw', '180 TB'],
            ['USB', '3× USB 3.2 Gen 2 Type-A, 2× USB4 (40 Gbps)'],
            ['Form factor', 'Desktop tower'],
            ['Warranty', '3 Years']
        ]
    },
    {
        id: 'asustor-as6508t', brand: 'asustor', cat: 'nas', icon: 'ph-database',
        img: 'assets/products/asustor-as6508t.webp', imgSize: [359, 329],
        name: 'ASUSTOR Lockerstor 8 (AS6508T)',
        summary: '8-bay business NAS with dual 10GbE, dual 2.5GbE and M.2 SSD caching.',
        specs: [
            ['Drive bays', '8× 3.5"/2.5" SATA + 2× M.2 NVMe'],
            ['CPU', 'Intel Atom C3538 (quad-core, 2.1 GHz)'],
            ['Networking', '2× 10GbE, 2× 2.5GbE'],
            ['Memory', '8GB SO-DIMM DDR4, up to 64GB'],
            ['Max internal raw', '144 TB'],
            ['USB', '2× USB 3.2 Gen 1'],
            ['Form factor', 'Desktop tower'],
            ['Warranty', '3 Years']
        ]
    },
    {
        id: 'asustor-as6510t', brand: 'asustor', cat: 'nas', icon: 'ph-database',
        img: 'assets/products/asustor-as6510t.webp', imgSize: [358, 328],
        name: 'ASUSTOR Lockerstor 10 (AS6510T)',
        summary: '10-bay business NAS with dual 10GbE, dual 2.5GbE and M.2 SSD caching.',
        specs: [
            ['Drive bays', '10× 3.5"/2.5" SATA + 2× M.2 NVMe'],
            ['CPU', 'Intel Atom C3538 (quad-core, 2.1 GHz)'],
            ['Networking', '2× 10GbE, 2× 2.5GbE'],
            ['Memory', '8GB SO-DIMM DDR4, up to 64GB'],
            ['Max internal raw', '180 TB'],
            ['USB', '2× USB 3.2 Gen 1'],
            ['Form factor', 'Desktop tower'],
            ['Warranty', '3 Years']
        ]
    },
    {
        id: 'asustor-fs6706t', brand: 'asustor', cat: 'nas', icon: 'ph-lightning',
        img: 'assets/products/asustor-fs6706t.webp', imgSize: [419, 63],
        name: 'ASUSTOR Flashstor 6 (FS6706T)',
        summary: 'Compact all-flash NAS with six M.2 NVMe slots and dual 2.5GbE for quiet, fast storage.',
        specs: [
            ['Drive slots', '6× M.2 NVMe SSD (all-flash)'],
            ['CPU', 'Intel Celeron N5105 (quad-core, 2.0–2.9 GHz)'],
            ['Networking', '2× 2.5GbE'],
            ['Memory', '4GB SO-DIMM DDR4, up to 16GB'],
            ['USB', '2× USB 3.2 Gen 2, 2× USB 2.0'],
            ['Form factor', 'Desktop tower'],
            ['Warranty', '3 Years']
        ]
    },
    {
        id: 'asustor-fs6712x', brand: 'asustor', cat: 'nas', icon: 'ph-lightning',
        img: 'assets/products/asustor-fs6712x.webp', imgSize: [419, 63],
        name: 'ASUSTOR Flashstor 12 Pro (FS6712X)',
        summary: 'All-flash NAS with twelve M.2 NVMe slots and 10GbE for video editing and creative teams.',
        specs: [
            ['Drive slots', '12× M.2 NVMe SSD (all-flash)'],
            ['CPU', 'Intel Celeron N5105 (quad-core, 2.0–2.9 GHz)'],
            ['Networking', '1× 10GbE'],
            ['Memory', '4GB SO-DIMM DDR4, up to 16GB'],
            ['USB', '2× USB 3.2 Gen 2, 2× USB 2.0'],
            ['Form factor', 'Desktop tower'],
            ['Warranty', '3 Years']
        ]
    },
    {
        id: 'asustor-fs6806x', brand: 'asustor', cat: 'nas', isNew: true, icon: 'ph-lightning',
        img: 'assets/products/asustor-fs6806x.webp', imgSize: [419, 63],
        name: 'ASUSTOR Flashstor 6 Gen2 (FS6806X)',
        summary: 'AMD Ryzen all-flash NAS with six M.2 NVMe slots, 10GbE and USB4.',
        specs: [
            ['Drive slots', '6× M.2 NVMe SSD (all-flash)'],
            ['CPU', 'AMD Ryzen V3C14 (quad-core, 2.3–3.8 GHz)'],
            ['Networking', '1× 10GbE'],
            ['Memory', '8GB DDR5-4800 SO-DIMM, up to 64GB'],
            ['USB', '3× USB 3.2 Gen 2 Type-A, 2× USB4 (40 Gbps)'],
            ['Form factor', 'Desktop tower'],
            ['Warranty', '3 Years']
        ]
    },
    {
        id: 'asustor-fs6812x', brand: 'asustor', cat: 'nas', isNew: true, icon: 'ph-lightning',
        img: 'assets/products/asustor-fs6812x.webp', imgSize: [419, 63],
        name: 'ASUSTOR Flashstor 12 Pro Gen2 (FS6812X)',
        summary: 'AMD Ryzen all-flash NAS with twelve M.2 NVMe slots, ECC DDR5 and dual 10GbE.',
        specs: [
            ['Drive slots', '12× M.2 NVMe SSD (all-flash)'],
            ['CPU', 'AMD Ryzen V3C14 (quad-core, 2.3–3.8 GHz)'],
            ['Networking', '2× 10GbE'],
            ['Memory', '16GB ECC DDR5-4800 SO-DIMM, up to 64GB'],
            ['USB', '3× USB 3.2 Gen 2 Type-A, 2× USB4 (40 Gbps)'],
            ['Form factor', 'Desktop tower'],
            ['Warranty', '3 Years']
        ]
    },
    {
        id: 'asustor-as6504rs-rd', brand: 'asustor', cat: 'nas', icon: 'ph-hard-drives',
        img: 'assets/products/asustor-as6504rs-rd.webp', imgSize: [432, 44],
        name: 'ASUSTOR Lockerstor 4RS / 4RD (AS6504RS / AS6504RD)',
        summary: '4-bay 1U rackmount NAS, with single (RS) or redundant (RD) power, for SMB file sharing and backup.',
        specs: [
            ['Drive bays', '4× 3.5"/2.5" SATA'],
            ['CPU', 'Intel Atom C3538 (quad-core, 2.1 GHz)'],
            ['Networking', '2× 2.5GbE, 2× 1GbE'],
            ['Memory', '8GB SO-DIMM DDR4, up to 128GB'],
            ['Max internal raw', '72 TB'],
            ['USB', '4× USB 3.2 Gen 1'],
            ['Form factor', '1u rackmount'],
            ['Warranty', '3 Years']
        ]
    },
    {
        id: 'asustor-as6512rd', brand: 'asustor', cat: 'nas', icon: 'ph-hard-drives',
        img: 'assets/products/asustor-as6512rd.webp', imgSize: [423, 128],
        name: 'ASUSTOR Lockerstor 12RD (AS6512RD)',
        summary: '12-bay 2U rackmount NAS with redundant power for SMB file servers and backup targets.',
        specs: [
            ['Drive bays', '12× 3.5"/2.5" SATA'],
            ['CPU', 'Intel Atom C3538 (quad-core, 2.1 GHz)'],
            ['Networking', '2× 2.5GbE, 2× 1GbE'],
            ['Memory', '8GB SO-DIMM DDR4, up to 128GB'],
            ['Max internal raw', '216 TB'],
            ['USB', '4× USB 3.2 Gen 1'],
            ['Form factor', '2u rackmount'],
            ['Warranty', '3 Years']
        ]
    },
    {
        id: 'asustor-as7212rdx', brand: 'asustor', cat: 'nas', isNew: true, icon: 'ph-hard-drives',
        img: 'assets/products/asustor-as7212rdx.webp', imgSize: [393, 137],
        name: 'ASUSTOR Lockerstor 12R Pro Gen2 (AS7212RDX)',
        summary: '12-bay 2U rackmount NAS with AMD Ryzen 7 PRO, up to 192 GB ECC DDR5 and redundant power.',
        specs: [
            ['Drive bays', '12× 3.5"/2.5" SATA + 1× M.2 NVMe'],
            ['CPU', 'AMD Ryzen 7 Pro 7745 (8-core, 3.8–5.3 GHz)'],
            ['Networking', '2× 10GbE, 2× 1GbE'],
            ['Memory', '16GB ECC DDR5-4800 UDIMM, up to 192GB'],
            ['Max internal raw', '216 TB'],
            ['USB', '4× USB 3.2 Gen 1 Type-A'],
            ['Form factor', '2u rackmount'],
            ['Warranty', '5 Years']
        ]
    },
    {
        id: 'asustor-as7216rdx', brand: 'asustor', cat: 'nas', isNew: true, icon: 'ph-hard-drives',
        img: 'assets/products/asustor-as7216rdx.webp', imgSize: [407, 100],
        name: 'ASUSTOR Lockerstor 16R Pro Gen2 (AS7216RDX)',
        summary: '16-bay rackmount NAS with AMD Ryzen 7 PRO, ECC DDR5 and room for 25/50GbE cards.',
        specs: [
            ['Drive bays', '16× 3.5"/2.5" SATA + 1× M.2 NVMe'],
            ['CPU', 'AMD Ryzen 7 Pro 7745 (8-core, 3.8–5.3 GHz)'],
            ['Networking', '2× 10GbE, 2× 1GbE'],
            ['Memory', '16GB ECC DDR5-4800 UDIMM, up to 192GB'],
            ['Max internal raw', '288 TB'],
            ['USB', '4× USB 3.2 Gen 1 Type-A'],
            ['Form factor', 'Rackmount'],
            ['Warranty', '5 Years']
        ]
    },
    {
        id: 'asustor-as7224rdx', brand: 'asustor', cat: 'nas', isNew: true, icon: 'ph-hard-drives',
        img: 'assets/products/asustor-as7224rdx.webp', imgSize: [355, 112],
        name: 'ASUSTOR Lockerstor 24R Pro Gen2 (AS7224RDX)',
        summary: '24-bay rackmount NAS with AMD Ryzen 7 PRO and ECC DDR5 for high-capacity business storage.',
        specs: [
            ['Drive bays', '24× 3.5"/2.5" SATA + 1× M.2 NVMe'],
            ['CPU', 'AMD Ryzen 7 Pro 7745 (8-core, 3.8–5.3 GHz)'],
            ['Networking', '2× 10GbE, 2× 1GbE'],
            ['Memory', '16GB ECC DDR5-4800 UDIMM, up to 192GB'],
            ['Max internal raw', '432 TB'],
            ['USB', '4× USB 3.2 Gen 1 Type-A'],
            ['Form factor', 'Rackmount'],
            ['Warranty', '5 Years']
        ]
    },
    {
        id: 'asustor-as5004u', brand: 'asustor', cat: 'nas', icon: 'ph-plus-square',
        img: 'assets/products/asustor-as5004u.webp', imgSize: [395, 357],
        name: 'ASUSTOR Xpanstor 4 (AS5004U)',
        summary: '4-bay USB-C expansion enclosure that adds capacity to an ASUSTOR NAS without downtime.',
        specs: [
            ['Drive bays', '4× 3.5"/2.5" SATA'],
            ['Interface', 'USB 3.2 Gen 2 Type-C (10 Gbps)'],
            ['Features', 'Plug-and-play online expansion, smart power sync, MyArchive'],
            ['Use case', 'Capacity expansion for desktop NAS']
        ]
    },
    {
        id: 'asustor-as6004u', brand: 'asustor', cat: 'nas', icon: 'ph-plus-square',
        img: 'assets/products/asustor-as6004u.webp', imgSize: [316, 378],
        name: 'ASUSTOR AS6004U Expansion Unit',
        summary: '4-bay USB expansion unit; supported NAS models connect up to three for extra capacity.',
        specs: [
            ['Drive bays', '4× 3.5"/2.5" SATA'],
            ['Interface', 'USB 3.2 Gen 1 with locking cable bracket'],
            ['Features', 'Online expansion, smart power sync, MyArchive cold backup'],
            ['Use case', 'Capacity expansion for desktop NAS']
        ]
    },
    {
        id: 'asustor-ax7012r', brand: 'asustor', cat: 'nas', icon: 'ph-hard-drives',
        img: 'assets/products/asustor-ax7012r.webp', imgSize: [720, 441],
        name: 'ASUSTOR Xpanstor 12R (AX7012R)',
        summary: '12-bay 2U SAS/SATA JBOD expansion unit for ASUSTOR rackmount NAS.',
        specs: [
            ['Drive bays', '12× SAS/SATA'],
            ['Interface', '4× Mini-SAS HD (SFF-8644)'],
            ['Power', '650 W redundant power supplies'],
            ['Form factor', '2U rackmount, hot-swappable fans']
        ]
    },
    {
        id: 'asustor-as-sas8e', brand: 'asustor', cat: 'nas', icon: 'ph-cpu',
        name: 'ASUSTOR AS-SAS8e SAS HBA',
        summary: 'SAS-3 host bus adapter (Broadcom HBA 9500-8e) for connecting Xpanstor 12R expansion units.',
        specs: [
            ['Controller', 'Broadcom HBA 9500-8e'],
            ['Interface', 'SAS-3, 12 Gb/s, full duplex'],
            ['Management', 'ADM Storage Manager'],
            ['Use case', '24/7 enterprise expansion']
        ]
    },

    /* ---------------- ASUSTOR accessories ---------------- */
    {
        id: 'asustor-as-u2-5g2', brand: 'asustor', cat: 'nas-accessories', icon: 'ph-plugs-connected',
        img: 'assets/products/asustor-as-u2-5g2.webp', imgSize: [500, 320],
        name: 'ASUSTOR AS-U2.5G2 USB-C 2.5GbE Adapter',
        summary: 'Compact USB-C to 2.5GbE adapter with aluminium housing; adds 2.5-Gigabit Ethernet to a NAS, laptop or desktop.',
        specs: [
            ['Interface', 'USB Type-C, Type-A adapter included'],
            ['Port', '1× 2.5GBASE-T RJ45 (2.5G/1G/100M)'],
            ['Controller', 'Realtek RTL8156B'],
            ['Housing', 'Aluminium, 33 g'],
            ['Compatibility', 'ASUSTOR ADM 3.5 and above, Windows, macOS, Linux']
        ]
    },
    {
        id: 'asustor-as-u2-5g', brand: 'asustor', cat: 'nas-accessories', icon: 'ph-plugs-connected',
        img: 'assets/products/asustor-as-u2-5g.webp', imgSize: [193, 144],
        name: 'ASUSTOR AS-U2.5G USB-C 2.5GbE Adapter',
        summary: 'USB-C to 2.5GbE adapter that upgrades a NAS, laptop or desktop to 2.5-Gigabit Ethernet.',
        specs: [
            ['Interface', 'USB Type-C (Type-A adapter sold separately)'],
            ['Port', '1× 2.5GBASE-T RJ45 (2.5G/1G/100M)'],
            ['Weight', '49 g'],
            ['Power', 'USB bus powered'],
            ['Compatibility', 'ASUSTOR ADM 3.4 and above, Windows, macOS, Linux']
        ]
    },
    {
        id: 'asustor-as-t10g3', brand: 'asustor', cat: 'nas-accessories', icon: 'ph-network',
        img: 'assets/products/asustor-as-t10g3.webp', imgSize: [720, 680],
        name: 'ASUSTOR AS-T10G3 10GbE + M.2 NVMe PCIe Card',
        summary: 'PCIe 3.0 x4 card combining a 10GbE RJ45 port with two M.2 NVMe SSD slots for compatible ASUSTOR NAS.',
        specs: [
            ['Controller', 'Marvell AQC113 10GbE'],
            ['Port', '1× RJ45, 10G/5G/2.5G/1G/100M'],
            ['SSD slots', '2× M.2 NVMe'],
            ['Interface', 'PCIe 3.0 x4'],
            ['Features', '16K jumbo frames, checksum offload, VLAN tagging and QoS']
        ]
    },
    {
        id: 'asustor-as-t10g2', brand: 'asustor', cat: 'nas-accessories', icon: 'ph-network',
        img: 'assets/products/asustor-as-t10g2.webp', imgSize: [183, 221],
        name: 'ASUSTOR AS-T10G2 10GbE PCIe Network Card',
        summary: 'Value 10GbE RJ45 network card (Marvell AQC107) for ASUSTOR NAS, PCs and servers.',
        specs: [
            ['Controller', 'Marvell AQC107'],
            ['Port', '1× RJ45, 10G/5G/2.5G/1G/100M'],
            ['Interface', 'PCIe'],
            ['Features', '16K jumbo frames, checksum offload, 802.1Q VLAN and QoS'],
            ['Compatibility', 'ASUSTOR ADM 3.5.6+, Windows, macOS, Linux, VMware ESXi']
        ]
    },
    {
        id: 'asustor-asw209x', brand: 'asustor', cat: 'nas-accessories', icon: 'ph-tree-structure',
        img: 'assets/products/asustor-asw209x.webp', imgSize: [526, 151],
        name: 'ASUSTOR Switch\'nstor 9 Gen2 (ASW209X)',
        summary: 'Fanless unmanaged switch with eight 2.5GbE RJ45 ports and one 10GbE SFP+ uplink.',
        specs: [
            ['Ports', '8× 2.5GbE RJ45 + 1× 10GbE SFP+'],
            ['Switching capacity', 'Up to 60 Gbps'],
            ['Management', 'Unmanaged, plug and play'],
            ['Cooling', 'Silent, fanless'],
            ['Housing', 'Metal, wall-mountable']
        ]
    },
    {
        id: 'asustor-asw205t', brand: 'asustor', cat: 'nas-accessories', icon: 'ph-tree-structure',
        img: 'assets/products/asustor-asw205t.webp', imgSize: [561, 343],
        name: 'ASUSTOR ASW205T 5-Port 2.5GbE Switch',
        summary: 'Fanless unmanaged switch with five 2.5GbE ports for home and small-office networks.',
        specs: [
            ['Ports', '5× 2.5GbE RJ45'],
            ['Total bandwidth', '25 Gbps'],
            ['Controller', 'Realtek 2.5GbE'],
            ['Cooling', 'Silent, fanless'],
            ['Housing', 'Metal, wall-mountable']
        ]
    },
    {
        id: 'asustor-as-48gecd5-u', brand: 'asustor', cat: 'nas-accessories', icon: 'ph-memory',
        img: 'assets/products/asustor-as-48gecd5-u.webp', imgSize: [300, 73],
        name: 'ASUSTOR AS-48GECD5-U 48GB ECC DDR5 UDIMM',
        summary: '48GB ECC DDR5 UDIMM memory module for ASUSTOR AS7212RDX / AS7216RDX.',
        specs: [
            ['Capacity', '48 GB'],
            ['Type', 'DDR5 ECC'],
            ['Form factor', 'UDIMM, 288-pin'],
            ['Compatible with', 'AS7212RDX / AS7216RDX']
        ]
    },
    {
        id: 'asustor-as-16gecd5-u', brand: 'asustor', cat: 'nas-accessories', icon: 'ph-memory',
        img: 'assets/products/asustor-as-16gecd5-u.webp', imgSize: [300, 75],
        name: 'ASUSTOR AS-16GECD5-U 16GB ECC DDR5 UDIMM',
        summary: '16GB ECC DDR5 UDIMM memory module for ASUSTOR AS7212RDX / AS7216RDX.',
        specs: [
            ['Capacity', '16 GB'],
            ['Type', 'DDR5 ECC'],
            ['Form factor', 'UDIMM, 288-pin'],
            ['Compatible with', 'AS7212RDX / AS7216RDX']
        ]
    },
    {
        id: 'asustor-as-32gecd5-u', brand: 'asustor', cat: 'nas-accessories', icon: 'ph-memory',
        img: 'assets/products/asustor-as-32gecd5-u.webp', imgSize: [300, 75],
        name: 'ASUSTOR AS-32GECD5-U 32GB ECC DDR5 UDIMM',
        summary: '32GB ECC DDR5 UDIMM memory module for ASUSTOR AS7212RDX / AS7216RDX.',
        specs: [
            ['Capacity', '32 GB'],
            ['Type', 'DDR5 ECC'],
            ['Form factor', 'UDIMM, 288-pin'],
            ['Compatible with', 'AS7212RDX / AS7216RDX']
        ]
    },
    {
        id: 'asustor-as-48gd5', brand: 'asustor', cat: 'nas-accessories', icon: 'ph-memory',
        img: 'assets/products/asustor-as-48gd5.webp', imgSize: [224, 103],
        name: 'ASUSTOR AS-48GD5 48GB DDR5 SO-DIMM',
        summary: '48GB DDR5 SO-DIMM memory module for ASUSTOR AS68 / FS68 Series.',
        specs: [
            ['Capacity', '48 GB'],
            ['Type', 'DDR5'],
            ['Form factor', 'SO-DIMM, 262-pin'],
            ['Compatible with', 'AS68 / FS68 Series'],
            ['Warranty', '3 years']
        ]
    },
    {
        id: 'asustor-as-32gd5', brand: 'asustor', cat: 'nas-accessories', icon: 'ph-memory',
        img: 'assets/products/asustor-as-32gd5.webp', imgSize: [224, 103],
        name: 'ASUSTOR AS-32GD5 32GB DDR5 SO-DIMM',
        summary: '32GB DDR5 SO-DIMM memory module for ASUSTOR AS68 / FS68 Series.',
        specs: [
            ['Capacity', '32 GB'],
            ['Type', 'DDR5'],
            ['Form factor', 'SO-DIMM, 262-pin'],
            ['Compatible with', 'AS68 / FS68 Series'],
            ['Warranty', '3 years']
        ]
    },
    {
        id: 'asustor-as-16gd5', brand: 'asustor', cat: 'nas-accessories', icon: 'ph-memory',
        img: 'assets/products/asustor-as-16gd5.webp', imgSize: [224, 103],
        name: 'ASUSTOR AS-16GD5 16GB DDR5 SO-DIMM',
        summary: '16GB DDR5 SO-DIMM memory module for ASUSTOR AS68 / FS68 Series.',
        specs: [
            ['Capacity', '16 GB'],
            ['Type', 'DDR5'],
            ['Form factor', 'SO-DIMM, 262-pin'],
            ['Compatible with', 'AS68 / FS68 Series'],
            ['Warranty', '3 years']
        ]
    },
    {
        id: 'asustor-as-8gd5', brand: 'asustor', cat: 'nas-accessories', icon: 'ph-memory',
        img: 'assets/products/asustor-as-8gd5.webp', imgSize: [224, 103],
        name: 'ASUSTOR AS-8GD5 8GB DDR5 SO-DIMM',
        summary: '8GB DDR5 SO-DIMM memory module for ASUSTOR AS68 / FS68 Series.',
        specs: [
            ['Capacity', '8 GB'],
            ['Type', 'DDR5'],
            ['Form factor', 'SO-DIMM, 262-pin'],
            ['Compatible with', 'AS68 / FS68 Series'],
            ['Warranty', '3 years']
        ]
    },
    {
        id: 'asustor-as-48gecd5', brand: 'asustor', cat: 'nas-accessories', icon: 'ph-memory',
        img: 'assets/products/asustor-as-48gecd5.webp', imgSize: [497, 217],
        name: 'ASUSTOR AS-48GECD5 48GB ECC DDR5 SO-DIMM',
        summary: '48GB ECC DDR5 SO-DIMM memory module for ASUSTOR AS68 / FS68 Series.',
        specs: [
            ['Capacity', '48 GB'],
            ['Type', 'DDR5 ECC'],
            ['Form factor', 'SO-DIMM, 262-pin'],
            ['Compatible with', 'AS68 / FS68 Series'],
            ['Warranty', '3 years']
        ]
    },
    {
        id: 'asustor-as-32gecd5', brand: 'asustor', cat: 'nas-accessories', icon: 'ph-memory',
        img: 'assets/products/asustor-as-32gecd5.webp', imgSize: [228, 99],
        name: 'ASUSTOR AS-32GECD5 32GB ECC DDR5 SO-DIMM',
        summary: '32GB ECC DDR5 SO-DIMM memory module for ASUSTOR AS68 / FS68 Series.',
        specs: [
            ['Capacity', '32 GB'],
            ['Type', 'DDR5 ECC'],
            ['Form factor', 'SO-DIMM, 262-pin'],
            ['Compatible with', 'AS68 / FS68 Series'],
            ['Warranty', '3 years']
        ]
    },
    {
        id: 'asustor-as-16gecd5', brand: 'asustor', cat: 'nas-accessories', icon: 'ph-memory',
        img: 'assets/products/asustor-as-16gecd5.webp', imgSize: [224, 99],
        name: 'ASUSTOR AS-16GECD5 16GB ECC DDR5 SO-DIMM',
        summary: '16GB ECC DDR5 SO-DIMM memory module for ASUSTOR AS68 / FS68 Series.',
        specs: [
            ['Capacity', '16 GB'],
            ['Type', 'DDR5 ECC'],
            ['Form factor', 'SO-DIMM, 262-pin'],
            ['Compatible with', 'AS68 / FS68 Series'],
            ['Warranty', '3 years']
        ]
    },
    {
        id: 'asustor-as-32gecd4-u', brand: 'asustor', cat: 'nas-accessories', icon: 'ph-memory',
        img: 'assets/products/asustor-as-32gecd4-u.webp', imgSize: [365, 88],
        name: 'ASUSTOR AS-32GECD4-U 32GB ECC DDR4 UDIMM',
        summary: '32GB ECC DDR4 UDIMM memory module for ASUSTOR NAS.',
        specs: [
            ['Capacity', '32 GB'],
            ['Type', 'DDR4 ECC'],
            ['Form factor', 'UDIMM, 288-pin']
        ]
    },
    {
        id: 'asustor-as-16gecd4-u', brand: 'asustor', cat: 'nas-accessories', icon: 'ph-memory',
        img: 'assets/products/asustor-as-16gecd4-u.webp', imgSize: [365, 88],
        name: 'ASUSTOR AS-16GECD4-U 16GB ECC DDR4 UDIMM',
        summary: '16GB ECC DDR4 UDIMM memory module for ASUSTOR NAS.',
        specs: [
            ['Capacity', '16 GB'],
            ['Type', 'DDR4 ECC'],
            ['Form factor', 'UDIMM, 288-pin']
        ]
    },
    {
        id: 'asustor-as-8gecd4-u', brand: 'asustor', cat: 'nas-accessories', icon: 'ph-memory',
        img: 'assets/products/asustor-as-8gecd4-u.webp', imgSize: [365, 88],
        name: 'ASUSTOR AS-8GECD4-U 8GB ECC DDR4 UDIMM',
        summary: '8GB ECC DDR4 UDIMM memory module for ASUSTOR NAS.',
        specs: [
            ['Capacity', '8 GB'],
            ['Type', 'DDR4 ECC'],
            ['Form factor', 'UDIMM, 288-pin']
        ]
    },
    {
        id: 'asustor-as-32gecd4', brand: 'asustor', cat: 'nas-accessories', icon: 'ph-memory',
        img: 'assets/products/asustor-as-32gecd4.webp', imgSize: [320, 143],
        name: 'ASUSTOR AS-32GECD4 32GB ECC DDR4 SO-DIMM',
        summary: '32GB ECC DDR4 SO-DIMM memory module for ASUSTOR NAS.',
        specs: [
            ['Capacity', '32 GB'],
            ['Type', 'DDR4 ECC'],
            ['Form factor', 'SO-DIMM, 260-pin']
        ]
    },
    {
        id: 'asustor-as-16gecd4', brand: 'asustor', cat: 'nas-accessories', icon: 'ph-memory',
        img: 'assets/products/asustor-as-16gecd4.webp', imgSize: [316, 137],
        name: 'ASUSTOR AS-16GECD4 16GB ECC DDR4 SO-DIMM',
        summary: '16GB ECC DDR4 SO-DIMM memory module for ASUSTOR AS7110T / AS6508T / AS6510T.',
        specs: [
            ['Capacity', '16 GB'],
            ['Type', 'DDR4 ECC'],
            ['Form factor', 'SO-DIMM, 260-pin'],
            ['Compatible with', 'AS7110T / AS6508T / AS6510T'],
            ['Warranty', '5 years']
        ]
    },
    {
        id: 'asustor-as-8gecd4', brand: 'asustor', cat: 'nas-accessories', icon: 'ph-memory',
        img: 'assets/products/asustor-as-8gecd4.webp', imgSize: [720, 311],
        name: 'ASUSTOR AS-8GECD4 8GB ECC DDR4 SO-DIMM',
        summary: '8GB ECC DDR4 SO-DIMM memory module for ASUSTOR AS7110T.',
        specs: [
            ['Capacity', '8 GB'],
            ['Type', 'DDR4 ECC'],
            ['Form factor', 'SO-DIMM, 260-pin'],
            ['Compatible with', 'AS7110T'],
            ['Warranty', '5 years']
        ]
    },
    {
        id: 'asustor-as-8gd4', brand: 'asustor', cat: 'nas-accessories', icon: 'ph-memory',
        img: 'assets/products/asustor-as-8gd4.webp', imgSize: [720, 311],
        name: 'ASUSTOR AS-8GD4 8GB DDR4 SO-DIMM',
        summary: '8GB DDR4 SO-DIMM memory module for ASUSTOR AS65 Series / AS54 Series / AS67 Series / FS67 Series.',
        specs: [
            ['Capacity', '8 GB'],
            ['Type', 'DDR4'],
            ['Form factor', 'SO-DIMM, 260-pin'],
            ['Compatible with', 'AS65 Series / AS54 Series / AS67 Series / FS67 Series']
        ]
    },
    {
        id: 'asustor-as-4gd4', brand: 'asustor', cat: 'nas-accessories', icon: 'ph-memory',
        img: 'assets/products/asustor-as-4gd4.webp', imgSize: [720, 311],
        name: 'ASUSTOR AS-4GD4 4GB DDR4 SO-DIMM',
        summary: '4GB DDR4 SO-DIMM memory module for ASUSTOR AS5202T / AS5304T / AS54 Series / AS66 Series / AS67 Series / FS67 Series.',
        specs: [
            ['Capacity', '4 GB'],
            ['Type', 'DDR4'],
            ['Form factor', 'SO-DIMM, 260-pin'],
            ['Compatible with', 'AS5202T / AS5304T / AS54 Series / AS66 Series / AS67 Series / FS67 Series'],
            ['Warranty', '3 years']
        ]
    },
    {
        id: 'asustor-as-2gd4', brand: 'asustor', cat: 'nas-accessories', icon: 'ph-memory',
        img: 'assets/products/asustor-as-2gd4.webp', imgSize: [720, 310],
        name: 'ASUSTOR AS-2GD4 2GB DDR4 SO-DIMM',
        summary: '2GB DDR4 SO-DIMM memory module for ASUSTOR NAS.',
        specs: [
            ['Capacity', '2 GB'],
            ['Type', 'DDR4'],
            ['Form factor', 'SO-DIMM, 260-pin']
        ]
    },
    {
        id: 'asustor-as-32gd4', brand: 'asustor', cat: 'nas-accessories', icon: 'ph-memory',
        img: 'assets/products/asustor-as-32gd4.webp', imgSize: [320, 143],
        name: 'ASUSTOR AS-32GD4 32GB DDR4 SO-DIMM',
        summary: '32GB DDR4 SO-DIMM memory module for ASUSTOR AS65 Series.',
        specs: [
            ['Capacity', '32 GB'],
            ['Type', 'DDR4'],
            ['Form factor', 'SO-DIMM, 260-pin'],
            ['Compatible with', 'AS65 Series']
        ]
    },
    {
        id: 'asustor-as-16gd4', brand: 'asustor', cat: 'nas-accessories', icon: 'ph-memory',
        img: 'assets/products/asustor-as-16gd4.webp', imgSize: [720, 311],
        name: 'ASUSTOR AS-16GD4 16GB DDR4 SO-DIMM',
        summary: '16GB DDR4 SO-DIMM memory module for ASUSTOR AS65 Series.',
        specs: [
            ['Capacity', '16 GB'],
            ['Type', 'DDR4'],
            ['Form factor', 'SO-DIMM, 260-pin'],
            ['Compatible with', 'AS65 Series']
        ]
    },
    {
        id: 'asustor-as-exfat', brand: 'asustor', cat: 'nas-accessories', icon: 'ph-key',
        img: 'assets/products/asustor-as-exfat.webp', imgSize: [500, 395],
        name: 'ASUSTOR AS-exFAT exFAT Driver License',
        summary: 'License key that enables the exFAT driver on ASUSTOR NAS, for reading and writing exFAT drives.',
        specs: [
            ['Type', 'Digital license'],
            ['Enables', 'exFAT file system driver'],
            ['ADM version', 'ADM 3.x or lower']
        ]
    },
    {
        id: 'asustor-as-scl04', brand: 'asustor', cat: 'nas-accessories', icon: 'ph-security-camera',
        img: 'assets/products/asustor-as-scl04.webp', imgSize: [499, 388],
        name: 'ASUSTOR AS-SCL04 Surveillance Center 4-Camera License',
        summary: 'Four-camera license for ASUSTOR Surveillance Center, adding four IP cameras to a NAS.',
        specs: [
            ['Type', 'Digital license'],
            ['Cameras', '4'],
            ['Software', 'ASUSTOR Surveillance Center'],
            ['Compatible with', 'All ASUSTOR NAS models']
        ]
    },
    {
        id: 'asustor-as-scl01', brand: 'asustor', cat: 'nas-accessories', icon: 'ph-security-camera',
        img: 'assets/products/asustor-as-scl01.webp', imgSize: [500, 388],
        name: 'ASUSTOR AS-SCL01 Surveillance Center 1-Camera License',
        summary: 'Single-camera license for ASUSTOR Surveillance Center, adding one IP camera to a NAS.',
        specs: [
            ['Type', 'Digital license'],
            ['Cameras', '1'],
            ['Software', 'ASUSTOR Surveillance Center'],
            ['Compatible with', 'All ASUSTOR NAS models']
        ]
    },
    {
        id: 'asustor-as-hk1', brand: 'asustor', cat: 'nas-accessories', icon: 'ph-thermometer',
        img: 'assets/products/asustor-as-hk1.webp', imgSize: [442, 292],
        name: 'ASUSTOR AS-HK1 M.2 SSD Heatsink',
        summary: 'M.2 SSD heatsink with thermal pad for Flashstor FS67 / FS68 and the AS-T10G3 card.',
        specs: [
            ['Type', 'M.2 heatsink with thermal pad'],
            ['Compatible with', 'FS67 / FS68 series, AS-T10G3']
        ]
    },
    {
        id: 'asustor-as-120w', brand: 'asustor', cat: 'nas-accessories', icon: 'ph-plug',
        img: 'assets/products/asustor-as-120w.webp', imgSize: [468, 340],
        name: 'ASUSTOR AS-120W 120W Power Adapter',
        summary: 'Replacement 120W power adapter for the ASUSTOR FS6812X.',
        specs: [
            ['Output', '120 W'],
            ['Type', 'External power adapter'],
            ['Compatible with', 'FS6812X'],
            ['Warranty', '1 year']
        ]
    },
    {
        id: 'asustor-as-90w', brand: 'asustor', cat: 'nas-accessories', icon: 'ph-plug',
        img: 'assets/products/asustor-as-90w.webp', imgSize: [500, 296],
        name: 'ASUSTOR AS-90W 90W Power Adapter',
        summary: 'Replacement 90W power adapter for ASUSTOR NAS and expansion units.',
        specs: [
            ['Output', '90 W'],
            ['Type', 'External power adapter'],
            ['Compatible with', 'AS5004T / AS5104T / AS6104T / AS6204T / AS1004T / AS1004T v2 / AS3104T / AS3104T / AS3204T / AS3204T v2 / AS4004T / AS6404T / AS6004U / AS5304T / AS6604T / AS6704T / FS6712X / AS5404T / AS5004U / AS3304T v2 / AS6804T / FS6806X / AS1204T'],
            ['Warranty', '1 year']
        ]
    },
    {
        id: 'asustor-as-65w', brand: 'asustor', cat: 'nas-accessories', icon: 'ph-plug',
        img: 'assets/products/asustor-as-65w.webp', imgSize: [400, 281],
        name: 'ASUSTOR AS-65W 65W Power Adapter',
        summary: 'Replacement 65W power adapter for ASUSTOR NAS.',
        specs: [
            ['Output', '65 W'],
            ['Type', 'External power adapter'],
            ['Compatible with', 'AS-602T / AS-302T / AS-202TE / AS-202T / AS5002T / AS5102T / AS6102T / AS6202T / AS1002T / AS1002T v2 / AS3102T / AS3102T v2 / AS3202T / AS4002T / AS6302T / AS5202T / AS6602T / AS6702T / FS6706T / AS1102TL / AS3302T v2 / AS1202T'],
            ['Warranty', '1 year']
        ]
    },
    {
        id: 'asustor-as-250w', brand: 'asustor', cat: 'nas-accessories', icon: 'ph-plug',
        img: 'assets/products/asustor-as-250w.webp', imgSize: [416, 369],
        name: 'ASUSTOR AS-250W 250W Flex Power Supply',
        summary: 'Replacement 250W Flex ATX power supply for ASUSTOR NAS.',
        specs: [
            ['Output', '250 W'],
            ['Type', 'Internal Flex power supply'],
            ['Compatible with', 'AS-204RS / AS-604T / AS-606T / AS-608T / AS7004T / AS5008T / AS5010T / AS5108T / AS5110T / AS6204RS / AS6208T / AS6210T / AS6508T / AS6510T / AS6504RS / AS6706T / AS6806T / AS6808T / AS6810T'],
            ['Warranty', '1 year']
        ]
    },
    {
        id: 'asustor-as-tray-s', brand: 'asustor', cat: 'nas-accessories', icon: 'ph-hard-drive',
        img: 'assets/products/asustor-as-tray-s.webp', imgSize: [461, 286],
        name: 'ASUSTOR AS-Tray-S HDD Tray',
        summary: 'Spare black drive tray for 2.5" and 3.5" drives in ASUSTOR NAS.',
        specs: [
            ['Type', 'Drive tray'],
            ['Drive size', '2.5" and 3.5"'],
            ['Compatible with', 'AS40 Series / AS5202T / AS5304T / AS54 Series / AS5004U / AS3302T v2 / AS3304T v2'],
            ['Dimensions', '167.4 x116x 28 (mm)'],
            ['Weight', '67g']
        ]
    },
    {
        id: 'asustor-as-traylock', brand: 'asustor', cat: 'nas-accessories', icon: 'ph-lock-key',
        img: 'assets/products/asustor-as-traylock.webp', imgSize: [500, 271],
        name: 'ASUSTOR AS-TrayLock HDD Tray Lock',
        summary: 'Lock for ASUSTOR drive trays, to keep 2.5" and 3.5" drives from being removed.',
        specs: [
            ['Type', 'Drive tray lock'],
            ['Drive size', '2.5" and 3.5"'],
            ['Compatible with', 'AS-6 / AS-2 / AS-3 / AS50 / AS61 Series / AS6302T / AS70 / AS51 Series / AS62 Series / AS6404T / AS6004U / AS65 / AS66 / AS71 Series / AS67 / AS68 / AS72 Series'],
            ['Dimensions', '106.7x184x27.5 (mm)'],
            ['Weight', '127g']
        ]
    },
    {
        id: 'asustor-as-tray', brand: 'asustor', cat: 'nas-accessories', icon: 'ph-hard-drive',
        img: 'assets/products/asustor-as-tray.webp', imgSize: [417, 267],
        name: 'ASUSTOR AS-Tray HDD Tray',
        summary: 'Spare black drive tray for 2.5" and 3.5" drives in ASUSTOR NAS.',
        specs: [
            ['Type', 'Drive tray'],
            ['Drive size', '2.5" and 3.5"']
        ]
    },
    {
        id: 'asustor-as-rail', brand: 'asustor', cat: 'nas-accessories', icon: 'ph-rows',
        img: 'assets/products/asustor-as-rail.webp', imgSize: [431, 295],
        name: 'ASUSTOR AS-Rail Rack Rail Kit',
        summary: 'Rail kit for mounting ASUSTOR 1U, 2U and 3U rackmount NAS in a server rack.',
        specs: [
            ['Type', 'Rack rail kit'],
            ['Fits', '1U / 2U / 3U ASUSTOR rackmount systems'],
            ['Compatible with', 'AS-604RD / AS-604RS / AS-609RD / AS-609RS / AS-204RS / AS7009RD / AS7009RDX / AS7012RD / AS7012RDX / AS6204RD / AS6204RS / AS6212RD / AS7112RDX / AS7116RDX / AS72']
        ]
    },
    {
        id: 'asustor-as-hdd35s48', brand: 'asustor', cat: 'nas-accessories', icon: 'ph-wrench',
        img: 'assets/products/asustor-as-hdd35s48.webp', imgSize: [281, 491],
        name: 'ASUSTOR AS-HDD35S48 3.5" HDD Screw Pack (48 pcs)',
        summary: 'Pack of 48 screws for mounting 3.5" drives in ASUSTOR NAS trays.',
        specs: [
            ['Contents', '48 screws'],
            ['Drive size', '3.5"'],
            ['Compatible with', 'AS-6 / AS-2 / AS-3 / AS50 / 51 / 61 / 62 / 63 / 64 / 70 / 65 / 71 / AS67 / AS68 / AS72 series'],
            ['Screw type', '#6-32L6, F-head Dia=5.0mm, Philips, Ni plated']
        ]
    },
    {
        id: 'asustor-as-hdd25s48', brand: 'asustor', cat: 'nas-accessories', icon: 'ph-wrench',
        img: 'assets/products/asustor-as-hdd25s48.webp', imgSize: [285, 467],
        name: 'ASUSTOR AS-HDD25S48 2.5" HDD Screw Pack (48 pcs)',
        summary: 'Pack of 48 screws for mounting 2.5" drives in ASUSTOR NAS trays.',
        specs: [
            ['Contents', '48 screws'],
            ['Drive size', '2.5"'],
            ['Compatible with', 'AS-6 / AS-2 / AS-3 / AS40 / AS50 / AS51 / AS52 / AS53 / AS54 / AS61 / AS62 / AS63 / AS64 / AS70 / AS65 / AS66 / AS71 series / AS5004U / AS33 series / AS33 v2 series / AS68 / AS72'],
            ['Screw type', 'M3L4, F-head Dia=4.0mm, Philips, Ni plated']
        ]
    },
    {
        id: 'asustor-as-rc13', brand: 'asustor', cat: 'nas-accessories', icon: 'ph-television',
        img: 'assets/products/asustor-as-rc13.webp', imgSize: [119, 427],
        name: 'ASUSTOR AS-RC13 13-Key IR Remote Control',
        summary: '13-key infrared remote for controlling media playback on ASUSTOR NAS with HDMI output.',
        specs: [
            ['Type', '13 key IR Remote Control'],
            ['Connection', 'Infrared']
        ]
    },
    {
        id: 'asustor-as6-ram8g-1866', brand: 'asustor', cat: 'nas-accessories', icon: 'ph-memory',
        img: 'assets/products/asustor-as6-ram8g-1866.webp', imgSize: [228, 104],
        name: 'ASUSTOR AS6-RAM8G 8GB DDR3L-1866 SO-DIMM',
        summary: '8GB DDR3L-1866 SO-DIMM memory module for older ASUSTOR NAS models.',
        specs: [
            ['Capacity', '8 GB'],
            ['Type', 'DDR3L-1866'],
            ['Form factor', 'SO-DIMM, 204-pin'],
            ['Compatible with', 'Older ASUSTOR NAS models']
        ]
    },
    {
        id: 'asustor-as6-ram4g-1866', brand: 'asustor', cat: 'nas-accessories', icon: 'ph-memory',
        img: 'assets/products/asustor-as6-ram4g-1866.webp', imgSize: [471, 212],
        name: 'ASUSTOR AS6-RAM4G 4GB DDR3L-1866 SO-DIMM',
        summary: '4GB DDR3L-1866 SO-DIMM memory module for older ASUSTOR NAS models.',
        specs: [
            ['Capacity', '4 GB'],
            ['Type', 'DDR3L-1866'],
            ['Form factor', 'SO-DIMM, 204-pin'],
            ['Compatible with', 'Older ASUSTOR NAS models']
        ]
    },
    {
        id: 'asustor-as6-ram2g-1866', brand: 'asustor', cat: 'nas-accessories', icon: 'ph-memory',
        img: 'assets/products/asustor-as6-ram2g-1866.webp', imgSize: [216, 98],
        name: 'ASUSTOR AS6-RAM2G 2GB DDR3L-1866 SO-DIMM',
        summary: '2GB DDR3L-1866 SO-DIMM memory module for older ASUSTOR NAS models.',
        specs: [
            ['Capacity', '2 GB'],
            ['Type', 'DDR3L-1866'],
            ['Form factor', 'SO-DIMM, 204-pin'],
            ['Compatible with', 'Older ASUSTOR NAS models']
        ]
    },
    {
        id: 'asustor-as6-ram1g-1866', brand: 'asustor', cat: 'nas-accessories', icon: 'ph-memory',
        img: 'assets/products/asustor-as6-ram1g-1866.webp', imgSize: [215, 98],
        name: 'ASUSTOR AS6-RAM1G 1GB DDR3L-1866 SO-DIMM',
        summary: '1GB DDR3L-1866 SO-DIMM memory module for older ASUSTOR NAS models.',
        specs: [
            ['Capacity', '1 GB'],
            ['Type', 'DDR3L-1866'],
            ['Form factor', 'SO-DIMM, 204-pin'],
            ['Compatible with', 'Older ASUSTOR NAS models']
        ]
    },
    {
        id: 'asustor-as6-ram8g-1600', brand: 'asustor', cat: 'nas-accessories', icon: 'ph-memory',
        img: 'assets/products/asustor-as6-ram8g-1600.webp', imgSize: [500, 226],
        name: 'ASUSTOR AS6-RAM8G 8GB DDR3L-1600 SO-DIMM',
        summary: '8GB DDR3L-1600 SO-DIMM memory module for older ASUSTOR NAS models.',
        specs: [
            ['Capacity', '8 GB'],
            ['Type', 'DDR3L-1600'],
            ['Form factor', 'SO-DIMM, 204-pin'],
            ['Compatible with', 'Older ASUSTOR NAS models']
        ]
    },
    {
        id: 'asustor-as6-ram4g-1600', brand: 'asustor', cat: 'nas-accessories', icon: 'ph-memory',
        img: 'assets/products/asustor-as6-ram4g-1600.webp', imgSize: [500, 227],
        name: 'ASUSTOR AS6-RAM4G 4GB DDR3L-1600 SO-DIMM',
        summary: '4GB DDR3L-1600 SO-DIMM memory module for older ASUSTOR NAS models.',
        specs: [
            ['Capacity', '4 GB'],
            ['Type', 'DDR3L-1600'],
            ['Form factor', 'SO-DIMM, 204-pin'],
            ['Compatible with', 'Older ASUSTOR NAS models']
        ]
    },
    {
        id: 'asustor-as6-ram2g-1600', brand: 'asustor', cat: 'nas-accessories', icon: 'ph-memory',
        img: 'assets/products/asustor-as6-ram2g-1600.webp', imgSize: [500, 227],
        name: 'ASUSTOR AS6-RAM2G 2GB DDR3L-1600 SO-DIMM',
        summary: '2GB DDR3L-1600 SO-DIMM memory module for older ASUSTOR NAS models.',
        specs: [
            ['Capacity', '2 GB'],
            ['Type', 'DDR3L-1600'],
            ['Form factor', 'SO-DIMM, 204-pin'],
            ['Compatible with', 'Older ASUSTOR NAS models']
        ]
    },
    {
        id: 'asustor-as6-ram1g-1600', brand: 'asustor', cat: 'nas-accessories', icon: 'ph-memory',
        img: 'assets/products/asustor-as6-ram1g-1600.webp', imgSize: [500, 227],
        name: 'ASUSTOR AS6-RAM1G 1GB DDR3L-1600 SO-DIMM',
        summary: '1GB DDR3L-1600 SO-DIMM memory module for older ASUSTOR NAS models.',
        specs: [
            ['Capacity', '1 GB'],
            ['Type', 'DDR3L-1600'],
            ['Form factor', 'SO-DIMM, 204-pin'],
            ['Compatible with', 'Older ASUSTOR NAS models']
        ]
    },
    {
        id: 'asustor-as7r-ram8g', brand: 'asustor', cat: 'nas-accessories', icon: 'ph-memory',
        img: 'assets/products/asustor-as7r-ram8g.webp', imgSize: [500, 121],
        name: 'ASUSTOR AS7R-RAM8G 8GB DDR3-1600 UDIMM',
        summary: '8GB DDR3-1600 UDIMM memory module for older ASUSTOR NAS models.',
        specs: [
            ['Capacity', '8 GB'],
            ['Type', 'DDR3-1600'],
            ['Form factor', 'UDIMM, 240-pin'],
            ['Compatible with', 'Older ASUSTOR NAS models']
        ]
    },
    {
        id: 'asustor-as7r-ram8gec', brand: 'asustor', cat: 'nas-accessories', icon: 'ph-memory',
        img: 'assets/products/asustor-as7r-ram8gec.webp', imgSize: [500, 117],
        name: 'ASUSTOR AS7R-RAM8GEC 8GB ECC DDR3-1600 UDIMM',
        summary: '8GB ECC DDR3-1600 UDIMM memory module for older ASUSTOR NAS models.',
        specs: [
            ['Capacity', '8 GB'],
            ['Type', 'DDR3-1600 ECC'],
            ['Form factor', 'UDIMM, 240-pin'],
            ['Compatible with', 'Older ASUSTOR NAS models']
        ]
    },
    {
        id: 'asustor-as7r-ram4g', brand: 'asustor', cat: 'nas-accessories', icon: 'ph-memory',
        img: 'assets/products/asustor-as7r-ram4g.webp', imgSize: [370, 86],
        name: 'ASUSTOR AS7R-RAM4G 4GB DDR3-1600 UDIMM',
        summary: '4GB DDR3-1600 UDIMM memory module for older ASUSTOR NAS models.',
        specs: [
            ['Capacity', '4 GB'],
            ['Type', 'DDR3-1600'],
            ['Form factor', 'UDIMM, 240-pin'],
            ['Compatible with', 'Older ASUSTOR NAS models']
        ]
    },
    {
        id: 'asustor-as7r-ram4gec', brand: 'asustor', cat: 'nas-accessories', icon: 'ph-memory',
        img: 'assets/products/asustor-as7r-ram4gec.webp', imgSize: [370, 86],
        name: 'ASUSTOR AS7R-RAM4GEC 4GB ECC DDR3-1600 UDIMM',
        summary: '4GB ECC DDR3-1600 UDIMM memory module for older ASUSTOR NAS models.',
        specs: [
            ['Capacity', '4 GB'],
            ['Type', 'DDR3-1600 ECC'],
            ['Form factor', 'UDIMM, 240-pin'],
            ['Compatible with', 'Older ASUSTOR NAS models']
        ]
    },
    {
        id: 'asustor-as7-ram8g', brand: 'asustor', cat: 'nas-accessories', icon: 'ph-memory',
        img: 'assets/products/asustor-as7-ram8g.webp', imgSize: [228, 104],
        name: 'ASUSTOR AS7-RAM8G 8GB DDR3-1600 SO-DIMM',
        summary: '8GB DDR3-1600 SO-DIMM memory module for older ASUSTOR NAS models.',
        specs: [
            ['Capacity', '8 GB'],
            ['Type', 'DDR3-1600'],
            ['Form factor', 'SO-DIMM, 204-pin'],
            ['Compatible with', 'Older ASUSTOR NAS models']
        ]
    },
    {
        id: 'asustor-as7-ram4g', brand: 'asustor', cat: 'nas-accessories', icon: 'ph-memory',
        img: 'assets/products/asustor-as7-ram4g.webp', imgSize: [228, 105],
        name: 'ASUSTOR AS7-RAM4G 4GB DDR3-1600 SO-DIMM',
        summary: '4GB DDR3-1600 SO-DIMM memory module for older ASUSTOR NAS models.',
        specs: [
            ['Capacity', '4 GB'],
            ['Type', 'DDR3-1600'],
            ['Form factor', 'SO-DIMM, 204-pin'],
            ['Compatible with', 'Older ASUSTOR NAS models']
        ]
    },
    {
        id: 'asustor-as7-ram2g', brand: 'asustor', cat: 'nas-accessories', icon: 'ph-memory',
        img: 'assets/products/asustor-as7-ram2g.webp', imgSize: [500, 227],
        name: 'ASUSTOR AS7-RAM2G 2GB DDR3-1600 SO-DIMM',
        summary: '2GB DDR3-1600 SO-DIMM memory module for older ASUSTOR NAS models.',
        specs: [
            ['Capacity', '2 GB'],
            ['Type', 'DDR3-1600'],
            ['Form factor', 'SO-DIMM, 204-pin'],
            ['Compatible with', 'Older ASUSTOR NAS models']
        ]
    }
];

// Pre-booking products are listed first everywhere (catalog, brand / category pages); the order is otherwise unchanged
window.PRODUCTS.sort((a, b) => (b.preorder ? 1 : 0) - (a.preorder ? 1 : 0));
