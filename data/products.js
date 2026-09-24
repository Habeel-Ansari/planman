/*
 * Plan Man product catalog.
 * Specs summarised from public vendor product pages (NVIDIA, Supermicro, ASUS), Sept 2026.
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
 */

window.BRANDS = {
    nvidia: 'NVIDIA',
    supermicro: 'Supermicro',
    asus: 'ASUS'
};

window.CATEGORIES = {
    'rack-scale': 'Rack-Scale AI Systems',
    'gpu-servers': 'GPU & AI Servers',
    'accelerators': 'Data Center GPUs',
    'networking': 'AI Networking',
    'servers': 'Rack & Multi-Node Servers',
    'storage': 'Storage',
    'desktop-ai': 'AI Workstations & Deskside',
    'edge': 'Edge Systems',
    'software': 'Software & Management'
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
    'edge': 'edge',
    'software': 'software'
};

window.PRODUCTS = [
    /* ---------------- NVIDIA ---------------- */
    {
        id: 'nvidia-vera-rubin-nvl72', brand: 'nvidia', cat: 'rack-scale', isNew: true, icon: 'ph-cube-transparent',
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
        name: 'NVIDIA HGX B300',
        summary: 'Blackwell Ultra 8-GPU platform for AI reasoning, available in air- and liquid-cooled partner servers.',
        specs: [
            ['GPUs', '8× NVIDIA Blackwell Ultra'],
            ['GPU memory', '288 GB HBM3e per GPU (2.3 TB total)'],
            ['NVLink', '1.8 TB/s GPU-to-GPU'],
            ['Networking', 'Integrated ConnectX-8 SuperNICs, 800 Gb/s']
        ]
    },
    {
        id: 'nvidia-hgx-b200', brand: 'nvidia', cat: 'gpu-servers', icon: 'ph-circuitry',
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
        name: 'NVIDIA DGX Spark',
        summary: 'Compact desktop AI supercomputer for prototyping, fine-tuning and running models locally.',
        specs: [
            ['Superchip', 'NVIDIA GB10 Grace Blackwell'],
            ['Memory', '128 GB unified system memory'],
            ['AI performance', 'Up to 1 petaFLOP (FP4)'],
            ['Software', 'NVIDIA DGX OS and AI software stack']
        ]
    },
    {
        id: 'nvidia-dgx-station', brand: 'nvidia', cat: 'desktop-ai', icon: 'ph-desktop-tower',
        name: 'NVIDIA DGX Station',
        summary: 'Deskside AI supercomputer for developers and research teams working on large models.',
        specs: [
            ['Superchip', 'NVIDIA GB300 Grace Blackwell Ultra Desktop'],
            ['Memory', 'Up to 784 GB large coherent memory'],
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
            ['Editions', 'vPC/vApps, RTX Virtual Workstation, vCS'],
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

    /* ---------------- ASUS ---------------- */
    {
        id: 'asus-ai-pod', brand: 'asus', cat: 'rack-scale', icon: 'ph-cube-transparent',
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
        name: 'ASUS Storage Solutions',
        summary: 'AI/HPC, block, unified and object storage plus JBOD expansion from the ASUS Infrastructure Solution Group.',
        specs: [
            ['Types', 'AI/HPC, block, unified, object, JBOD'],
            ['Use case', 'GPU cluster data, backup, enterprise file']
        ]
    },
    {
        id: 'asus-edge', brand: 'asus', cat: 'edge', icon: 'ph-broadcast',
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
    }
];
