/*
 * Plan Man product catalog.
 * Specs summarised from public vendor product pages (NVIDIA, Supermicro, ASUS), Oct 2026.
 * Extended content for each product page lives in data/product-details.js.
 * Always confirm the final configuration and availability with the vendor before quoting.
 *
 * To add a product, copy an entry and edit it. Fields:
 *   id       unique slug
 *   brand    'nvidia' | 'supermicro' | 'asus'
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
    msi: 'MSI'
};

window.CATEGORIES = {
    'rack-scale': 'Rack-Scale AI Systems',
    'gpu-servers': 'GPU & AI Servers',
    'accelerators': 'Data Center GPUs',
    'networking': 'AI Networking',
    'servers': 'Rack & Multi-Node Servers',
    'storage': 'Storage',
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
    msi: 'assets/brands/msi.png'
};
// Optional dark-theme version of a brand logo (used when the normal one would not show on a dark background)
window.BRAND_LOGOS_DARK = {
    msi: 'assets/brands/msi-dark.png'
};
window.BRAND_LEADS = {
    nvidia: 'NVIDIA rack-scale systems, HGX platforms, data center GPUs, networking, DGX systems and AI software.',
    supermicro: 'Supermicro GPU servers, NVL72 SuperClusters, enterprise servers, storage and data center building blocks.',
    asus: 'ASUS AI PODs, GPU servers, rack and multi-node servers, storage, AI workstations and mini PCs.',
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
    }
];

// Pre-booking products are listed first everywhere (catalog, brand / category pages); the order is otherwise unchanged
window.PRODUCTS.sort((a, b) => (b.preorder ? 1 : 0) - (a.preorder ? 1 : 0));
