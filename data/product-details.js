/*
 * Plan Man product detail pages: extended content for every product in data/products.js.
 * Researched from the official NVIDIA, Supermicro and ASUS product pages and datasheets (October 2026).
 * Used only at build time by tools/seo-build.js, which writes products/<id>.html. Re-run it after editing.
 *
 * Fields (keyed by the product id in data/products.js):
 *   sources     [label, url] pairs: the official pages the content was taken from
 *   model       optional vendor model number / SKU shown in the page header
 *   overview    paragraphs describing the product
 *   highlights  [phosphor icon, title, text] key features
 *   specs       [group title, [[label, value], ...]] full specification tables
 *   models      optional [model, description] list for product families
 *   useCases    workloads the product is built for
 *   specNote    optional footnote under the spec table
 */

window.PRODUCT_DETAILS = {

    /* ================================================================ NVIDIA */

    'nvidia-vera-rubin-nvl72': {
        sources: [['NVIDIA Vera Rubin NVL72', 'https://www.nvidia.com/en-us/data-center/vera-rubin-nvl72/']],
        overview: [
            "NVIDIA Vera Rubin NVL72 is a rack-scale AI supercomputer that joins 72 Rubin GPUs and 36 Vera CPUs, together with ConnectX-9 SuperNICs and BlueField-4 DPUs, in a single sixth-generation NVLink domain. It is designed for AI factories that train and serve trillion-parameter, mixture-of-experts and long-context reasoning models.",
            "The platform is built on the third-generation NVIDIA MGX NVL72 rack with cable-free modular trays and is supported by more than 80 ecosystem partners, so the same architecture is available as NVIDIA DGX and from server makers such as Supermicro and ASUS."
        ],
        highlights: [
            ['ph-cpu', 'Co-designed chips', 'Rubin GPUs, Vera CPUs, NVLink switches, ConnectX-9 SuperNICs and BlueField-4 DPUs are engineered to operate as one rack-scale computer.'],
            ['ph-coins', 'Lower cost per token', 'NVIDIA quotes up to one-tenth the cost per million tokens of GB200 NVL72 for deep-reasoning, agentic inference.'],
            ['ph-lightning', 'More tokens per megawatt', 'Up to 10x more tokens per megawatt than the previous generation within the same power envelope.'],
            ['ph-graph', 'Efficient MoE training', 'Trains mixture-of-experts models with one-quarter of the GPUs the prior generation needed.'],
            ['ph-memory', '20.7 TB of HBM4', '1,400 TB/s of GPU memory bandwidth per rack, plus up to 54 TB of LPDDR5X attached to the Vera CPUs.'],
            ['ph-squares-four', 'Modular MGX rack', 'Third-generation MGX NVL72 rack with cable-free trays for faster assembly and serviceability.']
        ],
        specs: [
            ['Compute', [
                ['GPUs', '72× NVIDIA Rubin'],
                ['CPUs', '36× NVIDIA Vera'],
                ['Total NVIDIA + HBM4 chips', '1,296']
            ]],
            ['AI performance', [
                ['NVFP4 inference', '3,600 PFLOPS'],
                ['NVFP4 training', '2,520 PFLOPS'],
                ['FP8/FP6 training', '1,260 PFLOPS'],
                ['FP16/BF16', '288 PFLOPS'],
                ['TF32', '144 PFLOPS'],
                ['FP32', '9,360 TFLOPS'],
                ['FP64', '2,400 TFLOPS']
            ]],
            ['Memory & interconnect', [
                ['GPU memory', '20.7 TB HBM4'],
                ['GPU memory bandwidth', '1,400 TB/s'],
                ['CPU memory', 'Up to 54 TB LPDDR5X'],
                ['NVLink bandwidth', '216 TB/s'],
                ['NVLink-C2C bandwidth', '65 TB/s'],
                ['Networking bandwidth', '32.4 TB/s (bi-directional)']
            ]],
            ['Infrastructure', [
                ['Rack', 'Third-generation NVIDIA MGX NVL72, liquid-cooled'],
                ['Inlet temperature', '45 °C'],
                ['Networking', 'ConnectX-9 SuperNICs, BlueField-4 DPUs'],
                ['Scale-out fabric', 'Quantum-X800 InfiniBand or Spectrum-X Ethernet']
            ]]
        ],
        useCases: ['Agentic AI and deep-reasoning inference', 'Long-context LLM serving', 'Mixture-of-experts training', 'Trillion-parameter post-training', 'AI factories for cloud and sovereign AI', 'Scientific computing and AI for science']
    },

    'nvidia-dgx-vera-rubin-nvl72': {
        sources: [['NVIDIA DGX Vera Rubin NVL72', 'https://www.nvidia.com/en-us/data-center/dgx-vera-rubin-nvl72/']],
        overview: [
            "NVIDIA DGX Vera Rubin NVL72 is the turnkey, NVIDIA-built implementation of the Vera Rubin NVL72 platform: 72 Rubin GPUs and 36 Vera CPUs delivered as a complete, ready-to-deploy rack for training and long-context inference at scale.",
            "It is the building block of NVIDIA DGX SuperPOD and ships with NVIDIA Mission Control, NVIDIA AI Enterprise and DGX OS, backed by three years of enterprise business-standard support for hardware and software."
        ],
        highlights: [
            ['ph-package', 'Turnkey rack', 'A complete DGX rack with networking, management and software, designed to remove deployment guesswork.'],
            ['ph-sliders', 'NVIDIA Mission Control', 'Automates configuration, cluster operations, workload management and facility integration.'],
            ['ph-buildings', 'DGX SuperPOD building block', 'Scales from a single rack to a full DGX SuperPOD with a proven reference architecture.'],
            ['ph-leaf', 'Performance per watt', 'Vera CPUs and Rubin GPUs let enterprises scale training and long-context inference within existing energy budgets.'],
            ['ph-network', 'NVLink switch system', 'Nine L1 NVLink Switches connect all 72 GPUs in one high-bandwidth domain.'],
            ['ph-lifebuoy', 'Three years of support', 'Enterprise business-standard support for hardware and software is included.']
        ],
        specs: [
            ['Compute', [
                ['GPUs', '72× NVIDIA Rubin'],
                ['CPUs', '36× NVIDIA Vera'],
                ['GPU memory', '20.7 TB HBM4'],
                ['GPU memory bandwidth', '1,400 TB/s']
            ]],
            ['Performance', [
                ['NVFP4 inference', '3,600 PFLOPS'],
                ['NVFP4 training', '2,520 PFLOPS (dense)'],
                ['FP8/FP6 training', '1,260 PFLOPS (dense)']
            ]],
            ['Networking', [
                ['Compute fabric', '144+ single-port NVIDIA ConnectX-9 VPI, 800 Gb/s InfiniBand and Ethernet'],
                ['DPUs', '18× dual-port NVIDIA BlueField-4 VPI, 400 Gb/s InfiniBand and Ethernet'],
                ['NVLink', '9× L1 NVIDIA NVLink Switches'],
                ['Management', 'Host baseboard management controller (RJ45)']
            ]],
            ['Software & support', [
                ['Software', 'NVIDIA Mission Control, NVIDIA AI Enterprise, NVIDIA DGX OS'],
                ['Support', 'Three years enterprise business-standard (hardware and software)']
            ]]
        ],
        useCases: ['Frontier and foundation model training', 'Long-context enterprise inference', 'Reasoning and agentic AI', 'Turnkey AI factories and DGX SuperPOD']
    },

    'nvidia-gb300-nvl72': {
        sources: [['NVIDIA GB300 NVL72', 'https://www.nvidia.com/en-us/data-center/gb300-nvl72/']],
        overview: [
            "NVIDIA GB300 NVL72 is a fully liquid-cooled, rack-scale system that connects 72 Blackwell Ultra GPUs and 36 Arm-based Grace CPUs in one NVLink domain. It is optimised for AI reasoning and test-time scaling, where models spend more compute per answer.",
            "Blackwell Ultra adds more HBM3e memory and faster attention-layer processing than Blackwell, while ConnectX-8 SuperNICs give every GPU 800 Gb/s of RDMA networking on Quantum-X800 InfiniBand or Spectrum-X Ethernet."
        ],
        highlights: [
            ['ph-brain', 'Built for reasoning', 'Tensor Cores with 2x attention-layer acceleration and 1.5x more AI compute FLOPS than Blackwell.'],
            ['ph-memory', 'Larger HBM3e memory', '1.5x more GPU memory than Blackwell enables larger batches and longer context lengths.'],
            ['ph-plugs-connected', '800 Gb/s per GPU', 'ConnectX-8 SuperNICs provide RDMA networking over InfiniBand or Ethernet for every GPU.'],
            ['ph-network', '72-GPU NVLink domain', 'Fifth-generation NVLink delivers 130 TB/s of low-latency bandwidth across the rack.'],
            ['ph-sliders', 'NVIDIA Mission Control', 'Automates infrastructure operations and workload orchestration at hyperscale.'],
            ['ph-leaf', 'Grace CPU efficiency', 'Grace CPUs deliver about 2x the energy efficiency of leading server processors.']
        ],
        specs: [
            ['Configuration', [
                ['GPUs', '72× NVIDIA Blackwell Ultra'],
                ['CPUs', '36× NVIDIA Grace'],
                ['CPU cores', '2,592 Arm Neoverse V2'],
                ['Cooling', 'Fully liquid-cooled rack']
            ]],
            ['Memory & interconnect', [
                ['GPU memory | bandwidth', '20 TB HBM3e | up to 576 TB/s'],
                ['CPU memory | bandwidth', '17 TB LPDDR5X | 14 TB/s'],
                ['Fast memory', '37 TB'],
                ['NVLink bandwidth', '130 TB/s'],
                ['Networking', 'ConnectX-8 SuperNIC, 800 Gb/s per GPU']
            ]],
            ['Tensor performance', [
                ['FP4 Tensor Core', '1,440 PFLOPS'],
                ['FP8/FP6 Tensor Core', '720 PFLOPS'],
                ['INT8 Tensor Core', '24 POPS'],
                ['FP16/BF16 Tensor Core', '360 PFLOPS'],
                ['TF32 Tensor Core', '180 PFLOPS'],
                ['FP32', '6 PFLOPS'],
                ['FP64 / FP64 Tensor Core', '100 TFLOPS']
            ]]
        ],
        specNote: 'Tensor Core figures include sparsity unless noted, as published by NVIDIA.',
        useCases: ['AI reasoning and test-time scaling', 'Long-context LLM inference', 'Real-time video generation', 'Physical AI and world foundation models', 'Enterprise and cloud AI factories']
    },

    'nvidia-gb200-nvl72': {
        sources: [['NVIDIA GB200 NVL72', 'https://www.nvidia.com/en-us/data-center/gb200-nvl72/']],
        overview: [
            "NVIDIA GB200 NVL72 is a liquid-cooled rack that connects 36 Grace CPUs and 72 Blackwell GPUs so they behave like a single, massive GPU. NVIDIA rates it at up to 30x faster real-time inference for trillion-parameter LLMs than the previous generation.",
            "Each GB200 Grace Blackwell Superchip pairs one Grace CPU with two Blackwell GPUs over NVLink-C2C, and fifth-generation NVLink ties all 72 GPUs together at 130 TB/s for training, inference, HPC and data processing."
        ],
        highlights: [
            ['ph-lightning', 'Real-time trillion-parameter inference', 'Second-generation Transformer Engine with FP4 delivers up to 30x faster LLM inference.'],
            ['ph-graph', '4x faster training', 'FP8 precision and 1.8 TB/s GPU-to-GPU bandwidth speed up large-scale training.'],
            ['ph-drop', 'Liquid-cooled efficiency', 'Up to 25x more performance at the same power than H100 air-cooled infrastructure.'],
            ['ph-memory', '13.4 TB HBM3e', '576 TB/s of GPU memory bandwidth for trillion-parameter models.'],
            ['ph-network', 'Largest NVLink domain', '72 GPUs connected at 130 TB/s remove communication bottlenecks.'],
            ['ph-database', 'Data processing', 'Decompression engines make database queries up to 18x faster than CPUs.']
        ],
        specs: [
            ['GB200 NVL72 rack', [
                ['Configuration', '36 Grace CPUs | 72 Blackwell GPUs'],
                ['NVFP4 Tensor Core', '1,440 PFLOPS (sparse) | 720 PFLOPS (dense)'],
                ['FP8/FP6 Tensor Core', '720 PFLOPS'],
                ['INT8 Tensor Core', '720 POPS'],
                ['FP16/BF16 Tensor Core', '360 PFLOPS'],
                ['TF32 Tensor Core', '180 PFLOPS'],
                ['FP32', '5,760 TFLOPS'],
                ['FP64 / FP64 Tensor Core', '2,880 TFLOPS'],
                ['GPU memory | bandwidth', '13.4 TB HBM3e | 576 TB/s'],
                ['NVLink bandwidth', '130 TB/s'],
                ['CPU cores', '2,592 Arm Neoverse V2'],
                ['CPU memory | bandwidth', '17 TB LPDDR5X | 14 TB/s']
            ]],
            ['GB200 Grace Blackwell Superchip', [
                ['Configuration', '1 Grace CPU | 2 Blackwell GPUs'],
                ['NVFP4 Tensor Core', '40 PFLOPS'],
                ['FP8/FP6 Tensor Core', '20 PFLOPS'],
                ['GPU memory | bandwidth', '372 GB HBM3e | 16 TB/s'],
                ['NVLink bandwidth', '3.6 TB/s'],
                ['CPU cores', '72 Arm Neoverse V2'],
                ['CPU memory | bandwidth', 'Up to 480 GB LPDDR5X | up to 512 GB/s']
            ]]
        ],
        useCases: ['Real-time trillion-parameter LLM inference', 'Mixture-of-experts training', 'HPC and scientific computing', 'Database and data-processing acceleration', 'Converged AI and HPC factories']
    },

    'nvidia-hgx-rubin-nvl8': {
        sources: [['NVIDIA HGX platform', 'https://www.nvidia.com/en-us/data-center/hgx/']],
        overview: [
            "NVIDIA HGX Rubin NVL8 is an eight-GPU baseboard that links Rubin GPUs with sixth-generation NVLink. Server makers build it into their own systems, so you can choose the chassis, cooling and CPU platform that fits your data center.",
            "NVIDIA rates HGX Rubin NVL8 at 10x the token throughput of HGX B200, and at matching training performance with 4x fewer GPUs. It is offered with x86 host CPUs (HGX Rubin NVL8) or with an NVIDIA Vera CPU (HGX Vera Rubin NVL8)."
        ],
        highlights: [
            ['ph-lightning', '400 PFLOPS NVFP4', 'Extreme inference throughput for serving agentic and reasoning models.'],
            ['ph-memory', '2 TB HBM4', '130 TB/s of GPU memory bandwidth, 2.1x more than the previous generation.'],
            ['ph-network', 'Sixth-generation NVLink', '24 TB/s of NVLink Switch bandwidth across the eight GPUs.'],
            ['ph-graph', 'MoE pre-training in 8 GPUs', '4x more NVFP4 training FLOPS for mixture-of-experts models.'],
            ['ph-cpu', 'x86 or Vera host', 'Choose x86 baseboards from OEMs or the 88-core NVIDIA Vera CPU with up to 1.5 TB LPDDR5X.'],
            ['ph-plugs-connected', '1.8 TB/s networking', 'Bi-directional networking bandwidth for multi-node clusters.']
        ],
        specs: [
            ['Platform', [
                ['Configuration', '8× NVIDIA Rubin SXM'],
                ['Host CPU', 'x86 (OEM-defined) or single-socket NVIDIA Vera (88 Olympus cores, up to 1.5 TB LPDDR5X)'],
                ['GPU memory', '2 TB HBM4'],
                ['GPU memory bandwidth', '130 TB/s'],
                ['NVLink', 'Sixth generation, 24 TB/s NVLink Switch bandwidth'],
                ['Networking bandwidth', '1.8 TB/s (bi-directional)'],
                ['Inlet temperature', '45 °C']
            ]],
            ['Performance (8 GPUs)', [
                ['NVFP4 inference', '400 PFLOPS (sparse)'],
                ['NVFP4 training', '270 PFLOPS (dense)'],
                ['FP8/FP6 training', '130 PFLOPS (dense)'],
                ['FP16/BF16 training', '32 PFLOPS (dense)'],
                ['FP32', '1,040 TFLOPS'],
                ['FP64', '265 TFLOPS']
            ]],
            ['Per Rubin GPU', [
                ['NVFP4 inference', '50 PFLOPS (sparse)'],
                ['NVFP4 training', '35 PFLOPS (dense)'],
                ['FP8/FP6 training', '17.5 PFLOPS (dense)'],
                ['FP16/BF16 training', '4 PFLOPS (dense)'],
                ['FP32 | FP64', '130 TFLOPS | 33 TFLOPS'],
                ['GPU memory | bandwidth', '288 GB HBM4 | 22 TB/s'],
                ['NVLink bandwidth', '3.6 TB/s']
            ]]
        ],
        useCases: ['Token-factory inference for agentic AI', 'Mixture-of-experts pre-training', 'LLM training and fine-tuning', 'Data analytics', 'HPC and scientific computing']
    },

    'nvidia-dgx-rubin-nvl8': {
        sources: [['NVIDIA DGX Rubin NVL8', 'https://www.nvidia.com/en-gb/data-center/dgx-rubin-nvl8/'], ['DGX Rubin NVL8 datasheet', 'https://resources.nvidia.com/en-us-dgx-systems/dgx-rubin-nvl8-datasheet']],
        overview: [
            "NVIDIA DGX Rubin NVL8 is a turnkey eight-GPU DGX system for agentic AI and reasoning, covering training, post-training and inference on one platform. It delivers 400 petaFLOPS of NVFP4 performance with 2.3 TB of GPU memory.",
            "The system is managed with NVIDIA Mission Control and fits into DGX BasePOD and DGX SuperPOD reference architectures, so it can start as a single node and grow into a cluster."
        ],
        highlights: [
            ['ph-lightning', '400 PFLOPS NVFP4', 'Exceptional inference performance with ultra-high memory bandwidth for models and agents.'],
            ['ph-brain', 'Built for agents', 'The Rubin architecture includes engines that accelerate multi-agent reasoning workflows.'],
            ['ph-network', 'Sixth-generation NVLink', '28.8 TB/s of NVLink Switch bandwidth for peer-to-peer GPU communication.'],
            ['ph-sliders', 'NVIDIA Mission Control', 'Full-lifecycle management from configuration to cluster operations and workload orchestration.'],
            ['ph-plugs-connected', '800 Gb/s per GPU', 'Eight ConnectX-9 VPI adapters plus BlueField-4 DPUs for storage and management traffic.'],
            ['ph-buildings', 'DGX ecosystem', 'Integrates with DGX BasePOD and DGX SuperPOD reference designs.']
        ],
        specs: [
            ['GPU', [
                ['GPUs', '8× NVIDIA Rubin'],
                ['Total GPU memory', '2.3 TB'],
                ['GPU memory bandwidth', '176 TB/s'],
                ['NVLink Switch bandwidth', '28.8 TB/s total']
            ]],
            ['Performance', [
                ['NVFP4 inference', '400 PFLOPS'],
                ['NVFP4 training', '280 PFLOPS (dense)'],
                ['FP8/FP6 training', '140 PFLOPS (dense)']
            ]],
            ['System', [
                ['CPUs', '2× Intel Xeon 6776P'],
                ['Networking', '8× OSFP ports serving 8× single-port NVIDIA ConnectX-9 VPI, up to 800 Gb/s InfiniBand and Ethernet'],
                ['DPU', '2× 400G QSFP112 ports on NVIDIA BlueField-4'],
                ['System power', '~24 kW'],
                ['Software', 'NVIDIA DGX OS, Ubuntu, Red Hat Enterprise Linux, Rocky Linux; NVIDIA Mission Control']
            ]]
        ],
        useCases: ['Agentic AI training and deployment', 'Multi-agent reasoning', 'Post-training and fine-tuning', 'Enterprise inference at scale', 'DGX BasePOD and SuperPOD clusters']
    },

    'nvidia-hgx-b300': {
        sources: [['NVIDIA HGX platform', 'https://www.nvidia.com/en-us/data-center/hgx/']],
        overview: [
            "NVIDIA HGX B300 is an eight-GPU Blackwell Ultra baseboard connected by fifth-generation NVLink. It is the GPU engine inside air- and liquid-cooled servers from Supermicro, ASUS and other NVIDIA partners.",
            "Compared with HGX B200 it doubles attention-layer performance and network bandwidth and raises GPU memory, making it the mainstream choice for AI reasoning, inference and training in 2026."
        ],
        highlights: [
            ['ph-lightning', '108 PFLOPS dense FP4', '144 PFLOPS with sparsity for efficient low-precision inference.'],
            ['ph-brain', '2x attention performance', 'Faster transformer attention layers than NVIDIA Blackwell.'],
            ['ph-memory', '2.1 TB GPU memory', 'Large HBM3e capacity across eight GPUs for bigger models and batches.'],
            ['ph-plugs-connected', '1.6 TB/s networking', 'Double the network bandwidth of HGX B200, via integrated ConnectX-8 SuperNICs.'],
            ['ph-network', 'Fifth-generation NVLink', '1.8 TB/s GPU-to-GPU and 14.4 TB/s total NVLink bandwidth.'],
            ['ph-truck', 'Shipping now', 'Available in partner servers in air-cooled and liquid-cooled designs.']
        ],
        specs: [
            ['Platform', [
                ['Form factor', '8× NVIDIA Blackwell Ultra SXM'],
                ['Total GPU memory', '2.1 TB HBM3e'],
                ['NVLink', 'Fifth generation, NVLink 5 Switch'],
                ['NVLink GPU-to-GPU bandwidth', '1.8 TB/s'],
                ['Total NVLink bandwidth', '14.4 TB/s'],
                ['Networking bandwidth', '1.6 TB/s'],
                ['Attention performance', '2x vs. NVIDIA Blackwell']
            ]],
            ['Tensor performance', [
                ['FP4 Tensor Core', '144 PFLOPS (sparse) | 108 PFLOPS (dense)'],
                ['FP8/FP6 Tensor Core', '72 PFLOPS'],
                ['INT8 Tensor Core', '3 POPS'],
                ['FP16/BF16 Tensor Core', '36 PFLOPS'],
                ['TF32 Tensor Core', '18 PFLOPS'],
                ['FP32', '600 TFLOPS'],
                ['FP64 / FP64 Tensor Core', '10 TFLOPS']
            ]]
        ],
        specNote: 'Tensor Core figures include sparsity unless noted. Partner servers list HGX B300 with 288 GB of HBM3e per GPU.',
        useCases: ['AI reasoning and LLM inference', 'Model training and fine-tuning', 'Enterprise AI factories', 'Transformer model acceleration', 'HPC']
    },

    'nvidia-hgx-b200': {
        sources: [['NVIDIA HGX platform', 'https://www.nvidia.com/en-us/data-center/hgx/']],
        overview: [
            "NVIDIA HGX B200 is the eight-GPU Blackwell baseboard that set the baseline for Blackwell-generation AI servers. Fifth-generation NVLink connects the GPUs at 1.8 TB/s each, with 1.4 TB of HBM3e across the board.",
            "Its strong FP64 performance makes it a balanced platform for organisations that run both AI training and inference and traditional HPC simulation on the same cluster."
        ],
        highlights: [
            ['ph-lightning', 'Flexible precision', '144 PFLOPS sparse FP4 and 72 PFLOPS dense FP4 for efficient inference.'],
            ['ph-graph', 'Training and inference', '36 PFLOPS of FP16/BF16 for training and fine-tuning.'],
            ['ph-atom', 'Strong FP64', '296 TFLOPS of FP64 for scientific and engineering simulation.'],
            ['ph-memory', '1.4 TB HBM3e', 'Large memory pool for big models and datasets.'],
            ['ph-network', 'Fifth-generation NVLink', '1.8 TB/s per GPU and 14.4 TB/s aggregate NVLink bandwidth.'],
            ['ph-plugs-connected', '1:1 GPU-to-NIC', 'Pairs with ConnectX-7 or BlueField-3 for 0.8 TB/s of cluster networking.']
        ],
        specs: [
            ['Platform', [
                ['Form factor', '8× NVIDIA Blackwell SXM'],
                ['Total GPU memory', '1.4 TB HBM3e (180 GB per GPU)'],
                ['NVLink', 'Fifth generation, NVLink 5 Switch'],
                ['NVLink GPU-to-GPU bandwidth', '1.8 TB/s'],
                ['Total NVLink bandwidth', '14.4 TB/s'],
                ['Networking bandwidth', '0.8 TB/s']
            ]],
            ['Tensor performance', [
                ['FP4 Tensor Core', '144 PFLOPS (sparse) | 72 PFLOPS (dense)'],
                ['FP8/FP6 Tensor Core', '72 PFLOPS'],
                ['INT8 Tensor Core', '72 POPS'],
                ['FP16/BF16 Tensor Core', '36 PFLOPS'],
                ['TF32 Tensor Core', '18 PFLOPS'],
                ['FP32', '600 TFLOPS'],
                ['FP64 / FP64 Tensor Core', '296 TFLOPS']
            ]]
        ],
        specNote: 'Tensor Core figures include sparsity unless noted, as published by NVIDIA.',
        useCases: ['LLM training and fine-tuning', 'High-volume inference', 'HPC and scientific computing', 'Data analytics pipelines', 'General accelerated computing']
    },

    'nvidia-rtx-pro-6000-server': {
        sources: [['NVIDIA RTX PRO 6000 Blackwell Server Edition', 'https://www.nvidia.com/en-us/data-center/rtx-pro-6000-blackwell-server-edition/']],
        overview: [
            "The NVIDIA RTX PRO 6000 Blackwell Server Edition is a universal data center GPU that combines Blackwell AI performance with professional graphics, ray tracing and video. Its 96 GB of GDDR7 memory handles large models, 3D scenes and datasets.",
            "It is the GPU behind NVIDIA RTX PRO Servers, an enterprise AI factory platform that runs agentic AI, physical AI, simulation, rendering and virtual workstations on standard air-cooled servers."
        ],
        highlights: [
            ['ph-cpu', 'Fifth-generation Tensor Cores', 'Up to 3x the performance of the previous generation with FP4 precision and DLSS 4.'],
            ['ph-cube', 'Fourth-generation RT Cores', 'Up to 2x faster ray tracing, with RTX Mega Geometry for up to 100x more triangles.'],
            ['ph-memory', '96 GB GDDR7', '1,597 GB/s of bandwidth for massive 3D projects and AI datasets.'],
            ['ph-film-strip', 'Media engines', 'Ninth-generation NVENC adds 4:2:2 H.264/HEVC; sixth-generation NVDEC doubles H.264 decode throughput.'],
            ['ph-squares-four', 'Multi-Instance GPU', 'Split one GPU into up to four fully isolated instances with guaranteed quality of service.'],
            ['ph-monitor', 'DisplayPort 2.1', 'Drives up to 8K at 240 Hz or 16K at 60 Hz.']
        ],
        specs: [
            ['GPU', [
                ['Architecture', 'NVIDIA Blackwell'],
                ['CUDA cores', '24,064'],
                ['RT Cores', '188 (4th generation)'],
                ['Tensor Cores', '5th generation']
            ]],
            ['Performance', [
                ['FP4 Tensor Core', '4 PFLOPS'],
                ['FP8 Tensor Core', '2 PFLOPS'],
                ['FP16/BF16 Tensor Core', '1 PFLOPS'],
                ['TF32 Tensor Core', '234 TFLOPS'],
                ['FP32', '120 TFLOPS'],
                ['Peak RT Core', '355 TFLOPS']
            ]],
            ['Memory & board', [
                ['GPU memory', '96 GB GDDR7'],
                ['Memory interface', '512-bit'],
                ['Memory bandwidth', '1,597 GB/s'],
                ['Max power', 'Up to 600 W (configurable)'],
                ['Form factor', 'Air: dual-slot FHFL | Liquid: single-slot FHXL'],
                ['Display outputs', '4× DisplayPort 2.1'],
                ['MIG', 'Up to 4 instances']
            ]]
        ],
        useCases: ['Agentic and generative AI inference', 'Physical AI and OpenUSD digital twins', 'Rendering and neural graphics', 'Scientific computing and data analytics', 'Video processing and live broadcast', 'Virtual workstations']
    },

    'nvidia-rtx-pro-4500-server': {
        sources: [['NVIDIA RTX PRO 4500 Blackwell Server Edition', 'https://www.nvidia.com/en-us/data-center/rtx-pro-4500-blackwell-server-edition/']],
        overview: [
            "The NVIDIA RTX PRO 4500 Blackwell Server Edition is an energy-efficient, single-slot 165 W GPU that brings Blackwell capabilities to mainstream servers. It accelerates AI inference, data science, video and visual computing without special power or cooling.",
            "With 32 GB of GDDR7, MIG support and NVIDIA vGPU, it is a practical choice for dense inference, virtual workstations and edge deployments."
        ],
        highlights: [
            ['ph-cpu', 'Fifth-generation Tensor Cores', 'Up to 3x the performance of the previous generation with FP4 and DLSS 4.'],
            ['ph-memory', '32 GB GDDR7', '800 GB/s of bandwidth for larger models and creative workflows.'],
            ['ph-cube', 'Fourth-generation RT Cores', 'Up to 2x the ray-tracing performance of the previous generation.'],
            ['ph-squares-four', 'Multi-Instance GPU', 'Two fully isolated 16 GB instances with guaranteed quality of service.'],
            ['ph-arrows-left-right', 'PCIe Gen 5', 'Twice the bandwidth of PCIe Gen 4 for data-intensive work.'],
            ['ph-leaf', '165 W single slot', 'Passive cooling that fits standard enterprise and edge servers.']
        ],
        specs: [
            ['GPU', [
                ['Architecture', 'NVIDIA Blackwell'],
                ['CUDA cores', '10,496'],
                ['RT Cores', '82 (4th generation)'],
                ['Tensor Cores', '5th generation']
            ]],
            ['Performance', [
                ['FP4 Tensor Core', '1.6 PFLOPS'],
                ['FP8 Tensor Core', '811 TFLOPS'],
                ['FP16/BF16 Tensor Core', '406 TFLOPS'],
                ['TF32 Tensor Core', '203 TFLOPS'],
                ['FP32', '51 TFLOPS'],
                ['Peak RT Core', '154 TFLOPS']
            ]],
            ['Memory & board', [
                ['GPU memory', '32 GB GDDR7'],
                ['Memory interface', '256-bit'],
                ['Memory bandwidth', '800 GB/s'],
                ['Power', '165 W'],
                ['Form factor', 'Single-slot FHFL (4.4" H × 10.5" L), passive'],
                ['Interconnect', 'PCIe 5.0 x16'],
                ['Power connector', '1× PCIe CEM5 16-pin'],
                ['Media engines', '3× NVENC, 3× NVDEC'],
                ['MIG', 'Up to 2 × 16 GB instances'],
                ['Confidential computing', 'Supported']
            ]]
        ],
        useCases: ['Small and medium LLM inference', 'Vector database and AI search', 'Vision AI agents and video analytics', 'Video streaming and transcoding', 'Virtual workstations (vGPU)', 'Data science']
    },

    'nvidia-h200-nvl': {
        sources: [['NVIDIA H200', 'https://www.nvidia.com/en-us/data-center/h200/']],
        overview: [
            "NVIDIA H200 NVL is the air-cooled, dual-slot PCIe version of the Hopper H200 GPU. It pairs 141 GB of HBM3e with 4.8 TB/s of bandwidth, giving up to 1.7x faster LLM inference and 1.3x faster HPC than H100 NVL.",
            "Up to four GPUs can be linked with NVLink bridges at 900 GB/s, and a five-year NVIDIA AI Enterprise subscription is included, making it a strong fit for enterprise racks with standard air cooling."
        ],
        highlights: [
            ['ph-memory', '141 GB HBM3e', 'Run larger models and datasets without sharding them across GPUs.'],
            ['ph-lightning', '4.8 TB/s bandwidth', 'Feeds memory-bound LLM inference and HPC workloads.'],
            ['ph-link', 'NVLink bridges', '2- or 4-way NVLink at 900 GB/s per GPU; up to 8 GPUs per server.'],
            ['ph-stack', 'AI Enterprise included', 'Five-year NVIDIA AI Enterprise subscription with NIM microservices.'],
            ['ph-thermometer', 'Air-cooled', 'Configurable up to 600 W within standard enterprise cooling.'],
            ['ph-lock', 'Confidential computing', 'Protects sensitive data and models while they are processed.']
        ],
        specs: [
            ['Performance', [
                ['FP64', '30 TFLOPS'],
                ['FP64 Tensor Core', '60 TFLOPS'],
                ['FP32', '60 TFLOPS'],
                ['TF32 Tensor Core', '835 TFLOPS'],
                ['BFLOAT16 / FP16 Tensor Core', '1,671 TFLOPS'],
                ['FP8 / INT8 Tensor Core', '3,341 TFLOPS / TOPS']
            ]],
            ['Memory & interconnect', [
                ['GPU memory', '141 GB HBM3e'],
                ['Memory bandwidth', '4.8 TB/s'],
                ['Interconnect', '2- or 4-way NVLink bridge, 900 GB/s per GPU; PCIe Gen5, 128 GB/s']
            ]],
            ['Board & features', [
                ['Form factor', 'PCIe, dual-slot, air-cooled'],
                ['Max TDP', 'Up to 600 W (configurable)'],
                ['MIG', 'Up to 7 instances @ 16.5 GB'],
                ['Decoders', '7 NVDEC, 7 JPEG'],
                ['Confidential computing', 'Supported'],
                ['Server options', 'NVIDIA MGX H200 NVL partner and NVIDIA-Certified Systems with up to 8 GPUs'],
                ['NVIDIA AI Enterprise', 'Included']
            ]]
        ],
        specNote: 'Tensor Core figures include sparsity, as published by NVIDIA.',
        useCases: ['Enterprise LLM inference', 'Retrieval-augmented generation (RAG)', 'Fine-tuning', 'HPC simulation and research', 'Computer vision and speech AI']
    },

    'nvidia-l40s': {
        sources: [['NVIDIA L40S', 'https://www.nvidia.com/en-us/data-center/l40s/']],
        overview: [
            "The NVIDIA L40S is a universal Ada Lovelace data center GPU that combines AI compute with graphics and media acceleration. NVIDIA rates it at up to 5x the inference performance of the previous-generation A40.",
            "Designed for 24/7 enterprise operation with passive cooling, secure boot and NEBS Level 3 readiness, it is widely deployed for generative AI, rendering and NVIDIA Omniverse."
        ],
        highlights: [
            ['ph-cpu', 'Fourth-generation Tensor Cores', 'Structural sparsity and TF32 support for faster training and inference.'],
            ['ph-lightning', 'Transformer Engine', 'Automatically switches between FP8 and FP16 to speed up AI.'],
            ['ph-cube', 'Third-generation RT Cores', 'Up to 2x the real-time ray-tracing performance of the previous generation.'],
            ['ph-memory', '48 GB GDDR6 with ECC', 'Enough memory for LLM and generative AI workloads.'],
            ['ph-film-strip', 'AV1 media engines', 'Three NVENC and three NVDEC engines with AV1 encode and decode.'],
            ['ph-shield-check', 'Enterprise ready', 'Secure boot with root of trust, NEBS Level 3 ready, passive design.']
        ],
        specs: [
            ['GPU', [
                ['Architecture', 'NVIDIA Ada Lovelace'],
                ['CUDA cores', '18,176'],
                ['Tensor Cores', '568 (4th generation)'],
                ['RT Cores', '142 (3rd generation)']
            ]],
            ['Performance', [
                ['FP32', '91.6 TFLOPS'],
                ['TF32 Tensor Core', '183 | 366 TFLOPS (with sparsity)'],
                ['FP16 Tensor Core', '362 | 733 TFLOPS (with sparsity)'],
                ['FP8 Tensor Core', '733 | 1,466 TFLOPS (with sparsity)'],
                ['INT8 / INT4 Tensor', '733 | 1,466 TOPS (with sparsity)'],
                ['RT Core performance', '212 TFLOPS']
            ]],
            ['Memory & board', [
                ['GPU memory', '48 GB GDDR6 with ECC'],
                ['Memory bandwidth', '864 GB/s'],
                ['Interconnect', 'PCIe Gen4 x16 (64 GB/s bidirectional)'],
                ['Max power', '350 W'],
                ['Power connector', '16-pin'],
                ['Form factor', '4.4" H × 10.5" L, dual-slot, passive'],
                ['Display', '4× DisplayPort 1.4a'],
                ['Media engines', '3× NVENC / 3× NVDEC (AV1 encode and decode)'],
                ['vGPU', 'Supported'],
                ['MIG / NVLink', 'Not supported']
            ]]
        ],
        useCases: ['Generative AI inference', 'LLM fine-tuning', 'Rendering and 3D graphics', 'NVIDIA Omniverse and OpenUSD', 'Video encoding and streaming', 'Image generation']
    },

    'nvidia-quantum-x800': {
        sources: [['NVIDIA Quantum-X800 InfiniBand', 'https://www.nvidia.com/en-us/networking/products/infiniband/quantum-x800/']],
        overview: [
            "NVIDIA Quantum-X800 is the first end-to-end 800 Gb/s networking platform, purpose-built for trillion-parameter AI. It combines Quantum-X800 InfiniBand switches, ConnectX SuperNICs and LinkX cables and transceivers.",
            "Hardware in-network computing with SHARP v4, adaptive routing and telemetry-based congestion control keep large training jobs running at full speed across thousands of GPUs."
        ],
        highlights: [
            ['ph-gauge', '800 Gb/s per port', 'Double the bandwidth of the previous InfiniBand generation.'],
            ['ph-function', 'SHARP v4 in-network computing', 'Collective operations are reduced inside the switch, freeing GPU time.'],
            ['ph-path', 'Adaptive routing', 'Telemetry-based congestion control keeps traffic flowing across the fabric.'],
            ['ph-network', '144-port switch', 'Quantum-X800 switches offer 144 ports of 800 Gb/s with UFM management.'],
            ['ph-plugs-connected', 'Up to 1.6 Tb/s per GPU', 'ConnectX SuperNICs with accelerated MPI engines and ultra-low latency.'],
            ['ph-sun', 'Silicon photonics', 'Co-packaged optics reduce latency and power by shortening the optical path.']
        ],
        specs: [
            ['Quantum-X800 InfiniBand switch', [
                ['Ports', '144'],
                ['Per-port bandwidth', '800 Gb/s'],
                ['In-network computing', 'SHARP v4'],
                ['Features', 'Adaptive routing, telemetry-based congestion control, performance isolation, low-power link state'],
                ['Management', 'NVIDIA UFM']
            ]],
            ['SuperNICs & cabling', [
                ['ConnectX SuperNICs', 'Up to 1.6 Tb/s per GPU, accelerated MPI engines, QoS, adaptive routing'],
                ['LinkX', 'Cables and transceivers, including passive fiber and linear active copper']
            ]]
        ],
        useCases: ['Scale-out fabric for GPU clusters', 'Trillion-parameter model training', 'HPC and scientific computing', 'Multi-site AI factories']
    },

    'nvidia-spectrum-x': {
        sources: [['NVIDIA Spectrum-X Ethernet', 'https://www.nvidia.com/en-us/networking/spectrumx/']],
        overview: [
            "NVIDIA Spectrum-X is an end-to-end Ethernet platform built for multi-tenant generative AI factories. Spectrum-X switches and SuperNICs work together to deliver the bandwidth, low latency and performance isolation that AI needs on standards-based Ethernet.",
            "Spectrum-XGS extends the same fabric across data centers, so geographically distributed sites can operate as one large AI factory."
        ],
        highlights: [
            ['ph-gauge', '1.6x AI network performance', 'Compared with off-the-shelf Ethernet for AI workloads.'],
            ['ph-arrows-out', 'Massive scale', 'Two-tier topologies reach hundreds of thousands of GPUs; Multiplane extends to 128,000 GPUs.'],
            ['ph-shield', 'Tenant isolation', 'Telemetry-based congestion control keeps noisy neighbours from slowing other jobs.'],
            ['ph-path', 'Adaptive routing', 'Switch and SuperNIC coordinate to maximise effective bandwidth and resilience.'],
            ['ph-globe', 'Spectrum-XGS', 'Multi-site NCCL collectives run up to 1.9x faster across data centers.'],
            ['ph-sun', 'Co-packaged optics', 'Up to 5x better power efficiency than transceiver-based networks.']
        ],
        specs: [
            ['Switches', [
                ['SN5000 series', 'Spectrum-4 Ethernet switches for AI factories'],
                ['SN6600', '128× 800G OSFP ports, Spectrum-6 ASIC, 102.4 Tb/s'],
                ['SN6800', '512× 800G ports in 5U'],
                ['SerDes', '200G per lane']
            ]],
            ['SuperNICs', [
                ['BlueField-3', 'RDMA / RoCE-optimised SuperNIC for Hopper-era systems'],
                ['ConnectX-8', '800 Gb/s total (2× 400G), PCIe Gen6, for Blackwell'],
                ['ConnectX-9', '1,600 Gb/s per GPU, PCIe Gen6, for Vera Rubin NVL72']
            ]]
        ],
        useCases: ['GPU-to-GPU fabrics for distributed training', 'Multi-tenant AI cloud', 'AI storage fabrics', 'Multi-site AI factories']
    },

    'nvidia-connectx-8': {
        sources: [['NVIDIA SuperNICs', 'https://www.nvidia.com/en-us/networking/products/ethernet/supernic/'], ['ConnectX-8 SuperNIC user manual', 'https://docs.nvidia.com/networking/display/connectx8supernic']],
        overview: [
            "The NVIDIA ConnectX-8 SuperNIC delivers up to 800 Gb/s of network bandwidth per adapter for GPU-to-GPU communication in large AI clusters. It supports both InfiniBand (XDR) and Ethernet, and is the standard compute-fabric NIC in Blackwell Ultra systems.",
            "A PCIe Gen6 host interface with up to 48 lanes and an integrated PCIe switch let one ConnectX-8 serve GPUs, CPUs and storage without extra switch chips."
        ],
        highlights: [
            ['ph-gauge', '800 Gb/s', 'Highest-bandwidth NIC for AI compute fabrics.'],
            ['ph-arrows-left-right', 'InfiniBand or Ethernet', 'XDR 800G InfiniBand by default, or 2× 400GbE Ethernet.'],
            ['ph-cpu', 'PCIe Gen6', 'Up to 48 lanes, backward compatible with Gen5 and Gen4.'],
            ['ph-lightning', 'Low-latency RDMA', 'High-bandwidth, low-latency transfers tuned for generative AI.'],
            ['ph-cards', 'Multiple form factors', 'PCIe cards, OCP 3.0 and mezzanine options for different servers.']
        ],
        specs: [
            ['Networking', [
                ['Maximum bandwidth', '800 Gb/s'],
                ['InfiniBand', 'XDR 800 / 400 / 200 / 100 Gb/s'],
                ['Ethernet', '2× 400GbE; 400 / 200 / 100 / 50 / 25 GbE'],
                ['InfiniBand compliance', 'IBTA v1.7']
            ]],
            ['Host & form factor', [
                ['Host interface', 'PCIe Gen6, up to 48 lanes (Gen5 / Gen4 compatible)'],
                ['Form factors', 'PCIe HHHL 1× OSFP; PCIe HHHL 2× QSFP112; dual ConnectX-8 mezzanine; OCP 3.0 TSFF 1× OSFP']
            ]]
        ],
        useCases: ['East-west GPU compute fabric', 'Blackwell and Blackwell Ultra clusters', 'Quantum-X800 and Spectrum-X networks', 'Hyperscale AI factories']
    },

    'nvidia-bluefield': {
        sources: [['NVIDIA BlueField', 'https://www.nvidia.com/en-us/networking/products/data-processing-unit/']],
        overview: [
            "NVIDIA BlueField data processing units combine Arm compute with high-speed networking to offload networking, storage and security from host CPUs. They run software-defined infrastructure services through NVIDIA DOCA.",
            "BlueField-3 delivers 400 Gb/s and is widely deployed today; BlueField-4 doubles that to 800 Gb/s for gigascale AI factories, and a BlueField-4 storage processor powers AI-native storage."
        ],
        highlights: [
            ['ph-network', 'Line-rate networking', 'Software-defined networking and distributed routing without host CPU overhead.'],
            ['ph-shield-check', 'Zero-trust security', 'Real-time threat detection, isolation and runtime protection in silicon.'],
            ['ph-database', 'Accelerated storage', 'RDMA, NVMe-oF and GPUDirect Storage for AI data and inference context.'],
            ['ph-users-three', 'Multi-tenant isolation', 'Securely share infrastructure across tenants while improving GPU and CPU utilisation.'],
            ['ph-cloud', 'Kubernetes integration', 'Elastic provisioning across cloud environments.']
        ],
        specs: [
            ['BlueField-4', [
                ['Peak throughput', '800 Gb/s'],
                ['Purpose', 'Infrastructure processor for gigascale AI factories']
            ]],
            ['BlueField-3', [
                ['Peak throughput', '400 Gb/s'],
                ['Purpose', 'Software-defined networking, storage and cybersecurity']
            ]],
            ['BlueField-4 STX storage processor', [
                ['CPU', 'NVIDIA Vera'],
                ['Networking', 'ConnectX-9'],
                ['Role', 'Storage-side processor and data-path engine']
            ]],
            ['Software', [
                ['Framework', 'NVIDIA DOCA']
            ]]
        ],
        useCases: ['Multi-tenant AI cloud infrastructure', 'North-south networking and storage', 'Zero-trust security', 'AI-native storage platforms', 'Edge and OT security']
    },

    'nvidia-dgx-spark': {
        sources: [['NVIDIA DGX Spark', 'https://www.nvidia.com/en-us/products/workstations/dgx-spark/']],
        overview: [
            "NVIDIA DGX Spark is a compact desktop AI supercomputer built on the GB10 Grace Blackwell Superchip. It gives developers up to 1 petaFLOP of FP4 AI performance and up to 128 GB of unified memory to build and run models and agents locally.",
            "It handles fine-tuning of models up to 70 billion parameters and inference up to 200 billion parameters, ships with the NVIDIA AI software stack, and two to four units can be linked through the built-in ConnectX-7 networking."
        ],
        highlights: [
            ['ph-cpu', 'GB10 Grace Blackwell', 'Up to 1 PFLOP of FP4 AI performance with fifth-generation Tensor Cores.'],
            ['ph-memory', 'Unified memory', '64 GB or 128 GB of coherent LPDDR5X shared by CPU and GPU.'],
            ['ph-plugs-connected', 'ConnectX-7 networking', '200 Gb/s networking to connect up to four DGX Spark systems.'],
            ['ph-stack', 'AI software included', 'DGX OS with NVIDIA NIM, frameworks, libraries and pre-trained models.'],
            ['ph-desktop', 'Fits on a desk', '150 × 150 × 50.5 mm, 1.2 kg, 140 W GB10 TDP.'],
            ['ph-robot', 'Agent development', 'NVIDIA Agent Toolkit for building safe, always-on local agents.']
        ],
        specs: [
            ['Compute', [
                ['Superchip', 'NVIDIA GB10 Grace Blackwell'],
                ['CPU', '20-core Arm (10× Cortex-X925 + 10× Cortex-A725)'],
                ['GPU', 'Blackwell generation; 5th-gen Tensor Cores, 4th-gen RT Cores'],
                ['Tensor performance', 'Up to 1 PFLOP FP4']
            ]],
            ['Memory & storage', [
                ['System memory', '64 GB or 128 GB LPDDR5X unified'],
                ['Memory bandwidth', '273 GB/s'],
                ['Storage', 'Up to 4 TB NVMe M.2 with self-encryption']
            ]],
            ['Connectivity', [
                ['Networking', 'ConnectX-7 @ 200 Gb/s; 1× RJ-45 10 GbE'],
                ['Wireless', 'Wi-Fi 7, Bluetooth 5.4'],
                ['USB', '4× USB Type-C'],
                ['Display', '1× HDMI 2.1a, up to 3× DisplayPort over USB-C']
            ]],
            ['Physical', [
                ['Power supply', '240 W'],
                ['GB10 TDP', '140 W'],
                ['Dimensions', '150 × 150 × 50.5 mm'],
                ['Weight', '1.2 kg'],
                ['Noise', '35 dB(A) operating, 19 dB(A) idle'],
                ['Operating system', 'NVIDIA DGX OS']
            ]]
        ],
        useCases: ['Local agentic AI', 'Prototyping before cloud or data center deployment', 'Fine-tuning up to 70B parameters', 'Inference up to 200B parameters', 'Data science', 'Robotics and vision development']
    },

    'nvidia-dgx-station': {
        sources: [['NVIDIA DGX Station', 'https://www.nvidia.com/en-us/products/workstations/dgx-station/']],
        overview: [
            "NVIDIA DGX Station is a deskside AI supercomputer powered by the GB300 Grace Blackwell Ultra Desktop Superchip. It brings 748 GB of coherent memory and up to 20 petaFLOPS of FP4 AI compute to a single workstation, enough for models up to one trillion parameters.",
            "It runs the same NVIDIA AI software as the data center, supports Multi-Instance GPU so several developers can share it, and includes BMC and Redfish management so IT can run it like a server."
        ],
        highlights: [
            ['ph-cpu', 'GB300 Desktop Superchip', 'A Blackwell Ultra GPU and a 72-core Grace CPU joined by 900 GB/s NVLink-C2C.'],
            ['ph-memory', '748 GB coherent memory', '252 GB HBM3e plus 496 GB LPDDR5X in one unified memory pool.'],
            ['ph-lightning', 'NVFP4 Tensor Cores', 'Up to 20 PFLOPS of FP4 AI compute for training and inference.'],
            ['ph-plugs-connected', 'ConnectX-8 SuperNIC', 'Up to 800 Gb/s networking; link two DGX Stations together.'],
            ['ph-users-three', 'Multi-Instance GPU', 'Up to seven isolated instances to share the system across a team.'],
            ['ph-sliders', 'IT manageability', 'Out-of-band BMC telemetry, Redfish API and NVIDIA DCGM.']
        ],
        specs: [
            ['Compute', [
                ['GPU', '1× NVIDIA Blackwell Ultra'],
                ['CPU', '1× NVIDIA Grace, 72-core Neoverse V2'],
                ['NVLink-C2C', '900 GB/s'],
                ['MIG', 'Up to 7 instances']
            ]],
            ['Memory', [
                ['GPU memory', '252 GB HBM3e | 7.1 TB/s'],
                ['CPU memory', '496 GB LPDDR5X | 396 GB/s'],
                ['Total coherent memory', '748 GB']
            ]],
            ['Performance', [
                ['FP4 Tensor Core', '20 PFLOPS'],
                ['FP8/FP6 Tensor Core', '10 PFLOPS'],
                ['INT8 Tensor Core', '330 TOPS'],
                ['FP16/BF16 Tensor Core', '5 PFLOPS'],
                ['TF32 Tensor Core', '2.5 PFLOPS'],
                ['FP32', '80 TFLOPS'],
                ['FP64 / FP64 Tensor Core', '1.3 TFLOPS']
            ]],
            ['I/O & system', [
                ['Networking', 'ConnectX-8 SuperNIC, up to 800 Gb/s; 2× QSFP112 (400 Gb/s each); 1× 10 GbE; 1× 1 GbE BMC'],
                ['Storage', '4× M.2 Gen 5 slots'],
                ['PCIe slots', '1× PCIe Gen 5 x16, 2× PCIe Gen 5 x16 (x8 electrical)'],
                ['Optional graphics', 'NVIDIA RTX PRO 6000, 4000 or 2000 Blackwell'],
                ['Decoders', '7 NVDEC, 7 nvJPEG'],
                ['Power', '1,600 W total system power, 20 A circuit'],
                ['Operating system', 'Ubuntu with NVIDIA AI developer tools']
            ]]
        ],
        useCases: ['Large-model development and fine-tuning', 'Agentic AI development', 'Shared team AI compute (MIG)', 'Data science with RAPIDS', 'Physical AI and simulation', 'Medical imaging research']
    },

    'nvidia-ai-enterprise': {
        sources: [['NVIDIA AI Enterprise', 'https://www.nvidia.com/en-us/data-center/products/ai-enterprise/']],
        overview: [
            "NVIDIA AI Enterprise is a commercial software platform for building and running production AI. It bundles NVIDIA NIM microservices, NeMo, Blueprints, CUDA-X libraries and GPU orchestration with enterprise support and a secure software supply chain.",
            "It runs on NVIDIA-Certified Systems in the data center, at the edge and in major clouds, so models developed on a workstation move to production without re-engineering."
        ],
        highlights: [
            ['ph-cube', 'NIM microservices', 'Optimised, ready-to-deploy inference containers for leading open and NVIDIA models.'],
            ['ph-robot', 'NeMo for agents', 'Tools for training, evaluating and guardrailing models and building RAG pipelines.'],
            ['ph-squares-four', 'GPU orchestration', 'NVIDIA Run:ai raises GPU availability for data scientists and overall utilisation.'],
            ['ph-map-trifold', 'NVIDIA Blueprints', 'Reference workflows that shorten the path from prototype to production.'],
            ['ph-globe', 'Run anywhere', 'Data center, edge and cloud marketplaces on NVIDIA-Certified Systems.'],
            ['ph-shield-check', 'Enterprise support', 'Production branches with long-term support, security updates and governance.']
        ],
        specs: [
            ['Platform', [
                ['Components', 'NVIDIA NIM, NeMo, Blueprints, Run:ai, Omniverse, CUDA-X libraries, Base Command Manager'],
                ['Deployment', 'On-premises data center, edge, AWS, Azure and Google Cloud marketplaces'],
                ['Supported hardware', 'NVIDIA-Certified Systems, DGX platforms and supported data center GPUs']
            ]],
            ['Licensing & support', [
                ['Licensing', 'Commercial licence for production; 90-day free evaluation'],
                ['Prototyping', 'Components available through the NGC catalog'],
                ['Support', 'Enterprise support with extended-lifetime production branches']
            ]]
        ],
        useCases: ['Enterprise RAG and AI search', 'AI agents and assistants', 'LLM training and fine-tuning', 'Video analytics', 'Robotics simulation and digital twins', 'Generative AI deployment']
    },

    'nvidia-vgpu': {
        sources: [['NVIDIA virtual GPU solutions', 'https://www.nvidia.com/en-us/data-center/virtual-solutions/']],
        overview: [
            "NVIDIA virtual GPU (vGPU) software creates virtual GPUs from physical data center GPUs, so many virtual machines can share one GPU, or one VM can use several. Users get near bare-metal performance while IT keeps desktops, data and security centralised.",
            "The latest vGPU release adds support for the RTX PRO 4500 Blackwell Server Edition, and integrates with the leading virtualization platforms."
        ],
        highlights: [
            ['ph-gauge', 'Bare-metal experience', 'Accelerated applications run in VMs with performance close to physical workstations.'],
            ['ph-squares-four', 'Flexible sharing', 'Divide one GPU across many VMs or assign multiple GPUs to a single VM.'],
            ['ph-users-three', 'Higher user density', 'Offloading graphics from CPUs raises users per server and lowers TCO.'],
            ['ph-shield-check', 'Enterprise software', 'Regular releases with security features and professional support.'],
            ['ph-plugs', 'Works with your hypervisor', 'Integrated with Citrix, Nutanix and VMware platforms.']
        ],
        specs: [
            ['Editions', [
                ['NVIDIA RTX Virtual Workstation (vWS)', 'For designers, engineers, creators and AI developers'],
                ['NVIDIA Virtual PC (vPC) and Virtual Applications (vApps)', 'For knowledge workers and published applications']
            ]],
            ['Platform', [
                ['Hypervisors', 'Citrix, Nutanix, VMware and other supported platforms'],
                ['Supported GPUs', 'NVIDIA data center GPUs, including RTX PRO Blackwell Server Edition and L40S'],
                ['Licensing', 'Enterprise licensing; free 90-day evaluation']
            ]]
        ],
        useCases: ['Virtual desktops (VDI)', 'CAD, CAE and GIS virtual workstations', 'AI development in VMs', 'Digital twins', 'Graphics-accelerated productivity apps']
    },

    /* ================================================================ Supermicro */

    'smc-gb300-nvl72': {
        model: 'SRS-GB300-NVL72',
        sources: [['Supermicro SRS-GB300-NVL72', 'https://www.supermicro.com/en/products/system/gpu/48u/srs-gb300-nvl72'], ['GB300 NVL72 SuperCluster datasheet', 'https://www.supermicro.com/datasheet/datasheet_SuperCluster_GB300_NVL72.pdf']],
        overview: [
            "The Supermicro NVIDIA GB300 NVL72 SuperCluster is a complete, liquid-cooled 48U rack with 72 Blackwell Ultra GPUs and 36 Grace CPUs, connected by 1.8 TB/s NVLink into an exascale computer in a single rack. Each GPU carries 288 GB of HBM3e, for up to 21 TB of GPU memory.",
            "Supermicro delivers it end to end, from consultation through rack integration, networking, onsite installation and its direct liquid cooling infrastructure, including in-rack or in-row CDUs and a liquid-to-air sidecar for sites without facility water."
        ],
        highlights: [
            ['ph-cube-transparent', '72 Blackwell Ultra GPUs', 'Via 36 GB300 Grace Blackwell Ultra Superchips, 288 GB HBM3e each.'],
            ['ph-memory', 'Up to 21 TB HBM3e', 'Plus up to 17 TB LPDDR5X system memory in the rack.'],
            ['ph-drop', 'Direct liquid cooling', 'Up to 40% lower data center electricity cost, with CDU or sidecar options.'],
            ['ph-plugs-connected', '800 Gb/s compute fabric', 'ConnectX-8 SuperNICs on Quantum-X800 InfiniBand or Spectrum-X Ethernet.'],
            ['ph-hard-drives', '144 E1.S bays', 'Up to 144 PCIe 5.0 E1.S drives for local storage.'],
            ['ph-wrench', 'Full deployment service', 'All parts, networking and onsite installation from one vendor.']
        ],
        specs: [
            ['Rack', [
                ['Compute nodes', '18× 1U ARS-121GL-NB3'],
                ['Enclosure', '48U, 19-inch'],
                ['Dimensions (W × D × H)', '600 × 1068 × 2236 mm']
            ]],
            ['Compute', [
                ['GPUs', '72× NVIDIA B300 (Blackwell Ultra), 288 GB HBM3e each'],
                ['CPUs', '36× NVIDIA Grace'],
                ['GPU memory', 'Up to 21 TB HBM3e'],
                ['System memory', 'Up to 17 TB LPDDR5X'],
                ['GPU interconnect', '9× NVLink Switches, 1.8 TB/s GPU-to-GPU']
            ]],
            ['Networking & storage', [
                ['Compute fabric', 'Quantum-X800 InfiniBand or Spectrum-X Ethernet, ConnectX-8 SuperNICs up to 800 Gb/s'],
                ['In-band management', 'Up to 200 Gb/s with BlueField-3 DPUs'],
                ['Out-of-band management', '1G / 10G Ethernet'],
                ['Storage', 'Up to 144 E1.S PCIe 5.0 drive bays']
            ]],
            ['Power & cooling', [
                ['Power shelves', '8× 1U 33 kW (6× 5.5 kW PSUs each), 132 kW total'],
                ['Cooling', '1× in-rack 250 kW CDU with redundant PSUs and dual hot-swap pumps'],
                ['Alternative CDUs', 'In-row 1.8 MW; liquid-to-air sidecar 200 kW']
            ]]
        ],
        useCases: ['Foundation model training', 'Large-scale reasoning inference', 'AI factories and GPU clouds', 'Enterprise AI at rack scale']
    },

    'smc-gb200-nvl72': {
        model: 'SRS-GB200-NVL72',
        sources: [['Supermicro SRS-GB200-NVL72', 'https://www.supermicro.com/en/products/system/gpu/48u/srs-gb200-nvl72'], ['GB200 NVL72 SuperCluster datasheet', 'https://www.supermicro.com/datasheet/datasheet_SuperCluster_GB200_NVL72.pdf']],
        overview: [
            "The Supermicro NVIDIA GB200 NVL72 SuperCluster is a liquid-cooled rack-scale system with 72 Blackwell GPUs and 36 Grace CPUs in one NVLink domain, delivered as an integrated rack with Supermicro direct liquid cooling.",
            "Supermicro supplies the full solution, including networking, CDUs and onsite installation, and validates it at rack level before it ships."
        ],
        highlights: [
            ['ph-cube-transparent', '72 B200 GPUs per rack', 'Via 36 GB200 Grace Blackwell Superchips.'],
            ['ph-drop', 'Direct liquid cooling', 'Up to 40% reduction in data center electricity cost.'],
            ['ph-network', '9 NVLink Switches', '1.8 TB/s GPU-to-GPU bandwidth across all 72 GPUs.'],
            ['ph-plugs-connected', 'InfiniBand or Ethernet', 'Up to 400 Gb/s Quantum-2 InfiniBand or Spectrum-X Ethernet compute fabric.'],
            ['ph-hard-drives', '144 E1.S bays', 'PCIe 5.0 local storage across the compute trays.'],
            ['ph-wrench', 'End-to-end service', 'Consultation, parts, networking and onsite installation.']
        ],
        specs: [
            ['Rack', [
                ['Compute nodes', '18× 1U ARS-121GL-NBO'],
                ['Enclosure', '48U, 19-inch'],
                ['Dimensions (W × D × H)', '600 × 1068 × 2236 mm']
            ]],
            ['Compute', [
                ['GPUs', '72× NVIDIA B200'],
                ['CPUs', '36× NVIDIA Grace'],
                ['GPU memory', 'Up to 13.4 TB HBM3e'],
                ['System memory', 'Up to 17 TB LPDDR5X'],
                ['GPU interconnect', '9× NVLink Switches, 4 ports per compute tray, 1.8 TB/s GPU-to-GPU']
            ]],
            ['Networking & storage', [
                ['Compute fabric', 'Up to 400 Gb/s Quantum-2 InfiniBand or Spectrum-X Ethernet'],
                ['In-band management', 'Up to 200 Gb/s with BlueField-3 DPUs'],
                ['Out-of-band management', '1G / 10G Ethernet'],
                ['Storage', '144 E1.S PCIe 5.0 drive bays']
            ]],
            ['Power & cooling', [
                ['Power shelves', '8× 1U 33 kW (6× 5.5 kW PSUs each), 132 kW total'],
                ['Cooling', '1× in-rack 250 kW CDU with redundant PSUs and dual hot-swap pumps'],
                ['Alternative CDUs', 'In-row 1.3 MW; liquid-to-air 180 kW / 240 kW']
            ]]
        ],
        useCases: ['LLM training and inference', 'Trillion-parameter models', 'AI factories', 'HPC']
    },

    'smc-hgx-b300-8u': {
        model: 'SYS-822GS-NB3RT',
        sources: [['Supermicro SYS-822GS-NB3RT', 'https://www.supermicro.com/en/products/system/gpu/8u/sys-822gs-nb3rt'], ['HGX B300 front I/O systems datasheet', 'https://www.supermicro.com/datasheet/datasheet_SuperCluster_B300_Front_IO.pdf']],
        overview: [
            "This 8U air-cooled Supermicro system runs a full NVIDIA HGX B300 8-GPU board with 2.3 TB of HBM3e and eight integrated ConnectX-8 SuperNICs at 800 Gb/s. Its front-I/O layout keeps networking and service access on the cold aisle.",
            "It is the straightforward way to deploy Blackwell Ultra in existing air-cooled data centers. Intel Xeon 6 is shown here; AMD EPYC variants are also offered."
        ],
        highlights: [
            ['ph-graphics-card', 'HGX B300 8-GPU', '288 GB HBM3e per GPU, 2.3 TB per system, 1.8 TB/s NVLink.'],
            ['ph-plugs-connected', '8× ConnectX-8 SuperNICs', 'Eight 800G OSFP ports for the compute fabric.'],
            ['ph-cpu', 'Dual Intel Xeon 6700', 'Up to 86 cores per CPU and 350 W TDP.'],
            ['ph-memory', 'Up to 8 TB DDR5', '32 DIMM slots, up to 6400 MT/s.'],
            ['ph-wind', 'Air-cooled', 'Up to 12 heavy-duty fans; no liquid cooling infrastructure needed.'],
            ['ph-lightning', '3+3 redundant power', 'Six 6.6 kW Titanium-level power supplies.']
        ],
        specs: [
            ['Processor & memory', [
                ['CPUs', 'Dual Intel Xeon 6700 series with P-cores, up to 86C/172T, up to 336 MB cache, up to 350 W'],
                ['Memory', '32 DIMM slots; up to 4 TB DDR5-6400 (1DPC) or 8 TB DDR5-6000 (2DPC) ECC RDIMM']
            ]],
            ['GPU', [
                ['GPUs', 'NVIDIA HGX B300 8-GPU (288 GB each)'],
                ['GPU memory', '2.3 TB HBM3e per system'],
                ['Interconnect', 'NVIDIA NVLink with NVSwitch, 1.8 TB/s']
            ]],
            ['Storage & networking', [
                ['Drive bays', '8× front hot-swap E1.S NVMe'],
                ['Boot', '2× M.2 NVMe'],
                ['Compute network', '8× 800G OSFP (NVIDIA ConnectX-8 SuperNIC)'],
                ['LAN', '2× 10 GbE RJ45 (Intel X710)'],
                ['Expansion', '2× PCIe 5.0 x16 FHHL']
            ]],
            ['Chassis & power', [
                ['Form factor', '8U rackmount, front I/O'],
                ['Dimensions (H × W × D)', '356 × 449 × 950 mm'],
                ['Weight', '119 kg net'],
                ['Power', '6× 6.6 kW redundant (3+3) Titanium (96%)'],
                ['Cooling', 'Up to 12 heavy-duty fans'],
                ['Security', 'TPM 2.0, Silicon Root of Trust (NIST 800-193), Secure Boot'],
                ['OS support', 'RHEL 9.6 / 10.0, RHEL AI, Oracle Linux 9.6, VMware ESXi 8.0U3 / 9.x']
            ]]
        ],
        useCases: ['LLM training and inference', 'Conversational AI', 'Drug discovery', 'Financial services and fraud detection', 'Scientific research']
    },

    'smc-hgx-b300-4u-lc': {
        model: 'SYS-422GS-NB3RT-LCC',
        sources: [['Supermicro SYS-422GS-NB3RT-LCC', 'https://www.supermicro.com/en/products/system/gpu/4u/sys-422gs-nb3rt-lcc'], ['Supermicro DLC-2', 'https://www.supermicro.com/datasheet/Datasheet_Supermicro_DLC-2.pdf']],
        overview: [
            "This 4U Supermicro system packs a liquid-cooled NVIDIA HGX B300 8-GPU board into half the height of the air-cooled version. Direct-to-chip cold plates remove most of the heat, so racks can hold far more GPUs.",
            "It is part of Supermicro's DLC-2 stack, which runs on 45 °C warm water to cut chiller use, and ships as rack-level (L11) or cluster-level (L12) validated solutions."
        ],
        highlights: [
            ['ph-graphics-card', 'HGX B300 8-GPU', '2.3 TB HBM3e per system with 1.8 TB/s NVLink.'],
            ['ph-drop', 'DLC-2 liquid cooling', 'Direct-to-chip cold plates; up to 40% data center power savings.'],
            ['ph-thermometer', '45 °C warm water', 'Reduces water use and can eliminate chillers and compressors.'],
            ['ph-plugs-connected', '8× ConnectX-8 SuperNICs', 'Up to 800 Gb/s per GPU, plus 4 PCIe Gen 5 x16 slots.'],
            ['ph-rows', 'Dense racks', '4U per 8 GPUs for high GPU counts per rack.'],
            ['ph-check-circle', 'L11/L12 validated', 'Racks and clusters are tested before shipping.']
        ],
        specs: [
            ['Processor & memory', [
                ['CPUs', 'Dual Intel Xeon 6700 series with P-cores, up to 350 W'],
                ['Memory', '32 DIMMs; up to 8 TB at 5200 MT/s or 4 TB at 6400 MT/s DDR5 RDIMM']
            ]],
            ['GPU', [
                ['GPUs', 'NVIDIA HGX B300 8-GPU'],
                ['GPU memory', '2.3 TB HBM3e per system'],
                ['Interconnect', 'Fifth-generation NVLink, 1.8 TB/s']
            ]],
            ['Storage & networking', [
                ['Drive bays', '8× hot-swap E1.S NVMe'],
                ['Boot', '2× M.2 NVMe'],
                ['Compute network', '8× NVIDIA ConnectX-8 SuperNICs, up to 800 Gb/s'],
                ['Expansion', '4× PCIe Gen 5 x16']
            ]],
            ['Chassis, power & cooling', [
                ['Form factor', '4U rackmount'],
                ['Dimensions (W × H × D)', '448 × 174 × 896.8 mm'],
                ['Weight', '84.6 kg net'],
                ['Power', '4× 6.6 kW redundant (2+2) Titanium'],
                ['Cooling', 'Direct-to-chip (D2C) cold plates, Supermicro DLC-2']
            ]]
        ],
        useCases: ['Dense AI training clusters', 'High-throughput inference', 'Energy-efficient AI factories', 'HPC']
    },

    'smc-hgx-b300-orv3': {
        model: 'SYS-222GS-NB3OT-ALC',
        sources: [['Supermicro SYS-222GS-NB3OT-ALC', 'https://www.supermicro.com/en/products/system/gpu/2ou/sys-222gs-nb3ot-alc'], ['HGX B300 2-OU systems datasheet', 'https://www.supermicro.com/datasheet/datasheet_SuperCluster_B300_2OU_Systems.pdf']],
        overview: [
            "This 2-OU Supermicro system is the most compact HGX B300 platform, built for 21-inch OCP Open Rack V3. Up to 18 nodes, or 144 liquid-cooled Blackwell Ultra GPUs, fit in a single rack.",
            "Power arrives over the OCP 48–52 V DC busbar and cooling through blind-mate manifolds, which suits hyperscale and cloud operators standardising on OCP infrastructure."
        ],
        highlights: [
            ['ph-rows', '144 GPUs per rack', 'Up to 18 eight-GPU nodes in one ORV3 rack.'],
            ['ph-graphics-card', 'HGX B300 8-GPU', '2.3 TB HBM3e per node, 1.8 TB/s NVLink.'],
            ['ph-lightning', 'OCP ORV3 power', '1400 A busbar with power shelves and DC-SCM support.'],
            ['ph-drop', 'Direct-to-chip cooling', 'Cold plates on CPUs and GPUs for sustained full TDP.'],
            ['ph-plugs-connected', '8× ConnectX-8 SuperNICs', '800 Gb/s OSFP per GPU.'],
            ['ph-certificate', 'OCP Accepted', 'NVIDIA-Certified and OCP Accepted design.']
        ],
        specs: [
            ['Processor & memory', [
                ['CPUs', 'Dual Intel Xeon 6700 series with P-cores, up to 86C/172T, up to 350 W (liquid-cooled)'],
                ['Memory', '32 DIMM slots; up to 4 TB DDR5-6400 (1DPC) or 8 TB DDR5-6000 (2DPC)']
            ]],
            ['GPU', [
                ['GPUs', 'NVIDIA HGX B300 8-GPU (288 GB each)'],
                ['CPU-GPU interconnect', 'PCIe 5.0 x16'],
                ['GPU-GPU interconnect', 'NVIDIA NVLink with NVSwitch']
            ]],
            ['Storage & networking', [
                ['Drive bays', '8× front hot-swap E1.S NVMe'],
                ['Boot', '2× M.2 NVMe'],
                ['Compute network', '8× 800 Gb/s OSFP (ConnectX-8 SuperNIC)'],
                ['LAN', '2× 10 GbE RJ45; 1× 1 GbE BMC (DC-SCM)'],
                ['Expansion', '2× PCIe 5.0 x16 FHHL']
            ]],
            ['Chassis & power', [
                ['Form factor', '2-OU, 21-inch OCP ORV3'],
                ['Dimensions (H × W × D)', '94 × 537 × 805 mm'],
                ['Weight', '70 kg net'],
                ['Power', '48–52 V DC via OCP busbar'],
                ['Cooling', 'Direct-to-chip cold plates plus 4× 80 mm and 4× 40 mm fans'],
                ['Operating temperature', '10 °C to 35 °C'],
                ['Certifications', 'NVIDIA-Certified Systems, OCP Accepted']
            ]]
        ],
        useCases: ['Hyperscale AI training', 'Cloud GPU services', 'Large-scale inference', 'HPC']
    },

    'smc-hgx-b200-air': {
        model: 'SYS-822GS-NBRT',
        sources: [['Supermicro SYS-822GS-NBRT', 'https://www.supermicro.com/en/products/system/gpu/8u/sys-822gs-nbrt'], ['NVIDIA Blackwell solutions at Supermicro', 'https://www.supermicro.com/en/accelerators/nvidia']],
        overview: [
            "Supermicro's air-cooled HGX B200 systems carry its best-selling eight-GPU architecture into the Blackwell generation, with an improved thermal design and front or rear I/O options. Up to four 8U/10U systems fit in a rack.",
            "Supermicro reports the same performance from these air-cooled systems as from its liquid-cooled HGX B200 servers, which makes them a simple path to Blackwell for air-cooled facilities."
        ],
        highlights: [
            ['ph-graphics-card', 'HGX B200 8-GPU', '180 GB HBM3e per GPU, 1.4 TB per system, 1.8 TB/s NVLink.'],
            ['ph-cpu', 'Dual Intel Xeon 6', 'Up to 86 cores per CPU; AMD EPYC options also available.'],
            ['ph-memory', 'Up to 8 TB DDR5', '32 DIMM slots.'],
            ['ph-arrows-left-right', '10 PCIe 5.0 slots', '8× x16 low-profile for 1:1 GPU-to-NIC networking plus 2× x16 FHHL.'],
            ['ph-wind', 'Air-cooled', '12 heavy-duty fans; matches liquid-cooled performance within margin.'],
            ['ph-lightning', 'Redundant power', '6× 6.6 kW Titanium supplies (3+3).']
        ],
        specs: [
            ['Processor & memory', [
                ['CPUs', 'Dual Intel Xeon 6700/6500 series with P-cores, up to 86C/172T, 336 MB cache, 350 W'],
                ['Memory', '32 DIMM slots; up to 4 TB DDR5-6400 (1DPC) or 8 TB DDR5-5200 (2DPC) ECC RDIMM']
            ]],
            ['GPU', [
                ['GPUs', 'NVIDIA HGX B200 8-GPU SXM'],
                ['GPU memory', '180 GB HBM3e per GPU (1.4 TB per system)'],
                ['Interconnect', 'NVIDIA NVLink with NVSwitch']
            ]],
            ['Storage & expansion', [
                ['Drive bays', '8× hot-swap E1.S NVMe'],
                ['Boot', '2× M.2 PCIe 5.0 x4 with RAID'],
                ['Expansion', '8× PCIe 5.0 x16 LP, 2× PCIe 5.0 x16 FHHL'],
                ['LAN', '2× 10 GbE RJ45 (Intel X710), 1× 1 GbE BMC']
            ]],
            ['Chassis & power', [
                ['Form factor', '8U rackmount (10U variants available)'],
                ['Dimensions (H × W × D)', '356 × 449 × 950 mm'],
                ['Weight', '133 kg net'],
                ['Power', '6× 6.6 kW redundant Titanium (96%)'],
                ['Cooling', '12 heavy-duty PWM fans'],
                ['Rack density', 'Up to 4 systems / 32 GPUs per rack'],
                ['Security', 'TPM 2.0, Silicon Root of Trust, Secure Boot']
            ]]
        ],
        useCases: ['LLM and generative AI', 'AI training and inference', 'HPC', 'Drug discovery', 'Financial services', 'Autonomous vehicle development']
    },

    'smc-hgx-b200-lc': {
        model: 'SYS-422GS-NBRT-LCC',
        sources: [['Supermicro SYS-422GS-NBRT-LCC', 'https://www.supermicro.com/en/products/system/gpu/4u/sys-422gs-nbrt-lcc'], ['B200 4U liquid-cooled SuperCluster datasheet', 'https://www.supermicro.com/datasheet/datasheet_SuperCluster_B200_4U_Liquid_Cooled.pdf']],
        overview: [
            "This 4U liquid-cooled Supermicro server runs an NVIDIA HGX B200 8-GPU board with direct-to-chip cold plates. Eight systems with 64 GPUs fit in a 42U rack, or twelve systems with 96 GPUs in a 52U rack.",
            "Supermicro's direct liquid cooling captures most system heat at the source, cutting data center power by up to 40% and running at noise levels as low as 50 dB."
        ],
        highlights: [
            ['ph-graphics-card', 'HGX B200 8-GPU', '1.44 TB of GPU memory with NVLink and NVSwitch.'],
            ['ph-drop', 'Direct liquid cooling', 'Cold plates on CPUs and GPUs; up to 40% data center power savings.'],
            ['ph-rows', 'Up to 96 GPUs per rack', '12 systems in a 52U rack, or 64 GPUs in 42U.'],
            ['ph-cpu', 'Dual Intel Xeon 6700', 'Up to 86 cores and 350 W per CPU.'],
            ['ph-arrows-left-right', '10 PCIe 5.0 slots', '8× x16 LP for networking plus 2× x16 FHHL.'],
            ['ph-lightning', 'Redundant power', '4× 6.6 kW Titanium (2+2).']
        ],
        specs: [
            ['Processor & memory', [
                ['CPUs', 'Dual Intel Xeon 6700 series with P-cores, up to 86C/172T, 336 MB cache, up to 350 W'],
                ['Memory', '32 DIMM slots; up to 4 TB DDR5-6400 (1DPC) or 8 TB DDR5-6000 (2DPC)']
            ]],
            ['GPU', [
                ['GPUs', 'NVIDIA HGX B200 8-GPU (180 GB each)'],
                ['GPU memory', '1.44 TB per system'],
                ['Interconnect', 'NVIDIA NVLink with NVSwitch']
            ]],
            ['Storage & expansion', [
                ['Drive bays', '8× front hot-swap E1.S NVMe'],
                ['Boot', '2× M.2 NVMe with RAID'],
                ['Expansion', '8× PCIe 5.0 x16 LP, 2× PCIe 5.0 x16 FHHL'],
                ['LAN', '2× 10 GbE RJ45 (Intel X710-AT2)']
            ]],
            ['Chassis & power', [
                ['Form factor', '4U rackmount, front I/O'],
                ['Dimensions (H × W × D)', '174 × 448 × 991 mm'],
                ['Weight', '85 kg net'],
                ['Power', '4× 6.6 kW redundant (2+2) Titanium (96%)'],
                ['Cooling', 'Direct-to-chip cold plates, 4× 80 mm fans'],
                ['Security', 'TPM 2.0, Silicon Root of Trust, Secure Boot, remote attestation']
            ]]
        ],
        useCases: ['AI and deep learning training', 'LLM and multimodal model development', 'Inference at scale', 'HPC']
    },

    'smc-rtx-pro-server': {
        sources: [['Supermicro RTX PRO Blackwell Server Edition solutions', 'https://www.supermicro.com/en/accelerators/nvidia/supermicro-rtx-pro-bse'], ['Supermicro PCIe GPU systems', 'https://www.supermicro.com/en/accelerators/nvidia/pcie-gpu']],
        overview: [
            "Supermicro offers more than 20 systems qualified for the NVIDIA RTX PRO 6000 Blackwell Server Edition, from 2U edge-friendly servers to 5U systems with up to eight GPUs. They form the basis of NVIDIA RTX PRO Servers for enterprise AI factories.",
            "The same platforms also accept H200 NVL, L40S and other PCIe GPUs, so one standard air-cooled server design can cover inference, fine-tuning, rendering and virtual workstations."
        ],
        highlights: [
            ['ph-graphics-card', 'RTX PRO 6000 Blackwell', '2x the memory of L40S, GDDR7, PCIe 5.0 and MIG with up to 4 instances per GPU.'],
            ['ph-squares-four', 'NVIDIA MGX systems', 'Modular designs with up to 4 GPUs in 2U or 8 GPUs in 4U.'],
            ['ph-hard-drives', '5U PCIe systems', 'Thermally optimised chassis for up to 10 GPUs, or 8 RTX PRO 6000, air-cooled.'],
            ['ph-cpu', 'Intel or AMD', 'Single- or dual-socket Intel Xeon 6 and AMD EPYC configurations.'],
            ['ph-broadcast', 'Data center to edge', 'Options from full-depth racks to short-depth edge servers.']
        ],
        specs: [
            ['Platform options', [
                ['2U MGX', 'Up to 4 double-width GPUs'],
                ['4U MGX', 'Up to 8 double-width GPUs'],
                ['5U PCIe GPU systems', 'Up to 10 GPUs (up to 8× RTX PRO 6000 Blackwell), air-cooled'],
                ['CPUs', 'Intel Xeon 6 or AMD EPYC, single or dual socket']
            ]],
            ['Supported GPUs', [
                ['NVIDIA RTX PRO 6000 Blackwell Server Edition', '96 GB GDDR7, MIG up to 4 instances'],
                ['NVIDIA H200 NVL', '141 GB HBM3e, NVLink bridge'],
                ['NVIDIA L40S', '48 GB GDDR6']
            ]]
        ],
        useCases: ['AI inference and fine-tuning', 'Agentic AI', 'Rendering and 3D', 'Digital twins', 'Scientific simulation', 'Cloud gaming and VDI']
    },

    'smc-super-ai-station': {
        model: 'ARS-511GD-NB-LCC',
        sources: [['Supermicro Super AI Station', 'https://www.supermicro.com/en/accelerators/nvidia/super-ai-station'], ['Super AI Station datasheet', 'https://www.supermicro.com/datasheet/datasheet_Supermicro_Super_AI_Station.pdf']],
        overview: [
            "The Supermicro Super AI Station is a deskside AI supercomputer built on the NVIDIA GB300 Grace Blackwell Ultra Desktop Superchip, with 748 GB of coherent memory and 20 PFLOPS of FP4 AI performance.",
            "A closed-loop liquid cooling system keeps it near-silent, it runs from a standard power outlet, and it can stand under a desk or mount in a 5U rack slot."
        ],
        highlights: [
            ['ph-cpu', 'GB300 Desktop Superchip', 'One Blackwell Ultra GPU and a 72-core Grace CPU.'],
            ['ph-memory', '748 GB coherent memory', '252 GB HBM3e GPU memory plus 496 GB LPDDR5X.'],
            ['ph-lightning', '20 PFLOPS FP4', 'Data center-class AI performance at the desk.'],
            ['ph-drop', 'Closed-loop liquid cooling', 'Near-silent operation in offices and labs.'],
            ['ph-plugs-connected', 'Dual 400 Gb/s', 'Integrated ConnectX-8 SuperNIC networking.'],
            ['ph-users-three', 'Up to 7 MIG instances', 'Share one system across a team.']
        ],
        specs: [
            ['Compute', [
                ['Superchip', 'NVIDIA GB300 Grace Blackwell Ultra Desktop'],
                ['CPU', '1× NVIDIA Grace, 72-core Arm Neoverse V2'],
                ['GPU', '1× NVIDIA Blackwell Ultra'],
                ['AI performance', '20 PFLOPS FP4'],
                ['MIG', 'Up to 7 instances']
            ]],
            ['Memory, storage & network', [
                ['GPU memory', '252 GB HBM3e'],
                ['System memory', '496 GB LPDDR5X'],
                ['Total coherent memory', '748 GB'],
                ['Storage', '4× M.2 PCIe 5.0 NVMe'],
                ['Networking', 'Dual-port 400 Gb/s, NVIDIA ConnectX-8 SuperNIC']
            ]],
            ['System', [
                ['Form factor', 'Tower (deskside) or 5U rackmount'],
                ['Cooling', 'Closed-loop liquid cooling'],
                ['Power', '1,600 W, standard outlet'],
                ['Operating system', 'Ubuntu with NVIDIA AI developer tools']
            ]]
        ],
        useCases: ['Local model development', 'Fine-tuning and inference', 'Agentic AI prototyping', 'Research labs and universities', 'Data-sensitive on-premises AI']
    },

    'smc-hyper': {
        sources: [['Supermicro Hyper', 'https://www.supermicro.com/en/products/hyper'], ['H14 Hyper datasheet', 'https://www.supermicro.com/datasheet/h14/datasheet_H14_Hyper.pdf']],
        overview: [
            "Supermicro Hyper is the flagship rackmount family for performance-hungry enterprise workloads. X14 Hyper systems use Intel Xeon 6 processors and H14 Hyper systems use AMD EPYC 9005/9004, in 1U and 2U chassis with tool-less, hot-swappable components.",
            "With large memory capacity, CXL 2.0 support and extensive storage and I/O expansion, Hyper servers suit virtualization, databases and mission-critical applications, and are part of Supermicro's Data Center Building Block Solutions."
        ],
        highlights: [
            ['ph-cpu', 'Latest CPUs', 'Intel Xeon 6 (X14) or AMD EPYC 9005/9004 with up to 192 cores per CPU (H14).'],
            ['ph-memory', 'Up to 9 TB memory', '24 DIMM slots of DDR5-6000 on H14; MRDIMM support on X14.'],
            ['ph-arrows-left-right', 'CXL 2.0 ready', 'Memory expansion and new interconnect options.'],
            ['ph-hard-drives', 'Flexible storage', 'All-NVMe and hybrid 2.5" and 3.5" drive configurations.'],
            ['ph-wrench', 'Tool-less design', 'Hot-swappable components for fast servicing.']
        ],
        specs: [
            ['X14 Hyper (Intel)', [
                ['CPUs', 'Single or dual Intel Xeon 6 (6900 / 6700 / 6500 series)'],
                ['Form factor', '1U or 2U'],
                ['Memory', 'DDR5 RDIMM and MRDIMM, CXL 2.0']
            ]],
            ['H14 Hyper (AMD)', [
                ['CPUs', 'Dual AMD EPYC 9005 / 9004, up to 192 cores per CPU, up to 500 W'],
                ['Memory', '24 DIMM slots, up to 9 TB DDR5-6000 ECC RDIMM'],
                ['Form factor', '1U or 2U']
            ]],
            ['Common', [
                ['Storage', 'All-NVMe and hybrid NVMe / SAS / SATA options'],
                ['Networking', 'AIOM / OCP 3.0 and PCIe 5.0 add-on cards'],
                ['Example model', 'SYS-222HA-TN']
            ]]
        ],
        useCases: ['Virtualization and private cloud', 'Databases and in-memory analytics', 'Enterprise applications', 'HPC', 'Hyper-converged infrastructure']
    },

    'smc-cloud-dc': {
        sources: [['Supermicro CloudDC', 'https://www.supermicro.com/en/products/clouddc'], ['CloudDC AS -1116CS-TN', 'https://www.supermicro.com/en/products/system/datasheet/as-1116cs-tn']],
        overview: [
            "Supermicro CloudDC is an all-in-one 1U/2U platform for cloud data centers, built on the OCP Data Center Modular Hardware System (DC-MHS) standard. It offers flexible I/O and storage with dual AIOM (OCP 3.0) slots for high network throughput.",
            "Tool-less, hot-swap serviceability and single- or dual-socket Intel Xeon 6 or AMD EPYC options make it a cost-optimised building block for hosting and cloud service providers."
        ],
        highlights: [
            ['ph-cube', 'DC-MHS design', 'Industry-standard modular hardware that simplifies fleet management.'],
            ['ph-plugs', 'Dual AIOM slots', 'PCIe 5.0, OCP 3.0-compliant networking for maximum throughput.'],
            ['ph-hard-drives', 'Up to 12 NVMe', 'High-performance local storage for cloud instances.'],
            ['ph-wrench', 'Tool-less servicing', 'Fast hot-swap maintenance in space-constrained data centers.'],
            ['ph-graphics-card', 'GPU-capable', 'Up to two single-width GPUs in suitable models.']
        ],
        specs: [
            ['Platform', [
                ['CPUs', 'Intel Xeon 6700 / 6500 or AMD EPYC 9005 / 9004, single or dual socket'],
                ['Form factor', '1U / 2U'],
                ['Expansion', '2 or 4 PCIe 5.0 x16 slots plus dual AIOM (OCP 3.0)'],
                ['Storage', 'Up to 12 NVMe drives'],
                ['GPU', 'Up to 2 single-width GPUs'],
                ['Standard', 'OCP DC-MHS']
            ]]
        ],
        models: [
            ['SYS-112C-TN', '1U, Intel Xeon 6'],
            ['SYS-122C-TN', '1U, Intel Xeon 6, dual socket'],
            ['AS -1116CS-TN', '1U, AMD EPYC 9005 / 9004']
        ],
        useCases: ['Web hosting', 'Public and private cloud', 'VPS platforms', 'Content delivery', 'Scale-out applications']
    },

    'smc-twin': {
        sources: [['Supermicro GrandTwin AS -2116GT-HNTF', 'https://www.supermicro.com/en/products/system/grandtwin/2u/as-2116gt-hntf'], ['BigTwin datasheet', 'https://www.supermicro.com/datasheet/datasheet_BigTwin.pdf']],
        overview: [
            "Supermicro Twin systems place several independent server nodes in one 2U chassis that share redundant Titanium-level power supplies and cooling. This raises compute density and lowers cost and power per node.",
            "BigTwin provides four dual-processor nodes in 2U for performance-focused clusters, while GrandTwin provides four single-processor nodes with front or rear I/O for scale-out cloud, HCI and HPC."
        ],
        highlights: [
            ['ph-squares-four', '4 nodes in 2U', 'Independent hot-pluggable nodes in a shared chassis.'],
            ['ph-lightning', 'Shared Titanium power', 'Redundant high-efficiency power supplies serve all nodes.'],
            ['ph-cpu', 'Intel or AMD', 'Intel Xeon or AMD EPYC 9005/9004 with up to 192 cores per node.'],
            ['ph-memory', 'Up to 4 TB per node', 'DDR5 memory on current GrandTwin models.'],
            ['ph-arrows-left-right', 'Front or rear I/O', 'GrandTwin options for different data center layouts.']
        ],
        specs: [
            ['GrandTwin', [
                ['Nodes', '2U, 4 single-socket nodes'],
                ['CPUs', 'AMD EPYC 9005 / 9004 (up to 192 cores) or Intel Xeon, per model'],
                ['Memory', 'Up to 4 TB DDR5 per node'],
                ['Storage', '4 to 6 hot-swap NVMe / SATA bays per node'],
                ['Power', '2200 W redundant Titanium (model dependent)']
            ]],
            ['BigTwin', [
                ['Nodes', '2U, 4 dual-socket nodes'],
                ['Storage', 'Up to 24× 2.5" or 12× 3.5" NVMe / SAS / SATA per chassis'],
                ['Power', 'Redundant Titanium-level power supplies']
            ]]
        ],
        models: [
            ['AS -2116GT-HNTF', 'GrandTwin 2U 4-node, AMD EPYC 9005 / 9004'],
            ['AS -2115GT-HNTR', 'GrandTwin 2U 4-node, rear I/O, 6 bays per node'],
            ['SYS-211GT-HNC8F', 'GrandTwin 2U 4-node, Intel Xeon Scalable']
        ],
        useCases: ['HPC clusters', 'Hyper-converged infrastructure', 'Cloud and hosting', 'Virtualization farms']
    },

    'smc-superblade': {
        sources: [['Supermicro SuperBlade', 'https://www.supermicro.com/en/products/superblade'], ['Supermicro MicroBlade', 'https://www.supermicro.com/en/products/microblade']],
        overview: [
            "Supermicro SuperBlade and MicroBlade are blade architectures that share power, cooling, networking and management across many server nodes in one enclosure, cutting cabling and energy use while maximising density.",
            "SuperBlade targets HPC and enterprise clusters with Intel Xeon 6 blades and optional liquid cooling; MicroBlade targets ultra-dense, scale-out cloud with low-power processors."
        ],
        highlights: [
            ['ph-rows', '20 blades in 8U', 'Each single-width SuperBlade node uses just 0.4U of rack space.'],
            ['ph-stack', 'Up to 120 nodes per rack', 'SuperBlade in a standard 48U rack; MicroBlade reaches 320 nodes.'],
            ['ph-network', 'Integrated switching', 'Ethernet and InfiniBand switch modules inside the enclosure.'],
            ['ph-drop', 'Optional liquid cooling', 'For high-TDP Intel Xeon 6 processors.'],
            ['ph-lightning', 'N+N redundancy', 'Shared, redundant power and management modules.']
        ],
        specs: [
            ['8U SuperBlade', [
                ['Nodes', 'Up to 20 blades'],
                ['CPUs', 'Intel Xeon 6700 / 6500'],
                ['Memory', 'Up to 16 DDR5 MRDIMM 8000 MT/s per blade'],
                ['Rack density', 'Up to 120 nodes per 48U rack'],
                ['Cooling', 'Air or optional liquid cooling']
            ]],
            ['6U SuperBlade', [
                ['Nodes', 'Up to 10 blades'],
                ['CPUs', 'Intel Xeon 6900 series options'],
                ['Cooling', 'Air or liquid cooling']
            ]],
            ['6U MicroBlade', [
                ['Nodes', 'Up to 20 server blades'],
                ['Networking', '2 Ethernet switches, 2 management modules'],
                ['Rack density', 'Up to 320 nodes per 48U rack'],
                ['Redundancy', 'N+N']
            ]]
        ],
        useCases: ['HPC clusters', 'Private cloud', 'Cloud service providers', 'Enterprise data centers', 'SAP HANA (certified configurations)']
    },

    'smc-petascale': {
        sources: [['Supermicro X14 Petascale datasheet', 'https://www.supermicro.com/datasheet/datasheet_X14_Petascale.pdf'], ['Petascale with NVIDIA Grace', 'https://www.supermicro.com/en/products/petascale-grace-storage']],
        overview: [
            "Supermicro Petascale servers are all-flash NVMe storage systems built around EDSFF E3.S drives. A symmetrical layout keeps signal paths short and airflow even, so they can feed GPU clusters and AI data pipelines with high throughput and low latency.",
            "They are used as the building block for software-defined and parallel file systems, and are available with Intel Xeon, AMD EPYC or NVIDIA Grace CPU Superchip processors."
        ],
        highlights: [
            ['ph-hard-drives', 'E3.S all-flash', 'Up to 16 E3.S drives in 1U or 32 in 2U.'],
            ['ph-database', 'Petabyte scale', 'Hundreds of terabytes in 1U and up to a petabyte in 2U with high-capacity drives.'],
            ['ph-lightning', 'PCIe 5.0 and DDR5', 'Twice the I/O bandwidth of PCIe 4.0 for GPU data feeds.'],
            ['ph-memory', 'CXL memory', '1U models support E3.S 2T bays for CXL memory modules.'],
            ['ph-cpu', 'Grace option', 'NVIDIA Grace CPU Superchip models for energy-efficient software-defined storage.']
        ],
        specs: [
            ['1U Petascale', [
                ['Drive bays', 'Up to 16 hot-swap E3.S, or 8 E3.S plus 4 E3.S 2T (CXL)'],
                ['Capacity', 'Up to 256 TB with current E3.S Gen 5 drives']
            ]],
            ['2U Petascale', [
                ['Drive bays', 'Up to 32 hot-swap E3.S'],
                ['Capacity', 'Up to about 0.5 PB, rising to 1 PB with 30 TB-class drives'],
                ['Sockets', 'Single- and dual-processor models']
            ]],
            ['Platform', [
                ['CPUs', 'Intel Xeon, AMD EPYC or NVIDIA Grace CPU Superchip, per model'],
                ['I/O', 'PCIe 5.0'],
                ['Memory', 'DDR5'],
                ['Example model', 'SSG-222B-NE3X24R']
            ]]
        ],
        useCases: ['AI training data storage', 'Parallel file systems (WEKA, DDN, VAST and others)', 'Data lakes', 'High-performance databases', 'Media workflows']
    },

    'smc-top-loading': {
        sources: [['Supermicro SSG-640SP-E1CR90', 'https://www.supermicro.com/en/products/system/storage/4u/ssg-640sp-e1cr90'], ['Supermicro storage chassis and JBODs', 'https://www.supermicro.com/en/products/storage/chassis']],
        overview: [
            "Supermicro top-loading storage servers fit 60 or 90 hot-swap 3.5\" drives into 4U, with drives serviced from the top of the chassis. They deliver multiple petabytes per rack unit group for cloud-scale object storage, backup and archive.",
            "Matching top-loading JBOD enclosures add capacity behind a head server over 12 Gb/s SAS, in single- or dual-path configurations."
        ],
        highlights: [
            ['ph-archive', '90 bays in 4U', 'Up to 2.8 PB raw per system with 32 TB drives.'],
            ['ph-arrows-down-up', 'Top-loading service', 'Swap drives without removing the system from the rack.'],
            ['ph-lightning', 'NVMe cache', 'M.2 and SSD slots for metadata and caching tiers.'],
            ['ph-stack', 'JBOD expansion', '60- and 90-bay SAS3 enclosures, single- or dual-path.'],
            ['ph-leaf', 'Titanium power', 'Redundant 96%-efficient power supplies.']
        ],
        specs: [
            ['SSG-640SP-E1CR90 storage server', [
                ['Drive bays', '90× hot-swap 3.5" SAS / SATA (60-bay models also available)'],
                ['Raw capacity', 'Up to 2.8 PB (90× 32 TB)'],
                ['Boot / cache', '2× M.2 PCIe, 2× internal slim SATA SSD'],
                ['CPUs', 'Dual Intel Xeon Scalable'],
                ['Memory', '16 DIMM slots, up to 4 TB'],
                ['Power', '2× 2600 W redundant Titanium (96%)'],
                ['Dimensions (H × W × D)', '177 × 447 × 1099 mm']
            ]],
            ['Top-loading JBODs', [
                ['SC947HE2C-R2K05JBOD', '4U, 90× 3.5" SAS3 12 Gb/s, dual-path, 2000 W redundant Titanium'],
                ['SC947SE1C-R1K66JBOD', '4U, 60× 3.5" SAS3 12 Gb/s, single-path, 1600 W redundant Platinum']
            ]]
        ],
        useCases: ['Object storage (Ceph, MinIO and others)', 'Backup targets', 'Archive', 'Video surveillance retention', 'Cold data tiers for AI']
    },

    'smc-edge': {
        sources: [['Supermicro Edge AI and IoT systems', 'https://www.supermicro.com/en/products/edge/servers'], ['Supermicro Edge AI solutions', 'https://www.supermicro.com/en/solutions/edge-ai']],
        overview: [
            "Supermicro edge systems bring AI inference and compute to retail stores, factories, telco sites and branch offices. The range spans short-depth rackmount servers with front I/O, compact wall- and closet-mount servers and fanless embedded boxes.",
            "GPU options from low-profile NVIDIA L4 cards to multiple double-width data center GPUs let you run video analytics, vision AI and 5G workloads close to where data is created."
        ],
        highlights: [
            ['ph-ruler', 'Short-depth chassis', 'Fits telco cabinets, shallow racks, walls and closets.'],
            ['ph-graphics-card', 'GPU acceleration', 'From low-profile NVIDIA L4 to three double-width GPUs (Hyper-E).'],
            ['ph-cell-signal-full', 'Telco-ready', 'Intel Xeon 6 SoC systems with eight 25 GbE ports for 5G and MEC.'],
            ['ph-thermometer', 'Fanless options', 'NVIDIA Jetson Orin NX-based compact systems for harsh environments.'],
            ['ph-arrows-left-right', 'Front or rear I/O', 'Service from the side that suits the site.']
        ],
        specs: [
            ['Representative systems', [
                ['Hyper-E SYS-221HE', 'Dual-socket, short-depth, front I/O, up to 3 double-width GPUs, up to 8 TB memory'],
                ['SYS-112D-42C-FN8P', '1U compact telco edge server, Intel Xeon 6 SoC, 8× 25 GbE'],
                ['SYS-E403-14B-FRN2T', 'Short-depth IoT server for walls and closets, 2 slots for low-profile GPUs such as NVIDIA L4'],
                ['Fanless systems', 'NVIDIA Jetson Orin NX-based compact edge AI']
            ]]
        ],
        useCases: ['Edge AI inference', 'Video analytics', 'Smart retail', '5G, O-RAN and MEC', 'Industrial automation']
    },

    'smc-networking': {
        sources: [['Supermicro networking switches', 'https://www.supermicro.com/en/products/networking/switches'], ['Supermicro AI networking switch portfolio', 'https://www.supermicro.com/solutions/Solution_Brief_Networking_Switch_Portfolio.pdf']],
        overview: [
            "Supermicro networking covers Ethernet switches, network adapters, cables and transceivers that are validated with Supermicro servers and racks. That makes it simple to source a complete, tested AI or enterprise cluster from one vendor.",
            "The range runs from management switches to 800G leaf and spine switches for AI fabrics, plus 10G to 400G adapters."
        ],
        highlights: [
            ['ph-network', '800G AI switching', 'High-density 800G OSFP switches for leaf, spine and super-spine.'],
            ['ph-plugs', '400G adapters', 'PCIe 5.0 400GbE NICs for GPU servers.'],
            ['ph-link', 'Validated optics and cables', 'DAC, AOC and transceivers qualified with Supermicro systems.'],
            ['ph-check-circle', 'Rack-level integration', 'Switches cabled and tested as part of L11/L12 racks.']
        ],
        specs: [
            ['Switches', [
                ['SSE-T8164', '64× 800G OSFP + 2× 25G SFP28, 2RU, leaf / spine / super-spine'],
                ['SSE-T8196', '64× 400G QSFP112 downlinks + 32× 800G OSFP uplinks, high-density AI leaf']
            ]],
            ['Adapters & cabling', [
                ['AOC-S400G-B1C-P', '400GbE, Broadcom BCM57608, PCIe 5.0 x16, 1× QSFP-DD (400/200/100/50/25/10 Gb)'],
                ['Adapter range', '10G / 25G / 100G / 200G / 400G Ethernet and InfiniBand'],
                ['Cables', '800G OSFP AOC (5 m, 10 m); DAC up to 4 m']
            ]]
        ],
        useCases: ['AI cluster fabrics', 'Top-of-rack switching', 'Cluster management networks', 'Storage networks']
    },

    'smc-dcbbs': {
        sources: [['Supermicro Data Center Building Block Solutions', 'https://www.supermicro.com/en/solutions/dcbbs'], ['Supermicro DLC-2 datasheet', 'https://www.supermicro.com/datasheet/Datasheet_Supermicro_DLC-2.pdf']],
        overview: [
            "Supermicro Data Center Building Block Solutions (DCBBS) package everything needed to build a liquid-cooled AI data center: compute, storage, networking, racks, liquid cooling, power, management software and professional services.",
            "Racks and clusters are integrated and tested at rack level (L11) or cluster level (L12) before shipping, which shortens the time from delivery to production."
        ],
        highlights: [
            ['ph-buildings', 'Complete data center', 'From individual GPUs and switches to full racks, site infrastructure and services.'],
            ['ph-check-circle', 'L11/L12 validation', 'Rack and cluster testing before shipment for turnkey deployment.'],
            ['ph-drop', 'DLC-2 liquid cooling', 'Up to 40% lower electricity cost and up to 20% lower TCO.'],
            ['ph-thermometer', 'Warm-water operation', '45 °C inlet water reduces chiller and water use.'],
            ['ph-sliders', 'Management software', 'Infrastructure and cluster management included.']
        ],
        specs: [
            ['Scope', [
                ['Building blocks', 'Compute, storage, networking, racks, liquid cooling, power, software, services'],
                ['Validation', 'Rack-level (L11) and cluster-level (L12) testing'],
                ['Cooling', 'DLC-2 direct liquid cooling with CDUs and cooling towers'],
                ['DLC-2 benefits', 'Up to 40% power savings, up to 20% lower TCO, 45 °C warm water']
            ]]
        ],
        useCases: ['New AI data center builds', 'Liquid-cooled GPU clusters', 'Rapid AI factory deployment', 'Data center expansion']
    },

    /* ================================================================ Supermicro Gold Series */

    "smc-gold-sys-112h-tn-02-g2": {
        model: "SYS-112H-TN-02-G2",
        sources: [['Supermicro Gold Series', "https://www.supermicro.com/en/products/gold-series"], ["SYS-112H-TN-02-G2 datasheet", "https://www.supermicro.com/en/products/system/datasheet/sys-112h-tn-02-g2"]],
        overview: [
            "The Supermicro SYS-112H-TN-02-G2 is a pre-configured Gold Series Hyper SuperServer, recommended by Supermicro for IaaS – Compute/Virtualization Bare Metal. It ships with 1× Intel Xeon 6731P (32C/2.5GHz), 1TB DDR5-6000 of memory and 2× 960GB M.2 NVMe SSD, with networking (1× quad 25GbE SFP28) already installed.",
            "It is built on the Hyper SuperServer platform: 1U single-socket Hyper supporting up to 12 hot-swap 2.5\" NVMe/SAS/SATA bays and up to 3 PCIe 5.0 + 1 PCIe 5.0 AIOM slots. Gold Series systems are Supermicro's best-selling configurations: every component is installed and tested before shipping, and in most cases the system leaves Supermicro's warehouse within a few days, ready to rack and power on."
        ],
        highlights: [
            ["ph-cpu", "Processors", "1× Intel Xeon 6731P (32C/2.5GHz)"],
            ["ph-memory", "Memory", "1TB DDR5-6000"],
            ["ph-hard-drives", "Storage", "2× 960GB M.2 NVMe SSD"],
            ["ph-plugs-connected", "Networking", "1× quad 25GbE SFP28"],
            ["ph-lightning", "Power", "2× 1200W Titanium Level"],
            ["ph-truck", "Ready to ship", "Pre-configured and pre-tested; in most cases ships from Supermicro within a few days."]
        ],
        specs: [
            ["Gold Series configuration (as shipped)", [
                ["Processors", "1× Intel Xeon 6731P (32C/2.5GHz)"],
                ["Memory", "1TB DDR5-6000"],
                ["Storage", "2× 960GB M.2 NVMe SSD"],
                ["Networking", "1× quad 25GbE SFP28"],
                ["Power", "2× 1200W Titanium Level"]
            ]],
            ["Platform", [
                ["Form factor", "1U Rackmount"],
                ["Dimensions (W × H × D)", "437 x 43 x 778.7mm (17.2\" x 1.7\" x 30.66\")"],
                ["Processor support", "Single Socket E2 (LGA-4710); Intel Xeon 6700/6500 series processors with P-cores or 6700 series processors with E-cores; P-cores: Up to 86C/172T; Up to 336MB Cache; E-cores: Up to 144C/144T; Up to 108MB Cache"],
                ["Motherboard", "Super X14SBH"],
                ["Chassis", "CSE-HS101-R000NFP"]
            ]],
            ["GPU support", [
                ["Max GPU Count", "Up to 1 double-width or 3 single-width GPUs"],
                ["NVIDIA PCIe", "L4, L40S, NVIDIA RTX PRO 4500 Blackwell Server Edition"],
                ["Intel PCIe", "Intel Data Center GPU Flex 170"],
                ["CPU-GPU Interconnect", "PCIe 5.0 x16 CPU-to-GPU Interconnect"]
            ]],
            ["Memory & storage", [
                ["Slot Count", "16 DIMM slots"],
                ["Max Memory (1DPC)", "Up to 2TB 6400MT/s ECC DDR5 RDIMM"],
                ["Max Memory (1DPC)", "Up to 512GB 8000MT/s ECC DDR5 MRDIMM"],
                ["Max Memory (2DPC)", "Up to 4TB 6000MT/s ECC DDR5 RDIMM"],
                ["Drive bays / M.2", "2 M.2 NVMe slots (M-key 2280/22110/25110; VROC required for RAID)"]
            ]],
            ["I/O, power & cooling", [
                ["LAN", "1 RJ45 1 GbE Dedicated BMC LAN port"],
                ["USB", "2 USB 3.2 Gen1 ports (Rear); 1 USB 3.2 Gen1 port (Front)"],
                ["Video", "1 VGA port"],
                ["Power supplies", "2x 1200W Redundant (1 + 1) Titanium Level (96%) power supplies"],
                ["Cooling", "Up to 8 counter-rotating 40x40x56mm Fan(s)"]
            ]],
            ["Physical & environment", [
                ["Net weight", "19.2 lbs (8.7 kg)"],
                ["Operating temperature", "10°C to 35°C (50°F to 95°F)"]
            ]]
        ],
        useCases: ["IaaS – Compute/Virtualization Bare Metal"]
    },

    "smc-gold-as-2115hs-tnr-02-g2": {
        model: "AS -2115HS-TNR-02-G2",
        sources: [['Supermicro Gold Series', "https://www.supermicro.com/en/products/gold-series"], ["AS -2115HS-TNR-02-G2 datasheet", "https://www.supermicro.com/en/products/system/datasheet/as%20-2115hs-tnr-02-g2"]],
        overview: [
            "The Supermicro AS -2115HS-TNR-02-G2 is a pre-configured Gold Series Hyper A+ Server, recommended by Supermicro for In-Memory Databases & Analytics. It ships with 1× AMD EPYC 9655P (96C/2.6GHz), 768GB DDR5-6400 of memory and 2× 7.68TB NVMe SSD, with networking (1× dual 25GbE SFP28) already installed.",
            "It is built on the Hyper A+ Server platform: 2U single-socket Hyper with 24 hot-swap 2.5\" drive bays and 1 PCIe 5.0 slot. Gold Series systems are Supermicro's best-selling configurations: every component is installed and tested before shipping, and in most cases the system leaves Supermicro's warehouse within a few days, ready to rack and power on."
        ],
        highlights: [
            ["ph-cpu", "Processors", "1× AMD EPYC 9655P (96C/2.6GHz)"],
            ["ph-memory", "Memory", "768GB DDR5-6400"],
            ["ph-hard-drives", "Storage", "2× 7.68TB NVMe SSD"],
            ["ph-plugs-connected", "Networking", "1× dual 25GbE SFP28"],
            ["ph-lightning", "Power", "2× 1600W Titanium Level"],
            ["ph-truck", "Ready to ship", "Pre-configured and pre-tested; in most cases ships from Supermicro within a few days."]
        ],
        specs: [
            ["Gold Series configuration (as shipped)", [
                ["Processors", "1× AMD EPYC 9655P (96C/2.6GHz)"],
                ["Memory", "768GB DDR5-6400"],
                ["Storage", "2× 7.68TB NVMe SSD"],
                ["Networking", "1× dual 25GbE SFP28"],
                ["Power", "2× 1600W Titanium Level"]
            ]],
            ["Platform", [
                ["Form factor", "2U"],
                ["Dimensions (W × H × D)", "437 x 88.9 x 760mm (17.2\" x 3.5\" x 29.9\")"],
                ["Processor support", "Single processor(s); AMD EPYC 9004/9005 Series Processors; Up to 160C/320T"],
                ["Motherboard", "Super H13SSH"],
                ["Chassis", "CSE-HS219-R1K63P-A"]
            ]],
            ["GPU support", [
                ["Max GPU Count", "Up to 2 double-width GPUs"],
                ["Supported GPU", "NVIDIA PCIe: RTX 6000 Ada Generation, RTX A6000"],
                ["CPU-GPU Interconnect", "PCIe 5.0 x16 CPU-to-GPU Interconnect"],
                ["GPU-GPU Interconnect", "PCIe"]
            ]],
            ["Memory & storage", [
                ["Slot Count", "24 DIMM slots"],
                ["Max Memory (1DPC)", "Up to 3TB 4800MT/s ECC DDR5 RDIMM (AMD EPYC 9004 Series Processor)"],
                ["Max Memory (2DPC)", "Up to 6TB 4000MT/s ECC DDR5 RDIMM (AMD EPYC 9004 Series Processor)"],
                ["Max Memory (1DPC)", "Up to 3TB 5200MT/s ECC DDR5 RDIMM (AMD EPYC 9005 Series Processor)"],
                ["Max Memory (2DPC)", "Up to 6TB 4400MT/s ECC DDR5 1R RDIMM (AMD EPYC 9005 Series Processor)"],
                ["Max Memory (2DPC)", "Up to 6TB 4000MT/s ECC DDR5 2R RDIMM (AMD EPYC 9005 Series Processor)"],
                ["Drive bays / M.2", "M.2:; 1 M.2 PCIe 3.0 x4 NVMe slot (M-key 22110(default)/2280); 1 M.2 PCIe 3.0 x2 NVMe slot (M-key 22110(default)/2280)"]
            ]],
            ["I/O, power & cooling", [
                ["LAN", "1 RJ45 1 GbE Dedicated BMC LAN port"],
                ["USB", "2 USB 3.0 ports (rear)"],
                ["Video", "1 VGA port"],
                ["Power supplies", "2x 1600W Redundant (1 + 1) Titanium Level (96%) power supplies"],
                ["Cooling", "Up to 4x 8cm heavy duty fans with optimal fan speed control"]
            ]],
            ["Physical & environment", [
                ["Net weight", "39 lbs (17.7 kg)"],
                ["Operating temperature", "10°C to 35°C (50°F to 95°F)"]
            ]]
        ],
        useCases: ["In-Memory Databases & Analytics"]
    },

    "smc-gold-as-2126hs-tn-01-g2": {
        model: "AS -2126HS-TN-01-G2",
        sources: [['Supermicro Gold Series', "https://www.supermicro.com/en/products/gold-series"], ["AS -2126HS-TN-01-G2 datasheet", "https://www.supermicro.com/en/products/system/datasheet/as%20-2126hs-tn-01-g2"]],
        overview: [
            "The Supermicro AS -2126HS-TN-01-G2 is a pre-configured Gold Series Hyper SuperServer, recommended by Supermicro for Virtualization & Private Cloud Consolidation. It ships with 2× AMD EPYC 9965 (192C/2.25GHz), 1.5TB DDR5-6400 of memory and 2× 960GB M.2 NVMe SSD, with networking (1× dual 25GbE SFP28) already installed.",
            "It is built on the Hyper SuperServer platform: 2U Hyper with up to 24 hot-swap 2.5\" NVMe/SAS/SATA bays and 4 PCIe 5.0 x16 slots + 1 PCIe 5.0 x16 AIOM slot. Gold Series systems are Supermicro's best-selling configurations: every component is installed and tested before shipping, and in most cases the system leaves Supermicro's warehouse within a few days, ready to rack and power on."
        ],
        highlights: [
            ["ph-cpu", "Processors", "2× AMD EPYC 9965 (192C/2.25GHz)"],
            ["ph-memory", "Memory", "1.5TB DDR5-6400"],
            ["ph-hard-drives", "Storage", "2× 960GB M.2 NVMe SSD"],
            ["ph-plugs-connected", "Networking", "1× dual 25GbE SFP28"],
            ["ph-lightning", "Power", "2× 2000W Titanium Level"],
            ["ph-truck", "Ready to ship", "Pre-configured and pre-tested; in most cases ships from Supermicro within a few days."]
        ],
        specs: [
            ["Gold Series configuration (as shipped)", [
                ["Processors", "2× AMD EPYC 9965 (192C/2.25GHz)"],
                ["Memory", "1.5TB DDR5-6400"],
                ["Storage", "2× 960GB M.2 NVMe SSD"],
                ["Networking", "1× dual 25GbE SFP28"],
                ["Power", "2× 2000W Titanium Level"]
            ]],
            ["Platform", [
                ["Form factor", "2U Rackmount"],
                ["Dimensions (W × H × D)", "437 x 88.9 x 806.2mm (17.2\" x 3.5\" x 31.74\")"],
                ["Processor support", "Dual processor(s); AMD EPYC 9005/9004 Series Processors; Up to 384C/768T"],
                ["Motherboard", "Super H14DSH"],
                ["Chassis", "CSE-HS201-R000NFP"]
            ]],
            ["GPU support", [
                ["Max GPU Count", "Up to 3 double-width GPUs"],
                ["NVIDIA PCIe", "H100 NVL, A16, L4, L40, L40S, NVIDIA RTX PRO 2000 Blackwell, NVIDIA RTX PRO 4500 Blackwell,; NVIDIA RTX PRO 5000 Blackwell, NVIDIA RTX PRO 6000 Blackwell Max-Q Workstation Edition, RTX 2000 Ada, RTX; 4500 Ada, RTX 5000 Ada, RTX 6000 Ada Generation"],
                ["AMD PCIe", "Instinct MI210"],
                ["GPU-GPU Interconnect", "PCIe"]
            ]],
            ["Memory & storage", [
                ["Slot Count", "24 DIMM slots"],
                ["Max Memory (1DPC)", "Up to 6TB 6400MT/s ECC DDR5 RDIMM (AMD EPYC 9005 Series Processor)"],
                ["Max Memory (1DPC)", "Up to 6TB 4800MT/s ECC DDR5 RDIMM (AMD EPYC 9004 Series Processor)"],
                ["Drive bays / M.2", "2 M.2 PCIe 3.0 x4 NVMe slots (M-key 2280/22110)"]
            ]],
            ["I/O, power & cooling", [
                ["LAN", "1 RJ45 1 GbE Dedicated BMC LAN port"],
                ["USB", "2 USB 3.0 ports (rear)"],
                ["Video", "1 VGA port"],
                ["Expansion", "Up to 4 CXL 2.0 x16 devices"],
                ["Power supplies", "2x 2000W Redundant (1 + 1) Titanium Level (96%) power supplies"],
                ["Cooling", "Up to 6 counter-rotating 60x60x56mm Fan(s)"]
            ]],
            ["Physical & environment", [
                ["Net weight", "45 lbs (20.5 kg)"],
                ["Operating temperature", "10°C to 35°C (50°F to 95°F)"]
            ]]
        ],
        useCases: ["Virtualization & Private Cloud Consolidation"]
    },

    "smc-gold-sys-222h-tn-01-g2": {
        model: "SYS-222H-TN-01-G2",
        sources: [['Supermicro Gold Series', "https://www.supermicro.com/en/products/gold-series"], ["SYS-222H-TN-01-G2 datasheet", "https://www.supermicro.com/en/products/system/datasheet/sys-222h-tn-01-g2"]],
        overview: [
            "The Supermicro SYS-222H-TN-01-G2 is a pre-configured Gold Series Hyper SuperServer, recommended by Supermicro for Virtualization & Private Cloud Consolidation. It ships with 2× Intel Xeon 6740P (48C/2.1GHz), 1TB DDR5-6400 of memory and 2× 3.8TB U.2 NVMe SSD, with networking (1× dual 25GbE SFP28) already installed.",
            "It is built on the Hyper SuperServer platform: 2U Hyper with 8 hot-swap 2.5\" NVMe/SAS/SATA bays and 4 PCIe 5.0 slots + up to 2 PCIe 5.0 x16 AIOM slots. Gold Series systems are Supermicro's best-selling configurations: every component is installed and tested before shipping, and in most cases the system leaves Supermicro's warehouse within a few days, ready to rack and power on."
        ],
        highlights: [
            ["ph-cpu", "Processors", "2× Intel Xeon 6740P (48C/2.1GHz)"],
            ["ph-memory", "Memory", "1TB DDR5-6400"],
            ["ph-hard-drives", "Storage", "2× 3.8TB U.2 NVMe SSD"],
            ["ph-plugs-connected", "Networking", "1× dual 25GbE SFP28"],
            ["ph-lightning", "Power", "2× 2000W Titanium Level"],
            ["ph-truck", "Ready to ship", "Pre-configured and pre-tested; in most cases ships from Supermicro within a few days."]
        ],
        specs: [
            ["Gold Series configuration (as shipped)", [
                ["Processors", "2× Intel Xeon 6740P (48C/2.1GHz)"],
                ["Memory", "1TB DDR5-6400"],
                ["Storage", "2× 3.8TB U.2 NVMe SSD"],
                ["Networking", "1× dual 25GbE SFP28"],
                ["Power", "2× 2000W Titanium Level"]
            ]],
            ["Platform", [
                ["Form factor", "2U Rackmount"],
                ["Dimensions (W × H × D)", "438.4 x 88 x 755.2mm (17.3\" x 3.5\" x 29.73\")"],
                ["Processor support", "Dual Socket E2 (LGA-4710); Intel Xeon 6700/6500 series processors with P-cores or 6700 series processors with E-cores; P-cores: Up to 86C/172T; Up to 336MB Cache per CPU; E-cores: Up to 144C/144T; Up to 108MB Cache per CPU"],
                ["Motherboard", "Super X14DBM-SP"],
                ["Chassis", "CSE-HS219-R000NP"]
            ]],
            ["GPU support", [
                ["Max GPU Count", "Up to 4 double-width or 8 single-width GPUs"],
                ["NVIDIA PCIe", "H100 NVL, A1000, A16, L4, L40S, NVIDIA RTX PRO 4000 Blackwell, NVIDIA RTX PRO 4500 Blackwell,; NVIDIA RTX PRO 4500 Blackwell Server Edition, NVIDIA RTX PRO 5000 Blackwell, NVIDIA RTX PRO 6000; Blackwell Max-Q Workstation Edition, NVIDIA RTX PRO 6000 Blackwell Server Edition, RTX 2000 Ada, RTX 4000; Ada Generation, RTX 5000 Ada, RTX 6000 Ada Generation"]
            ]],
            ["Memory & storage", [
                ["Slot Count", "32 DIMM slots"],
                ["Max Memory (1DPC)", "Up to 4TB 6400MT/s ECC DDR5 RDIMM"],
                ["Max Memory (1DPC)", "Up to 1TB 8000MT/s ECC DDR5 MRDIMM (P-core only)"],
                ["Max Memory (2DPC)", "Up to 8TB 6000MT/s ECC DDR5 RDIMM"],
                ["Drive bays / M.2", "2 M.2 PCIe 5.0 x2 NVMe slots (M-key 2280/22110)"]
            ]],
            ["I/O, power & cooling", [
                ["LAN", "1 RJ45 1 GbE Dedicated BMC LAN port"],
                ["USB", "2 USB 3.2 Gen1 ports (Header); 2 USB 3.2 Gen1 ports (Rear)"],
                ["Video", "1 VGA port"],
                ["Expansion", "Up to 4 CXL 2.0 x16/x8 devices"],
                ["Power supplies", "2x 1200W Redundant (1 + 1) Titanium Level (96%) Hot-plug power supplies"],
                ["Cooling", "Up to 4x 8cm heavy duty fans with optimal fan speed control; Direct to Chip (D2C) Cold Plate (optional)"]
            ]],
            ["Physical & environment", [
                ["Net weight", "40 lbs (18.2 kg)"],
                ["Operating temperature", "10°C to 35°C (50°F to 95°F)"]
            ]]
        ],
        useCases: ["Virtualization & Private Cloud Consolidation"]
    },

    "smc-gold-as-1126hs-tn-01-g2": {
        model: "AS -1126HS-TN-01-G2",
        sources: [['Supermicro Gold Series', "https://www.supermicro.com/en/products/gold-series"], ["AS -1126HS-TN-01-G2 datasheet", "https://www.supermicro.com/en/products/system/datasheet/as%20-1126hs-tn-01-g2"]],
        overview: [
            "The Supermicro AS -1126HS-TN-01-G2 is a pre-configured Gold Series Hyper SuperServer, recommended by Supermicro for IaaS – Compute/Virtualization Bare Metal. It ships with 2× AMD EPYC 9355 (32C/3.55GHz), 1.5TB DDR5-6400 of memory and 2× 960GB M.2 NVMe SSD, with networking (1× dual 25GbE SFP28) already installed.",
            "It is built on the Hyper SuperServer platform: 1U Hyper with up to 12 hot-swap 2.5\" NVMe/SAS/SATA bays and 3 PCIe 5.0 x16 slots + 1 PCIe 5.0 x16 AIOM slot. Gold Series systems are Supermicro's best-selling configurations: every component is installed and tested before shipping, and in most cases the system leaves Supermicro's warehouse within a few days, ready to rack and power on."
        ],
        highlights: [
            ["ph-cpu", "Processors", "2× AMD EPYC 9355 (32C/3.55GHz)"],
            ["ph-memory", "Memory", "1.5TB DDR5-6400"],
            ["ph-hard-drives", "Storage", "2× 960GB M.2 NVMe SSD"],
            ["ph-plugs-connected", "Networking", "1× dual 25GbE SFP28"],
            ["ph-lightning", "Power", "2× 1600W Titanium Level"],
            ["ph-truck", "Ready to ship", "Pre-configured and pre-tested; in most cases ships from Supermicro within a few days."]
        ],
        specs: [
            ["Gold Series configuration (as shipped)", [
                ["Processors", "2× AMD EPYC 9355 (32C/3.55GHz)"],
                ["Memory", "1.5TB DDR5-6400"],
                ["Storage", "2× 960GB M.2 NVMe SSD"],
                ["Networking", "1× dual 25GbE SFP28"],
                ["Power", "2× 1600W Titanium Level"]
            ]],
            ["Platform", [
                ["Form factor", "1U Rackmount"],
                ["Dimensions (W × H × D)", "437 x 43 x 778.7mm (17.2\" x 1.7\" x 30.66\")"],
                ["Processor support", "Dual processor(s); AMD EPYC 9005/9004 Series Processors; Up to 384C/768T"],
                ["Motherboard", "Super H14DSH"],
                ["Chassis", "CSE-HS101-R000NFP"]
            ]],
            ["Memory & storage", [
                ["Slot Count", "24 DIMM slots"],
                ["Max Memory (1DPC)", "Up to 6TB 6400MT/s ECC DDR5 RDIMM (AMD EPYC 9005 Series Processor)"],
                ["Max Memory (1DPC)", "Up to 6TB 4800MT/s ECC DDR5 RDIMM (AMD EPYC 9004 Series Processor)"],
                ["Drive bays / M.2", "2 M.2 PCIe 3.0 x4 NVMe slots (M-key 2280/22110)"]
            ]],
            ["I/O, power & cooling", [
                ["LAN", "1 RJ45 1 GbE Dedicated BMC LAN port"],
                ["USB", "2 USB 3.0 ports (rear); 1 USB 3.0 port (front)"],
                ["Video", "1 VGA port"],
                ["Expansion", "Up to 4 CXL 2.0 x16 devices"],
                ["Power supplies", "2x 1600W Redundant (1 + 1) Titanium Level (96%) power supplies"],
                ["Cooling", "Up to 8 counter-rotating 40x40x56mm Fan(s)"]
            ]],
            ["Physical & environment", [
                ["Net weight", "19.2 lbs (8.7 kg)"],
                ["Operating temperature", "10°C to 35°C (50°F to 95°F)"]
            ]]
        ],
        useCases: ["IaaS – Compute/Virtualization Bare Metal"]
    },

    "smc-gold-as-1115cs-tnr-01-g2": {
        model: "AS -1115CS-TNR-01-G2",
        sources: [['Supermicro Gold Series', "https://www.supermicro.com/en/products/gold-series"], ["AS -1115CS-TNR-01-G2 datasheet", "https://www.supermicro.com/en/products/system/datasheet/as%20-1115cs-tnr-01-g2"]],
        overview: [
            "The Supermicro AS -1115CS-TNR-01-G2 is a pre-configured Gold Series CloudDC A+ Server, recommended by Supermicro for Compute/Metadata Node for AI Storage Cluster. It ships with 1× AMD EPYC 9555P (64C/3.2GHz), 384GB DDR5-6400 of memory and 1× 960GB U.2 NVMe SSD, with networking (2× NVIDIA ConnectX-7 VPI dual 200G QSFP56; 1× quad 1GbE RJ45) already installed.",
            "It is built on the CloudDC A+ Server platform: 1U CloudDC with 10 hot-swap 2.5\" NVMe/SAS/SATA bays and 2 PCIe 5.0 x16 slots + 2 AIOM slots. Gold Series systems are Supermicro's best-selling configurations: every component is installed and tested before shipping, and in most cases the system leaves Supermicro's warehouse within a few days, ready to rack and power on."
        ],
        highlights: [
            ["ph-cpu", "Processors", "1× AMD EPYC 9555P (64C/3.2GHz)"],
            ["ph-memory", "Memory", "384GB DDR5-6400"],
            ["ph-hard-drives", "Storage", "1× 960GB U.2 NVMe SSD"],
            ["ph-plugs-connected", "Networking", "2× NVIDIA ConnectX-7 VPI dual 200G QSFP56; 1× quad 1GbE RJ45"],
            ["ph-lightning", "Power", "2× 860W Platinum Level"],
            ["ph-truck", "Ready to ship", "Pre-configured and pre-tested; in most cases ships from Supermicro within a few days."]
        ],
        specs: [
            ["Gold Series configuration (as shipped)", [
                ["Processors", "1× AMD EPYC 9555P (64C/3.2GHz)"],
                ["Memory", "384GB DDR5-6400"],
                ["Storage", "1× 960GB U.2 NVMe SSD"],
                ["Networking", "2× NVIDIA ConnectX-7 VPI dual 200G QSFP56"],
                ["Networking", "1× quad 1GbE RJ45"],
                ["Power", "2× 860W Platinum Level"]
            ]],
            ["Platform", [
                ["Form factor", "1U Rackmount"],
                ["Dimensions (W × H × D)", "437 x 43 x 597mm (17.2\" x 1.7\" x 23.5\")"],
                ["Processor support", "Single processor(s); AMD EPYC 9004/9005 Series Processors; Up to 160C/320T"],
                ["Motherboard", "Super H13SSW"],
                ["Chassis", "CSE-LB16TS-R860AWP-A"]
            ]],
            ["GPU support", [
                ["Max GPU Count", "Up to 2 single-width GPUs"],
                ["Supported GPU", "NVIDIA PCIe: A2, L4"],
                ["CPU-GPU Interconnect", "PCIe 5.0 x16 CPU-to-GPU Interconnect"],
                ["GPU-GPU Interconnect", "PCIe"]
            ]],
            ["Memory & storage", [
                ["Slot Count", "12 DIMM slots"],
                ["Max Memory (1DPC)", "Up to 3TB 4800MT/s ECC DDR5 RDIMM (AMD EPYC 9004 Series Processor, MB; R1.x/R2.0/R2.01)"],
                ["Max Memory (1DPC)", "Up to 3TB 6000MT/s ECC DDR5 RDIMM (AMD EPYC 9005 Series Processor, MB R2.0)"],
                ["Max Memory (1DPC)", "Up to 3TB 6400MT/s ECC DDR5 RDIMM (AMD EPYC 9005 Series Processor, MB R2.01)"],
                ["Drive bays / M.2", "2 M.2 PCIe 3.0 x2 NVMe slots (M-key 2280/22110)"]
            ]],
            ["I/O, power & cooling", [
                ["LAN", "1 RJ45 1 GbE Dedicated BMC LAN port"],
                ["USB", "2 USB 3.0 ports (rear); 2 USB 2.0 ports (front)"],
                ["Video", "1 VGA port"],
                ["Power supplies", "2x 860W Redundant (1 + 1) Platinum Level (94%) power supplies"],
                ["Cooling", "Up to 6x 4cm heavy duty fans with optimal fan speed control"]
            ]],
            ["Physical & environment", [
                ["Net weight", "25 lbs (11.3 kg)"],
                ["Operating temperature", "10°C to 35°C (50°F to 95°F)"]
            ]]
        ],
        useCases: ["Compute/Metadata Node for AI Storage Cluster"]
    },

    "smc-gold-as-1115cs-tnr-02-g2": {
        model: "AS -1115CS-TNR-02-G2",
        sources: [['Supermicro Gold Series', "https://www.supermicro.com/en/products/gold-series"], ["AS -1115CS-TNR-02-G2 datasheet", "https://www.supermicro.com/en/products/system/datasheet/as%20-1115cs-tnr-02-g2"]],
        overview: [
            "The Supermicro AS -1115CS-TNR-02-G2 is a pre-configured Gold Series CloudDC A+ Server, recommended by Supermicro for Compute Node for Web Hosting & SMB Infrastructure. It ships with 1× AMD EPYC 9115 (16C/2.6GHz), 64GB DDR5-6400 of memory and 1× 960GB M.2 NVMe SSD, with networking (1× 2-port 10GbE RJ45) already installed.",
            "It is built on the CloudDC A+ Server platform: 1U CloudDC with 10 hot-swap 2.5\" NVMe/SAS/SATA bays and 2 PCIe 5.0 x16 slots + 2 AIOM slots. Gold Series systems are Supermicro's best-selling configurations: every component is installed and tested before shipping, and in most cases the system leaves Supermicro's warehouse within a few days, ready to rack and power on."
        ],
        highlights: [
            ["ph-cpu", "Processors", "1× AMD EPYC 9115 (16C/2.6GHz)"],
            ["ph-memory", "Memory", "64GB DDR5-6400"],
            ["ph-hard-drives", "Storage", "1× 960GB M.2 NVMe SSD"],
            ["ph-plugs-connected", "Networking", "1× 2-port 10GbE RJ45"],
            ["ph-lightning", "Power", "2× 860W Platinum Level"],
            ["ph-truck", "Ready to ship", "Pre-configured and pre-tested; in most cases ships from Supermicro within a few days."]
        ],
        specs: [
            ["Gold Series configuration (as shipped)", [
                ["Processors", "1× AMD EPYC 9115 (16C/2.6GHz)"],
                ["Memory", "64GB DDR5-6400"],
                ["Storage", "1× 960GB M.2 NVMe SSD"],
                ["Networking", "1× 2-port 10GbE RJ45"],
                ["Power", "2× 860W Platinum Level"]
            ]],
            ["Platform", [
                ["Form factor", "1U Rackmount"],
                ["Dimensions (W × H × D)", "437 x 43 x 597mm (17.2\" x 1.7\" x 23.5\")"],
                ["Processor support", "Single processor(s); AMD EPYC 9004/9005 Series Processors; Up to 160C/320T"],
                ["Motherboard", "Super H13SSW"],
                ["Chassis", "CSE-LB16TS-R860AWP-A"]
            ]],
            ["GPU support", [
                ["Max GPU Count", "Up to 2 single-width GPUs"],
                ["Supported GPU", "NVIDIA PCIe: A2, L4"],
                ["CPU-GPU Interconnect", "PCIe 5.0 x16 CPU-to-GPU Interconnect"],
                ["GPU-GPU Interconnect", "PCIe"]
            ]],
            ["Memory & storage", [
                ["Slot Count", "12 DIMM slots"],
                ["Max Memory (1DPC)", "Up to 3TB 4800MT/s ECC DDR5 RDIMM (AMD EPYC 9004 Series Processor, MB; R1.x/R2.0/R2.01)"],
                ["Max Memory (1DPC)", "Up to 3TB 6000MT/s ECC DDR5 RDIMM (AMD EPYC 9005 Series Processor, MB R2.0)"],
                ["Max Memory (1DPC)", "Up to 3TB 6400MT/s ECC DDR5 RDIMM (AMD EPYC 9005 Series Processor, MB R2.01)"],
                ["Drive bays / M.2", "2 M.2 PCIe 3.0 x2 NVMe slots (M-key 2280/22110)"]
            ]],
            ["I/O, power & cooling", [
                ["LAN", "1 RJ45 1 GbE Dedicated BMC LAN port"],
                ["USB", "2 USB 3.0 ports (rear); 2 USB 2.0 ports (front)"],
                ["Video", "1 VGA port"],
                ["Power supplies", "2x 860W Redundant (1 + 1) Platinum Level (94%) power supplies"],
                ["Cooling", "Up to 6x 4cm heavy duty fans with optimal fan speed control"]
            ]],
            ["Physical & environment", [
                ["Net weight", "25 lbs (11.3 kg)"],
                ["Operating temperature", "10°C to 35°C (50°F to 95°F)"]
            ]]
        ],
        useCases: ["Compute Node for Web Hosting & SMB Infrastructure"]
    },

    "smc-gold-sbi-612b-1ne34-01-g2": {
        model: "SBI-612B-1NE34-01-G2",
        sources: [['Supermicro Gold Series', "https://www.supermicro.com/en/products/gold-series"], ["SBI-612B-1NE34-01-G2 datasheet", "https://www.supermicro.com/en/products/system/datasheet/sbi-612b-1ne34-01-g2"]],
        overview: [
            "The Supermicro SBI-612B-1NE34-01-G2 is a pre-configured Gold Series SuperBlade SuperServer, recommended by Supermicro for FSI, AI, EDA, 3D Rendering & Simulation. It ships with 1× Intel Xeon 6517P (16C/3.2GHz) per node, 128GB DDR5-6400 of memory per node and 1× 1.92TB M.2 NVMe SSD per node, with networking (Up to 4× 25G Ethernet switches on the enclosure) already installed.",
            "It is a 6U SuperBlade SuperServer. Gold Series systems are Supermicro's best-selling configurations: every component is installed and tested before shipping, and in most cases the system leaves Supermicro's warehouse within a few days, ready to rack and power on."
        ],
        highlights: [
            ["ph-cpu", "Processors", "1× Intel Xeon 6517P (16C/3.2GHz) per node"],
            ["ph-memory", "Memory", "128GB DDR5-6400 per node"],
            ["ph-hard-drives", "Storage", "1× 1.92TB M.2 NVMe SSD per node"],
            ["ph-plugs-connected", "Networking", "Up to 4× 25G Ethernet switches on the enclosure"],
            ["ph-truck", "Ready to ship", "Pre-configured and pre-tested; in most cases ships from Supermicro within a few days."]
        ],
        specs: [
            ["Gold Series configuration (as shipped)", [
                ["Processors", "1× Intel Xeon 6517P (16C/3.2GHz) per node"],
                ["Memory", "128GB DDR5-6400 per node"],
                ["Storage", "1× 1.92TB M.2 NVMe SSD per node"],
                ["Networking", "Up to 4× 25G Ethernet switches on the enclosure"]
            ]],
            ["Platform", [
                ["Form factor", "6U"],
                ["Processor support", "Single Socket E2 (LGA-4710); Intel Xeon 6700/6500 series processors with P-cores or 6700 series processors with E-cores"],
                ["Motherboard", "Super B14SBE-CPU-25G"],
                ["Chassis", "CSE-6U"]
            ]],
            ["GPU support", [
                ["Max GPU Count", "Up to 1 double-width or 2 single-width GPUs"],
                ["Supported GPU", "NVIDIA PCIe: H100 NVL, L40S"]
            ]],
            ["Memory & storage", [
                ["Slot Count", "16 DIMM slots/16 Channels"],
                ["Max Memory (1DPC)", "Up to 4TB 6400MT/s ECC DDR5 RDIMM"]
            ]],
            ["I/O, power & cooling", [
                ["Power supplies", "1x 3000W Redundant Platinum Level (94%) power supply"],
                ["Cooling", "N/A"]
            ]],
            ["Physical & environment", [
                ["Operating temperature", "10°C to 35°C (50°F to 95°F)"]
            ]]
        ],
        useCases: ["FSI, AI, EDA, 3D Rendering & Simulation"]
    },

    "smc-gold-as-3015mr-h8tnr-01-g2": {
        model: "AS -3015MR-H8TNR-01-G2",
        sources: [['Supermicro Gold Series', "https://www.supermicro.com/en/products/gold-series"], ["AS -3015MR-H8TNR-01-G2 datasheet", "https://www.supermicro.com/en/products/system/datasheet/as%20-3015mr-h8tnr-01-g2"]],
        overview: [
            "The Supermicro AS -3015MR-H8TNR-01-G2 is a pre-configured Gold Series MicroCloud A+ Server, recommended by Supermicro for Hosting & Cloud Gaming. It ships with 1× AMD EPYC 4565P (16C/4.3GHz) per node, 64GB DDR5-5600 of memory per node and 2× 1.92TB U.2 NVMe SSD per node, with networking (2-port 10GbE/25GbE AOC per node) already installed.",
            "It is built on the MicroCloud A+ Server platform: 3U 8-Node MicroCloud with single-width GPU support. Gold Series systems are Supermicro's best-selling configurations: every component is installed and tested before shipping, and in most cases the system leaves Supermicro's warehouse within a few days, ready to rack and power on."
        ],
        highlights: [
            ["ph-cpu", "Processors", "1× AMD EPYC 4565P (16C/4.3GHz) per node"],
            ["ph-memory", "Memory", "64GB DDR5-5600 per node"],
            ["ph-hard-drives", "Storage", "2× 1.92TB U.2 NVMe SSD per node"],
            ["ph-plugs-connected", "Networking", "2-port 10GbE/25GbE AOC per node"],
            ["ph-lightning", "Power", "2× 2200W Titanium Level"],
            ["ph-shield-check", "Warranty", "System Warranty includes three years of labor, three years of parts, and one year cross-ship"],
            ["ph-truck", "Ready to ship", "Pre-configured and pre-tested; in most cases ships from Supermicro within a few days."]
        ],
        specs: [
            ["Gold Series configuration (as shipped)", [
                ["Processors", "1× AMD EPYC 4565P (16C/4.3GHz) per node"],
                ["Memory", "64GB DDR5-5600 per node"],
                ["Storage", "2× 1.92TB U.2 NVMe SSD per node"],
                ["Networking", "2-port 10GbE/25GbE AOC per node"],
                ["Power", "2× 2200W Titanium Level"],
                ["Warranty", "System Warranty includes three years of labor, three years of parts, and one year cross-ship"]
            ]],
            ["Platform", [
                ["Form factor", "3U Rackmount"],
                ["Dimensions (W × H × D)", "438 x 132 x 589mm (17.26\" x 5.21\" x 23.2\")"],
                ["Processor support", "Single Socket AM5 (LGA-1718); AMD EPYC 4005/4004 Series Processor; Up to 16C/32T; Up to 128MB Cache"],
                ["Motherboard", "Super H13SRD-F"],
                ["Chassis", "CSE-938NH-R2K20BP2"]
            ]],
            ["GPU support", [
                ["Max GPU Count", "Up to 1 single-width GPU"],
                ["Supported GPU", "NVIDIA PCIe: A2, L4, T4"]
            ]],
            ["Memory & storage", [
                ["Slot Count", "4 DIMM slots"],
                ["Max Memory (1DPC)", "Up to 192GB 5600MT/s ECC/non-ECC DDR5 UDIMM"],
                ["Max Memory (2DPC)", "Up to 192GB 3600MT/s ECC/non-ECC DDR5 UDIMM"],
                ["Drive bays / M.2", "1 M.2 NVMe slot (M-key 2280/22110)"]
            ]],
            ["I/O, power & cooling", [
                ["USB", "2 USB 2.0 ports; 1 Type-C port (front)"],
                ["Video", "1 port"],
                ["Power supplies", "2x 2200W Redundant (1 + 1) Titanium Level (96%) power supplies"],
                ["Cooling", "Up to 4 Heavy Duty 8cm Fan(s)"]
            ]],
            ["Physical & environment", [
                ["Net weight", "62.2 lbs (28.21 kg)"],
                ["Operating temperature", "10°C to 35°C (50°F to 95°F)"]
            ]]
        ],
        useCases: ["Hosting & Cloud Gaming"]
    },

    "smc-gold-sys-511e-wr-01-g2": {
        model: "SYS-511E-WR-01-G2",
        sources: [['Supermicro Gold Series', "https://www.supermicro.com/en/products/gold-series"], ["SYS-511E-WR-01-G2 datasheet", "https://www.supermicro.com/en/products/system/datasheet/sys-511e-wr-01-g2"]],
        overview: [
            "The Supermicro SYS-511E-WR-01-G2 is a pre-configured Gold Series Single-Socket SuperServer, recommended by Supermicro for Virtualization and Cloud Infrastructure. It ships with 1× Intel Xeon 4510 (12C/2.4GHz), 64GB DDR5-4400 of memory and 1× 960GB M.2 NVMe SSD, with networking (2-port 1GbE) already installed.",
            "It is built on the Single-Socket SuperServer platform: 1U single-socket WIO with 4 hot-swap 3.5\" SAS/SATA bays and 3 PCIe 5.0 slots. Gold Series systems are Supermicro's best-selling configurations: every component is installed and tested before shipping, and in most cases the system leaves Supermicro's warehouse within a few days, ready to rack and power on."
        ],
        highlights: [
            ["ph-cpu", "Processors", "1× Intel Xeon 4510 (12C/2.4GHz)"],
            ["ph-memory", "Memory", "64GB DDR5-4400"],
            ["ph-hard-drives", "Storage", "1× 960GB M.2 NVMe SSD"],
            ["ph-plugs-connected", "Networking", "2-port 1GbE"],
            ["ph-lightning", "Power", "Redundant 860W Titanium Level"],
            ["ph-truck", "Ready to ship", "Pre-configured and pre-tested; in most cases ships from Supermicro within a few days."]
        ],
        specs: [
            ["Gold Series configuration (as shipped)", [
                ["Processors", "1× Intel Xeon 4510 (12C/2.4GHz)"],
                ["Memory", "64GB DDR5-4400"],
                ["Boot / M.2", "1× 960GB M.2 NVMe SSD"],
                ["Networking", "2-port 1GbE"],
                ["Power", "Redundant 860W Titanium Level"]
            ]],
            ["Platform", [
                ["Form factor", "1U"],
                ["Dimensions (W × H × D)", "437 x 43 x 650mm (17.2\" x 1.7\" x 25.6\")"],
                ["Processor support", "Single Socket E (LGA-4677); 5th Gen Intel Xeon4th Gen Intel Xeon Scalable processors; Up to 52C/104T; Up to 300MB Cache"],
                ["Motherboard", "Super X13SEW-F"],
                ["Chassis", "CSE-815BTS-R000WNP"]
            ]],
            ["GPU support", [
                ["Max GPU Count", "Up to 1 double-width or 2 single-width GPUs"],
                ["NVIDIA PCIe", "A1000, L4, NVIDIA RTX PRO 4000 Blackwell, RTX 4000 Ada Generation"],
                ["NVIDIA", "RTX A400"],
                ["CPU-GPU Interconnect", "PCIe 5.0 x16 CPU-to-GPU Interconnect"]
            ]],
            ["Memory & storage", [
                ["Slot Count", "8 DIMM slots/8 Channels"],
                ["Max Memory (1DPC)", "Up to 2TB 5600MT/s ECC DDR5 RDIMM"],
                ["Drive bays / M.2", "1 M.2 PCIe 3.0 x2 NVMe slot (M-key 2280/22110); Peripheral Bays: 2 2.5\" peripheral bays (optional)"]
            ]],
            ["I/O, power & cooling", [
                ["LAN", "2 RJ45 1 GbE LAN ports; 1 RJ45 1 GbE Dedicated BMC LAN port (IPMI shared on LAN port 1)"],
                ["USB", "2 USB 3.2 Gen1 Type-A ports (rear); 2 USB 2.0 Type-A ports (rear); 2 USB 3.2 Gen1 ports (Header); 1 USB 2.0 Type-A port (Header)"],
                ["Video", "1 VGA port"],
                ["Power supplies", "2x 860W Redundant (1 + 1) Titanium Level (96%) power supplies"],
                ["Cooling", "Up to 5 middle cooling PWM 40x40x56mm Fan(s); Up to 1 AOC cooling Fan(s) (optional)"]
            ]],
            ["Physical & environment", [
                ["Net weight", "21.5 lbs (9.75 kg)"],
                ["Operating temperature", "10°C to 35°C (50°F to 95°F)"]
            ]]
        ],
        useCases: ["Virtualization and Cloud Infrastructure"]
    },

    "smc-gold-sys-c542i-11302u": {
        model: "SYS-C542i-11302U",
        sources: [['Supermicro Gold Series', "https://www.supermicro.com/en/products/gold-series"], ["SYS-C542i-11302U datasheet", "https://www.supermicro.com/en/products/system/datasheet/sys-c542i-11302u"]],
        overview: [
            "The Supermicro SYS-C542i-11302U is a pre-configured Gold Series Client System SuperServer, recommended by Supermicro for Private/Sovereign AI Endpoint. It ships with 1× Intel Core Ultra 7 Processor 265 (20C/5.3GHz), 32GB DDR5-5600 of memory and 1TB NVMe SSD, with networking (1GbE) already installed.",
            "It is built on the Client System SuperServer platform: High-performance mid-tower AI PC for SMBs, creators, and AI developers. Gold Series systems are Supermicro's best-selling configurations: every component is installed and tested before shipping, and in most cases the system leaves Supermicro's warehouse within a few days, ready to rack and power on."
        ],
        highlights: [
            ["ph-cpu", "Processors", "1× Intel Core Ultra 7 Processor 265 (20C/5.3GHz)"],
            ["ph-memory", "Memory", "32GB DDR5-5600"],
            ["ph-hard-drives", "Storage", "1TB NVMe SSD"],
            ["ph-plugs-connected", "Networking", "1GbE"],
            ["ph-lightning", "Power", "1000W 80+ Gold Level"],
            ["ph-truck", "Ready to ship", "Pre-configured and pre-tested; in most cases ships from Supermicro within a few days."]
        ],
        specs: [
            ["Gold Series configuration (as shipped)", [
                ["Processors", "1× Intel Core Ultra 7 Processor 265 (20C/5.3GHz)"],
                ["Memory", "32GB DDR5-5600"],
                ["Boot / M.2", "1TB NVMe SSD"],
                ["Networking", "1GbE Networking"],
                ["Power", "1000W 80+ Gold Level"]
            ]],
            ["Platform", [
                ["Form factor", "Mid-Tower"],
                ["Dimensions (W × H × D)", "205 x 450 x 470mm (8.07\" x 17.72\" x 18.5\")"],
                ["Processor support", "Single LGA-1851; Intel Core Ultra (Series 2) U7-265, Max 5.30GHz; 20C/20T; 30MB Cache"],
                ["Motherboard", "Super C9B860-MW"],
                ["Chassis", "CSE-GS3B-000NBP"]
            ]],
            ["Memory & storage", [
                ["Slot Count", "4 DIMM slots/2 Channels"],
                ["Max Memory (1DPC)", "256GB 5600MT/s non-ECC DDR5 UDIMM"],
                ["Drive bays / M.2", "1 M.2 PCIe 4.0 x4 NVMe slot (M-key 2280(default)); 1 M.2 PCIe 5.0 x4 NVMe slot (M-key 2280(default); Capacity 1TB)"]
            ]],
            ["I/O, power & cooling", [
                ["LAN", "1 RJ45 1 GbE LAN port"],
                ["USB", "2 USB 3.2 Gen1 Type-A ports (rear); 2 USB 2.0 Type-A ports (rear); 2 USB 3.2 Gen1 Type-A ports (front); 1 Thunderbolt 4 Type-C port (Rear); 1 USB 3.2 Gen2x2 Type-C port (Front)"],
                ["Video", "1 DisplayPort 2.1 port (Rear); 1 DisplayPort over USB Type-C port (Rear); 1 port(s) supporting 8K@60Hz as specified in HDMI 2.1 (Rear)"],
                ["Power supplies", "1x 1000W Gold Level (90%) power supply"],
                ["Cooling", "Up to 3 Front 120mm Fan(s); Up to 1 Rear 120mm Fan(s); Up to 3 Top 120mm Fan(s) (optional)"]
            ]],
            ["Physical & environment", [
                ["Net weight", "28 lbs (12.7 kg)"],
                ["Operating temperature", "10°C to 35°C (50°F to 95°F)"]
            ]]
        ],
        useCases: ["Private/Sovereign AI Endpoint", "SMB - Local Al & Automation"]
    },

    "smc-gold-as-c521d-31101u": {
        model: "AS -C521D-31101U",
        sources: [['Supermicro Gold Series', "https://www.supermicro.com/en/products/gold-series"], ["AS -C521D-31101U datasheet", "https://www.supermicro.com/en/products/system/datasheet/as%20-c521d-31101u"]],
        overview: [
            "The Supermicro AS -C521D-31101U is a pre-configured Gold Series Client System SuperServer, recommended by Supermicro for Commercial SMB Desktop. It ships with 1× AMD EPYC 4124P (4C/5.3GHz), 16GB DDR5-5600 of memory and 1× 1TB M.2 NVMe SSD, with networking (1-port 5GbE) already installed.",
            "It is a Compact Mini-Tower Client System SuperServer. Gold Series systems are Supermicro's best-selling configurations: every component is installed and tested before shipping, and in most cases the system leaves Supermicro's warehouse within a few days, ready to rack and power on."
        ],
        highlights: [
            ["ph-cpu", "Processors", "1× AMD EPYC 4124P (4C/5.3GHz)"],
            ["ph-memory", "Memory", "16GB DDR5-5600"],
            ["ph-hard-drives", "Storage", "1× 1TB M.2 NVMe SSD"],
            ["ph-plugs-connected", "Networking", "1-port 5GbE"],
            ["ph-lightning", "Power", "1× 300W Gold Level"],
            ["ph-windows-logo", "Operating system", "Windows 11 Home"],
            ["ph-truck", "Ready to ship", "Pre-configured and pre-tested; in most cases ships from Supermicro within a few days."]
        ],
        specs: [
            ["Gold Series configuration (as shipped)", [
                ["Processors", "1× AMD EPYC 4124P (4C/5.3GHz)"],
                ["Memory", "16GB DDR5-5600"],
                ["Boot / M.2", "1× 1TB M.2 NVMe SSD"],
                ["Networking", "1-port 5GbE"],
                ["Power", "1× 300W Gold Level"],
                ["Operating system", "Windows 11 Home"]
            ]],
            ["Platform", [
                ["Form factor", "Compact Mini-Tower"],
                ["Dimensions (W × H × D)", "92 x 341 x 290mm (3.62\" x 13.43\" x 11.42\")"],
                ["Processor support", "Single Socket AM5 (LGA-1718); AMD EPYC 4005/4004 Series Processor; 4C/8T; 16MB Cache"],
                ["Motherboard", "Super CARAM5-M"],
                ["Chassis", "CSE-GS2B-000NBP"]
            ]],
            ["Memory & storage", [
                ["Slot Count", "2 DIMM slots/2 Channels"],
                ["Max Memory (1DPC)", "16GB 5600MT/s non-ECC DDR5 UDIMM"],
                ["Drive bays / M.2", "1 M.2 PCIe 4.0 x4 NVMe slot (M-key 2280(default)/22110); 1 M.2 PCIe 5.0 x4 NVMe slot (M-key 2280(default)/22110)"]
            ]],
            ["I/O, power & cooling", [
                ["LAN", "1 RJ45 5 GbE LAN port (5G Realtek Ethernet RTL8126)"],
                ["USB", "2 USB 3.2 Gen2 Type-A ports (Rear); 4 USB 2.0 Type-A ports (Rear); 2 USB 4.0 Type-C ports (Rear); 2 USB 3.2 Gen1 Type-A ports (Header); 2 USB 3.2 Gen2 Type-C ports (Header)"],
                ["Video", "2 USB 4.0 (DP 2.0 Alt Mode) ports (Rear); 1 port(s) supporting 4K@60Hz as specified in HDMI 2.1 (Rear)"],
                ["Expansion", "1 M.2 PCIe 4.0 x4 slot (M-key 2280/22110); 1 M.2 PCIe 5.0 x4 slot (M-key 2280/22110)"],
                ["Power supplies", "1x 300W Gold Level (90%) power supply"],
                ["Cooling", "1 CPU Fan(s)"]
            ]],
            ["Physical & environment", [
                ["Net weight", "6.17 lbs (2.8 kg)"],
                ["Operating temperature", "10°C to 35°C (50°F to 95°F)"]
            ]]
        ],
        useCases: ["Commercial SMB Desktop"]
    },

    "smc-gold-as-c521d-21101u": {
        model: "AS -C521D-21101U",
        sources: [['Supermicro Gold Series', "https://www.supermicro.com/en/products/gold-series"], ["AS -C521D-21101U datasheet", "https://www.supermicro.com/en/products/system/datasheet/as%20-c521d-21101u"]],
        overview: [
            "The Supermicro AS -C521D-21101U is a pre-configured Gold Series Client System SuperServer, recommended by Supermicro for Business AI Desktop. It ships with 1× AMD EPYC 4245P (6C/5.4GHz), 16GB DDR5-5600 of memory and 1× 1TB M.2 NVMe SSD, with networking (1-port 5GbE) already installed.",
            "It is a Compact Mini-Tower Client System SuperServer. Gold Series systems are Supermicro's best-selling configurations: every component is installed and tested before shipping, and in most cases the system leaves Supermicro's warehouse within a few days, ready to rack and power on."
        ],
        highlights: [
            ["ph-cpu", "Processors", "1× AMD EPYC 4245P (6C/5.4GHz)"],
            ["ph-memory", "Memory", "16GB DDR5-5600"],
            ["ph-hard-drives", "Storage", "1× 1TB M.2 NVMe SSD"],
            ["ph-plugs-connected", "Networking", "1-port 5GbE"],
            ["ph-lightning", "Power", "1× 300W Gold Level"],
            ["ph-windows-logo", "Operating system", "Windows 11 Home"],
            ["ph-truck", "Ready to ship", "Pre-configured and pre-tested; in most cases ships from Supermicro within a few days."]
        ],
        specs: [
            ["Gold Series configuration (as shipped)", [
                ["Processors", "1× AMD EPYC 4245P (6C/5.4GHz)"],
                ["Memory", "16GB DDR5-5600"],
                ["Boot / M.2", "1× 1TB M.2 NVMe SSD"],
                ["Networking", "1-port 5GbE"],
                ["Power", "1× 300W Gold Level"],
                ["Operating system", "Windows 11 Home"]
            ]],
            ["Platform", [
                ["Form factor", "Compact Mini-Tower"],
                ["Dimensions (W × H × D)", "92 x 341 x 290mm (3.62\" x 13.43\" x 11.42\")"],
                ["Processor support", "Single Socket AM5 (LGA-1718); AMD EPYC 4005/4004 Series Processor; 6C/12T; 32MB Cache"],
                ["Motherboard", "Super CARAM5-M"],
                ["Chassis", "CSE-GS2B-000NBP"]
            ]],
            ["Memory & storage", [
                ["Slot Count", "2 DIMM slots/2 Channels"],
                ["Max Memory (1DPC)", "16GB 5600MT/s non-ECC DDR5 UDIMM"],
                ["Drive bays / M.2", "1 M.2 PCIe 4.0 x4 NVMe slot (M-key 2280(default)/22110); 1 M.2 PCIe 5.0 x4 NVMe slot (M-key 2280(default)/22110)"]
            ]],
            ["I/O, power & cooling", [
                ["LAN", "1 RJ45 5 GbE LAN port (5G Realtek Ethernet RTL8126)"],
                ["USB", "2 USB 3.2 Gen2 Type-A ports (Rear); 4 USB 2.0 Type-A ports (Rear); 2 USB 4.0 Type-C ports (Rear); 2 USB 3.2 Gen1 Type-A ports (Header); 2 USB 3.2 Gen2 Type-C ports (Header)"],
                ["Video", "2 USB 4.0 (DP 2.0 Alt Mode) ports (Rear); 1 port(s) supporting 4K@60Hz as specified in HDMI 2.1 (Rear)"],
                ["Power supplies", "1x 300W Gold Level (90%) power supply"],
                ["Cooling", "1 CPU Fan(s)"]
            ]],
            ["Physical & environment", [
                ["Net weight", "6.17 lbs (2.8 kg)"],
                ["Operating temperature", "10°C to 35°C (50°F to 95°F)"]
            ]]
        ],
        useCases: ["Business AI Desktop"]
    },

    "smc-gold-as-c521d-11302u": {
        model: "AS -C521D-11302U",
        sources: [['Supermicro Gold Series', "https://www.supermicro.com/en/products/gold-series"], ["AS -C521D-11302U datasheet", "https://www.supermicro.com/en/products/system/datasheet/as%20-c521d-11302u"]],
        overview: [
            "The Supermicro AS -C521D-11302U is a pre-configured Gold Series Client System SuperServer, recommended by Supermicro for Compact AI-Ready Slim Tower. It ships with 1× AMD Ryzen 9700X (8C/5.5GHz), 32GB DDR5-5600 of memory and 1× 1TB M.2 NVMe SSD, with networking (1-port 5GbE) already installed.",
            "It is a Compact Mini-Tower Client System SuperServer. Gold Series systems are Supermicro's best-selling configurations: every component is installed and tested before shipping, and in most cases the system leaves Supermicro's warehouse within a few days, ready to rack and power on."
        ],
        highlights: [
            ["ph-cpu", "Processors", "1× AMD Ryzen 9700X (8C/5.5GHz)"],
            ["ph-memory", "Memory", "32GB DDR5-5600"],
            ["ph-hard-drives", "Storage", "1× 1TB M.2 NVMe SSD"],
            ["ph-plugs-connected", "Networking", "1-port 5GbE"],
            ["ph-lightning", "Power", "1× 300W Gold Level"],
            ["ph-windows-logo", "Operating system", "Windows 11 Pro"],
            ["ph-truck", "Ready to ship", "Pre-configured and pre-tested; in most cases ships from Supermicro within a few days."]
        ],
        specs: [
            ["Gold Series configuration (as shipped)", [
                ["Processors", "1× AMD Ryzen 9700X (8C/5.5GHz)"],
                ["Memory", "32GB DDR5-5600"],
                ["Boot / M.2", "1× 1TB M.2 NVMe SSD"],
                ["Networking", "1-port 5GbE"],
                ["Power", "1× 300W Gold Level"],
                ["Operating system", "Windows 11 Pro"]
            ]],
            ["Platform", [
                ["Form factor", "Compact Mini-Tower"],
                ["Dimensions (W × H × D)", "92 x 341 x 290mm (3.62\" x 13.43\" x 11.42\")"],
                ["Processor support", "Single AM5 (LGA-1718); AMD Ryzen 9000 Series Processors; 8C/16T; 40MB Cache"],
                ["Motherboard", "Super CARAM5-M"],
                ["Chassis", "CSE-GS2B-000NBP"]
            ]],
            ["Memory & storage", [
                ["Slot Count", "2 DIMM slots/2 Channels"],
                ["Max Memory (1DPC)", "32GB 5600MT/s non-ECC DDR5 UDIMM"],
                ["Drive bays / M.2", "Default: Total 2 bays; 1 internal fixed 3.5\" SATA drive bay; 1 internal fixed 2.5\" SATA drive bay; M.2:; 1 M.2 PCIe 4.0 x4 NVMe slot (M-key 2280(default)/22110); 1 M.2 PCIe 5.0 x4 NVMe slot (M-key 2280(default)/22110)"]
            ]],
            ["I/O, power & cooling", [
                ["LAN", "1 RJ45 5 GbE LAN port (5G Realtek Ethernet RTL8126)"],
                ["USB", "2 USB 3.2 Gen2 Type-A ports (Rear); 4 USB 2.0 Type-A ports (Rear); 2 USB 4.0 Type-C ports (Rear); 2 USB 3.2 Gen1 Type-A ports (Header); 2 USB 3.2 Gen2 Type-C ports (Header)"],
                ["Video", "2 USB 4.0 (DP 2.0 Alt Mode) ports (Rear); 1 port(s) supporting 4K@60Hz as specified in HDMI 2.1 (Rear)"],
                ["Expansion", "1 M.2 PCIe 4.0 x4 slot (M-key 2280/22110); 1 M.2 PCIe 5.0 x4 slot (M-key 2280/22110)"],
                ["Power supplies", "1x 300W Gold Level (90%) power supply"],
                ["Cooling", "1 CPU Fan(s)"]
            ]],
            ["Physical & environment", [
                ["Net weight", "6.17 lbs (2.8 kg)"],
                ["Operating temperature", "10°C to 35°C (50°F to 95°F)"]
            ]]
        ],
        useCases: ["Compact AI-Ready Slim Tower"]
    },

    "smc-gold-sys-822gs-nb3rt-01-g2": {
        model: "SYS-822GS-NB3RT-01-G2",
        sources: [['Supermicro Gold Series', "https://www.supermicro.com/en/products/gold-series"], ["SYS-822GS-NB3RT-01-G2 datasheet", "https://www.supermicro.com/en/products/system/datasheet/sys-822gs-nb3rt-01-g2"]],
        overview: [
            "The Supermicro SYS-822GS-NB3RT-01-G2 is a pre-configured Gold Series GPU SuperServer, recommended by Supermicro for Large-Scale AI Inference Serving. It ships with 2× Intel Xeon 6768P (64C/2.4GHz), NVIDIA HGX B300 8-GPU, 2TB DDR5-6400 of memory and 1× 960GB M.2 NVMe SSD, with networking (8-port 800G IB or 16-port 400GbE) already installed.",
            "It is built on the GPU SuperServer platform: dual-socket Intel 8U System with NVIDIA HGX B300 8-GPU. Gold Series systems are Supermicro's best-selling configurations: every component is installed and tested before shipping, and in most cases the system leaves Supermicro's warehouse within a few days, ready to rack and power on."
        ],
        highlights: [
            ["ph-cpu", "Processors", "2× Intel Xeon 6768P (64C/2.4GHz)"],
            ["ph-graphics-card", "GPUs", "NVIDIA HGX B300 8-GPU"],
            ["ph-memory", "Memory", "2TB DDR5-6400"],
            ["ph-hard-drives", "Storage", "1× 960GB M.2 NVMe SSD"],
            ["ph-plugs-connected", "Networking", "8-port 800G IB or 16-port 400GbE"],
            ["ph-lightning", "Power", "Redundant 6600W Titanium Level"],
            ["ph-truck", "Ready to ship", "Pre-configured and pre-tested; in most cases ships from Supermicro within a few days."]
        ],
        specs: [
            ["Gold Series configuration (as shipped)", [
                ["Processors", "2× Intel Xeon 6768P (64C/2.4GHz)"],
                ["GPUs", "NVIDIA HGX B300 8-GPU"],
                ["Memory", "2TB DDR5-6400"],
                ["Boot / M.2", "1× 960GB M.2 NVMe SSD"],
                ["Networking", "8-port 800G IB or 16-port 400GbE"],
                ["Power", "Redundant 6600W Titanium Level"]
            ]],
            ["Platform", [
                ["Form factor", "8U Rackmount"],
                ["Dimensions (W × H × D)", "449 x 356 x 950mm (17.6\" x 13.8\" x 37.4\")"],
                ["Processor support", "Dual Socket E2 (LGA-4710); Intel Xeon 6700 series processors with P-cores; Up to 86C/172T; Up to 336MB Cache per CPU"],
                ["Motherboard", "Super X14DBG-LC"],
                ["Chassis", "CSE-GP807TS-R000NP"]
            ]],
            ["GPU support", [
                ["Max GPU Count", "8 onboard GPUs"],
                ["Supported GPU", "NVIDIA SXM: HGX B300 8-GPU (288GB)"],
                ["GPU-GPU Interconnect", "NVIDIA NVLink with NVSwitch"]
            ]],
            ["Memory & storage", [
                ["Slot Count", "32 DIMM slots"],
                ["Max Memory (1DPC)", "Up to 4TB 6400MT/s ECC DDR5 RDIMM"],
                ["Max Memory (2DPC)", "Up to 8TB 6000MT/s ECC DDR5 RDIMM"],
                ["Drive bays / M.2", "2 M.2 NVMe slots (M-key; RAID support via S3808N controller)"]
            ]],
            ["I/O, power & cooling", [
                ["LAN", "2 RJ45 10 GbE LAN ports (Intel X710); 8 OSFP 800 GbE LAN ports (NVIDIA ConnectX-8 SuperNIC)"],
                ["USB", "1 USB 3.0 Type-A port (Front); 1 USB 2.0 Type-A port (Front)"],
                ["Video", "1 VGA port; 1 mini-DP port"],
                ["Power supplies", "6x 6600W Redundant (3 + 3) Titanium Level (96%) power supplies"],
                ["Cooling", "Up to 12 heavy duty fans with optimal fan speed control"]
            ]],
            ["Physical & environment", [
                ["Net weight", "263 lbs (119 kg)"],
                ["Operating temperature", "10°C to 35°C (50°F to 95°F)"]
            ]]
        ],
        useCases: ["Large-Scale AI Inference Serving"]
    },

    "smc-gold-sys-822gs-nb3rt-02-g2": {
        model: "SYS-822GS-NB3RT-02-G2",
        sources: [['Supermicro Gold Series', "https://www.supermicro.com/en/products/gold-series"], ["SYS-822GS-NB3RT-02-G2 datasheet", "https://www.supermicro.com/en/products/system/datasheet/sys-822gs-nb3rt-02-g2"]],
        overview: [
            "The Supermicro SYS-822GS-NB3RT-02-G2 is a pre-configured Gold Series GPU SuperServer, recommended by Supermicro for Large-Scale AI Inference Serving. It ships with 2× Intel Xeon 6776P (64C/2.4GHz), NVIDIA HGX B300 8-GPU, 2TB DDR5-6400 of memory and 1× 960GB M.2 NVMe SSD, with networking (1× NVIDIA BlueField-3 B3220; 8-port 800G IB or 16-port 400GbE) already installed.",
            "It is built on the GPU SuperServer platform: dual-socket Intel 8U System with NVIDIA HGX B300 8-GPU. Gold Series systems are Supermicro's best-selling configurations: every component is installed and tested before shipping, and in most cases the system leaves Supermicro's warehouse within a few days, ready to rack and power on."
        ],
        highlights: [
            ["ph-cpu", "Processors", "2× Intel Xeon 6776P (64C/2.4GHz)"],
            ["ph-graphics-card", "GPUs", "NVIDIA HGX B300 8-GPU"],
            ["ph-memory", "Memory", "2TB DDR5-6400"],
            ["ph-hard-drives", "Storage", "1× 960GB M.2 NVMe SSD"],
            ["ph-plugs-connected", "Networking", "1× NVIDIA BlueField-3 B3220; 8-port 800G IB or 16-port 400GbE"],
            ["ph-lightning", "Power", "Redundant 6600W Titanium Level"],
            ["ph-truck", "Ready to ship", "Pre-configured and pre-tested; in most cases ships from Supermicro within a few days."]
        ],
        specs: [
            ["Gold Series configuration (as shipped)", [
                ["Processors", "2× Intel Xeon 6776P (64C/2.4GHz)"],
                ["GPUs", "NVIDIA HGX B300 8-GPU"],
                ["Memory", "2TB DDR5-6400"],
                ["Boot / M.2", "1× 960GB M.2 NVMe SSD"],
                ["Networking", "1× NVIDIA BlueField-3 B3220"],
                ["Networking", "8-port 800G IB or 16-port 400GbE"],
                ["Power", "Redundant 6600W Titanium Level"]
            ]],
            ["Platform", [
                ["Form factor", "8U Rackmount"],
                ["Dimensions (W × H × D)", "449 x 356 x 950mm (17.6\" x 13.8\" x 37.4\")"],
                ["Processor support", "Dual Socket E2 (LGA-4710); Intel Xeon 6700 series processors with P-cores; Up to 86C/172T; Up to 336MB Cache per CPU"],
                ["Motherboard", "Super X14DBG-LC"],
                ["Chassis", "CSE-GP807TS-R000NP"]
            ]],
            ["GPU support", [
                ["Max GPU Count", "8 onboard GPUs"],
                ["Supported GPU", "NVIDIA SXM: HGX B300 8-GPU (288GB)"],
                ["GPU-GPU Interconnect", "NVIDIA NVLink with NVSwitch"]
            ]],
            ["Memory & storage", [
                ["Slot Count", "32 DIMM slots"],
                ["Max Memory (1DPC)", "Up to 4TB 6400MT/s ECC DDR5 RDIMM"],
                ["Max Memory (2DPC)", "Up to 8TB 6000MT/s ECC DDR5 RDIMM"],
                ["Drive bays / M.2", "2 M.2 NVMe slots (M-key; RAID support via S3808N controller)"]
            ]],
            ["I/O, power & cooling", [
                ["LAN", "2 RJ45 10 GbE LAN ports (Intel X710); 8 OSFP 800 GbE LAN ports (NVIDIA ConnectX-8 SuperNIC)"],
                ["USB", "1 USB 3.0 Type-A port (Front); 1 USB 2.0 Type-A port (Front)"],
                ["Video", "1 VGA port; 1 mini-DP port"],
                ["Power supplies", "6x 6600W Redundant (3 + 3) Titanium Level (96%) power supplies"],
                ["Cooling", "Up to 12 heavy duty fans with optimal fan speed control"]
            ]],
            ["Physical & environment", [
                ["Net weight", "263 lbs (119 kg)"],
                ["Operating temperature", "10°C to 35°C (50°F to 95°F)"]
            ]]
        ],
        useCases: ["Large-Scale AI Inference Serving"]
    },

    "smc-gold-as-8126gs-nb3rt-01-g2": {
        model: "AS -8126GS-NB3RT-01-G2",
        sources: [['Supermicro Gold Series', "https://www.supermicro.com/en/products/gold-series"], ["AS -8126GS-NB3RT-01-G2 datasheet", "https://www.supermicro.com/en/products/system/datasheet/as%20-8126gs-nb3rt-01-g2"]],
        overview: [
            "The Supermicro AS -8126GS-NB3RT-01-G2 is a pre-configured Gold Series GPU SuperServer, recommended by Supermicro for Large-Scale AI Inference Serving. It ships with 2× AMD EPYC 9575F (128C/3.3GHz), NVIDIA HGX B300 8-GPU, 3TB DDR5-6400 of memory and 8× 7.6TB E1.S NVMe SSD, 2× 1.9TB M.2 NVMe SSD, with networking (8-port 800GbE/XDR800; 2× 2-port 200GbE/NDR200) already installed.",
            "It is built on the GPU SuperServer platform: dual-socket AMD 8U GPU System with NVIDIA HGX B300 NVL8. Gold Series systems are Supermicro's best-selling configurations: every component is installed and tested before shipping, and in most cases the system leaves Supermicro's warehouse within a few days, ready to rack and power on."
        ],
        highlights: [
            ["ph-cpu", "Processors", "2× AMD EPYC 9575F (128C/3.3GHz)"],
            ["ph-graphics-card", "GPUs", "NVIDIA HGX B300 8-GPU"],
            ["ph-memory", "Memory", "3TB DDR5-6400"],
            ["ph-hard-drives", "Storage", "8× 7.6TB E1.S NVMe SSD; 2× 1.9TB M.2 NVMe SSD"],
            ["ph-plugs-connected", "Networking", "8-port 800GbE/XDR800; 2× 2-port 200GbE/NDR200"],
            ["ph-lightning", "Power", "Redundant 6600W Titanium Level"],
            ["ph-truck", "Ready to ship", "Pre-configured and pre-tested; in most cases ships from Supermicro within a few days."]
        ],
        specs: [
            ["Gold Series configuration (as shipped)", [
                ["Processors", "2× AMD EPYC 9575F (128C/3.3GHz)"],
                ["GPUs", "NVIDIA HGX B300 8-GPU"],
                ["Memory", "3TB DDR5-6400"],
                ["Storage", "8× 7.6TB E1.S NVMe SSD"],
                ["Boot / M.2", "2× 1.9TB M.2 NVMe SSD"],
                ["Networking", "8-port 800GbE/XDR800"],
                ["Networking", "2× 2-port 200GbE/NDR200"],
                ["Power", "Redundant 6600W Titanium Level"]
            ]],
            ["Platform", [
                ["Form factor", "8U Rackmount"],
                ["Dimensions (W × H × D)", "449 x 356 x 950mm (17.6\" x 13.8\" x 37.4\")"],
                ["Processor support", "Dual processor(s); AMD EPYC 9005 Series Processors; Up to 384C/768T"],
                ["Motherboard", "Super H14DSG-OM"],
                ["Chassis", "CSE-GP807TS-R000NP"]
            ]],
            ["GPU support", [
                ["Max GPU Count", "8 onboard GPUs"],
                ["Supported GPU", "NVIDIA SXM: HGX B300 8-GPU (288GB)"],
                ["CPU-GPU Interconnect", "PCIe 5.0 x16 CPU-to-GPU Interconnect"],
                ["GPU-GPU Interconnect", "NVIDIA NVLink with NVSwitch"]
            ]],
            ["Memory & storage", [
                ["Slot Count", "24 DIMM slots"],
                ["Max Memory (1DPC)", "Up to 6TB 4800MT/s ECC DDR5 RDIMM"],
                ["Max Memory (1DPC)", "Up to 6TB 6400MT/s ECC DDR5 RDIMM"],
                ["Drive bays / M.2", "2 M.2 NVMe slots (M-key)"]
            ]],
            ["I/O, power & cooling", [
                ["USB", "1 USB 3.0 Type-A port (Front); 1 USB 2.0 Type-A port (Front)"],
                ["Video", "1 VGA port; 1 mini-DP port"],
                ["Power supplies", "6x 6600W Redundant (3 + 3) Titanium Level (96%) power supplies"],
                ["Cooling", "Up to 12 heavy duty fans with optimal fan speed control"]
            ]],
            ["Physical & environment", [
                ["Net weight", "263 lbs (119 kg)"],
                ["Operating temperature", "10°C to 35°C (50°F to 95°F)"]
            ]]
        ],
        useCases: ["Large-Scale AI Inference Serving"]
    },

    "smc-gold-sys-212gb-fnr-01-g2": {
        model: "SYS-212GB-FNR-01-G2",
        sources: [['Supermicro Gold Series', "https://www.supermicro.com/en/products/gold-series"], ["SYS-212GB-FNR-01-G2 datasheet", "https://www.supermicro.com/en/products/system/datasheet/sys-212gb-fnr-01-g2"]],
        overview: [
            "The Supermicro SYS-212GB-FNR-01-G2 is a pre-configured Gold Series GPU SuperServer, recommended by Supermicro for SaaS - Agent Flow AI Inference. It ships with 1× Intel Xeon 6731P (32C/2.5GHz), 2× NVIDIA RTX PRO 6000 Blackwell Server Edition, 96GB GDDR7, 512GB DDR5-6400 of memory and 2× 3.84TB E1.S SSD, 1× 960GB M.2 NVMe SSD, with networking (1× dual 10GbE RJ45) already installed.",
            "It is built on the GPU SuperServer platform: single-socket Intel 2U PCIe GPU System with up to 4 NVIDIA RTX PRO 6000 Blackwell Server Edition or NVIDIA H200. Gold Series systems are Supermicro's best-selling configurations: every component is installed and tested before shipping, and in most cases the system leaves Supermicro's warehouse within a few days, ready to rack and power on."
        ],
        highlights: [
            ["ph-cpu", "Processors", "1× Intel Xeon 6731P (32C/2.5GHz)"],
            ["ph-graphics-card", "GPUs", "2× NVIDIA RTX PRO 6000 Blackwell Server Edition, 96GB GDDR7"],
            ["ph-memory", "Memory", "512GB DDR5-6400"],
            ["ph-hard-drives", "Storage", "2× 3.84TB E1.S SSD; 1× 960GB M.2 NVMe SSD"],
            ["ph-plugs-connected", "Networking", "1× dual 10GbE RJ45"],
            ["ph-lightning", "Power", "2× 2700W Titanium Level"],
            ["ph-truck", "Ready to ship", "Pre-configured and pre-tested; in most cases ships from Supermicro within a few days."]
        ],
        specs: [
            ["Gold Series configuration (as shipped)", [
                ["Processors", "1× Intel Xeon 6731P (32C/2.5GHz)"],
                ["GPUs", "2× NVIDIA RTX PRO 6000 Blackwell Server Edition, 96GB GDDR7"],
                ["Memory", "512GB DDR5-6400"],
                ["Storage", "2× 3.84TB E1.S SSD"],
                ["Boot / M.2", "1× 960GB M.2 NVMe SSD"],
                ["Networking", "1× dual 10GbE RJ45"],
                ["Power", "2× 2700W Titanium Level"]
            ]],
            ["Platform", [
                ["Form factor", "2U Rackmount"],
                ["Dimensions (W × H × D)", "438.4 x 87 x 900mm (17.3\" x 3.43\" x 35.43\")"],
                ["Processor support", "Single Socket E2 (LGA-4710); Intel Xeon 6700/6500 series processors with P-cores; Up to 80C/160T"],
                ["Motherboard", "Super X14SBGM"],
                ["Chassis", "CSE-MG204-R000NDFP"]
            ]],
            ["GPU support", [
                ["Max GPU Count", "Up to 4 double-width GPUs"],
                ["Supported GPU", "NVIDIA PCIe: H200 NVL (141GB), NVIDIA RTX PRO 6000 Blackwell Server Edition"],
                ["CPU-GPU Interconnect", "PCIe 5.0 x16 CPU-to-GPU Interconnect"],
                ["GPU-GPU Interconnect", "NVIDIA NVLink Bridge (optional)"]
            ]],
            ["Memory & storage", [
                ["Slot Count", "16 DIMM slots/8 Channels"],
                ["Max Memory (1DPC)", "Up to 1TB 6400MT/s ECC DDR5 RDIMM"],
                ["Max Memory (1DPC)", "Up to 512GB 8000MT/s ECC DDR5 MRDIMM"],
                ["Max Memory (2DPC)", "Up to 2TB 5200MT/s ECC DDR5 RDIMM"],
                ["Drive bays / M.2", "2 M.2 PCIe 5.0 x2 NVMe slots (M-key 2280/22110)"]
            ]],
            ["I/O, power & cooling", [
                ["LAN", "1 RJ45 1 GbE Dedicated BMC LAN port"],
                ["USB", "1 USB 3.0 Type-A port (Rear)"],
                ["Video", "1 mini-DP port"],
                ["Expansion", "2 M.2 PCIe 5.0 x2 NVMe slots (M-key 2280/22110)"],
                ["Power supplies", "2x 2700W Redundant Titanium Level (96%) power supplies"],
                ["Cooling", "5x 8cm heavy duty fans with optimal fan speed control"]
            ]],
            ["Physical & environment", [
                ["Net weight", "66 lbs (30 kg)"],
                ["Operating temperature", "10°C to 35°C (50°F to 95°F)"]
            ]]
        ],
        useCases: ["SaaS - Agent Flow AI Inference"]
    },

    "smc-gold-sys-422ga-nrt-01-g2": {
        model: "SYS-422GA-NRT-01-G2",
        sources: [['Supermicro Gold Series', "https://www.supermicro.com/en/products/gold-series"], ["SYS-422GA-NRT-01-G2 datasheet", "https://www.supermicro.com/en/products/system/datasheet/sys-422ga-nrt-01-g2"]],
        overview: [
            "The Supermicro SYS-422GA-NRT-01-G2 is a pre-configured Gold Series GPU SuperServer, recommended by Supermicro for PaaS - Agent Flow AI Inference. It ships with 2× Intel Xeon 6960P (144 cores/2.7GHz), 4× NVIDIA RTX PRO 6000 Blackwell Server Edition, 96GB GDDR7, 1TB DDR5-6400 of memory and 2× 3.84TB NVMe SSD, 1× 960GB M.2 NVMe SSD, with networking (1× dual 10GbE RJ45) already installed.",
            "It is built on the GPU SuperServer platform: dual-socket Intel 4U Dual-Root PCIe GPU System with up to 8 GPUs. Gold Series systems are Supermicro's best-selling configurations: every component is installed and tested before shipping, and in most cases the system leaves Supermicro's warehouse within a few days, ready to rack and power on."
        ],
        highlights: [
            ["ph-cpu", "Processors", "2× Intel Xeon 6960P (144 cores/2.7GHz)"],
            ["ph-graphics-card", "GPUs", "4× NVIDIA RTX PRO 6000 Blackwell Server Edition, 96GB GDDR7"],
            ["ph-memory", "Memory", "1TB DDR5-6400"],
            ["ph-hard-drives", "Storage", "2× 3.84TB NVMe SSD; 1× 960GB M.2 NVMe SSD"],
            ["ph-plugs-connected", "Networking", "1× dual 10GbE RJ45"],
            ["ph-lightning", "Power", "4× 3200W Titanium Level"],
            ["ph-truck", "Ready to ship", "Pre-configured and pre-tested; in most cases ships from Supermicro within a few days."]
        ],
        specs: [
            ["Gold Series configuration (as shipped)", [
                ["Processors", "2× Intel Xeon 6960P (144 cores/2.7GHz)"],
                ["GPUs", "4× NVIDIA RTX PRO 6000 Blackwell Server Edition, 96GB GDDR7"],
                ["Memory", "1TB DDR5-6400"],
                ["Storage", "2× 3.84TB NVMe SSD"],
                ["Boot / M.2", "1× 960GB M.2 NVMe SSD"],
                ["Networking", "1× dual 10GbE RJ45"],
                ["Power", "4× 3200W Titanium Level"]
            ]],
            ["Platform", [
                ["Form factor", "4U Rackmount"],
                ["Dimensions (W × H × D)", "437 x 178 x 737mm (17.2\" x 7\" x 29\")"],
                ["Processor support", "Dual Socket BR (LGA-7529); Intel Xeon 6900 series processors with P-cores; Up to 128C/256T; Up to 504MB Cache per CPU"],
                ["Motherboard", "Super X14DBG-AP"],
                ["Chassis", "CSE-418G3TS-R6K40P"]
            ]],
            ["GPU support", [
                ["Max GPU Count", "Up to 2 quad-width or 2 triple-width or 8 double-width or 10 single-width GPUs"],
                ["NVIDIA PCIe", "H200 NVL (141GB), NVIDIA RTX PRO 4500 Blackwell Server Edition, NVIDIA RTX PRO 6000 Blackwell; Max-Q Workstation Edition, NVIDIA RTX PRO 6000 Blackwell Server Edition"],
                ["CPU-GPU Interconnect", "PCIe 5.0 x16 Switch Dual-Root"],
                ["GPU-GPU Interconnect", "NVIDIA NVLink Bridge (optional)"]
            ]],
            ["Memory & storage", [
                ["Slot Count", "24 DIMM slots"],
                ["Max Memory (1DPC)", "Up to 6TB 6400MT/s ECC DDR5 RDIMM"],
                ["Max Memory (1DPC)", "Up to 6TB 8800MT/s ECC DDR5 MRDIMM"],
                ["Drive bays / M.2", "2 M.2 NVMe slots (M-key)"]
            ]],
            ["I/O, power & cooling", [
                ["LAN", "2 RJ45 10 GbE LAN ports (Intel X710)"],
                ["USB", "2 USB 3.0 Type-A ports (Rear)"],
                ["Video", "1 VGA port"],
                ["Expansion", "2 M.2 PCIe 5.0 x4 NVMe slots (B+M-key)"],
                ["Power supplies", "4x 3200W Redundant (3 + 1) Titanium Level (96%) power supplies"],
                ["Cooling", "10x 8cm heavy duty fans with optimal fan speed control"]
            ]],
            ["Physical & environment", [
                ["Net weight", "65.5 lbs (29.7 kg)"],
                ["Operating temperature", "10°C to 35°C (50°F to 95°F)"]
            ]]
        ],
        useCases: ["PaaS - Agent Flow AI Inference"]
    },

    "smc-gold-sys-422ga-nrt-02-g2": {
        model: "SYS-422GA-NRT-02-G2",
        sources: [['Supermicro Gold Series', "https://www.supermicro.com/en/products/gold-series"], ["SYS-422GA-NRT-02-G2 datasheet", "https://www.supermicro.com/en/products/system/datasheet/sys-422ga-nrt-02-g2"]],
        overview: [
            "The Supermicro SYS-422GA-NRT-02-G2 is a pre-configured Gold Series GPU SuperServer, recommended by Supermicro for PaaS - Agent Flow AI Inference. It ships with 2× Intel Xeon 6962P (144C/2.7GHz), 8× NVIDIA RTX PRO 6000 Blackwell Server Edition, 1.5TB DDR5-6400 of memory and 2× 3.84TB NVMe SSD, 1× 960GB M.2 NVMe SSD, with networking (2× 1-port 400GbE/400G NDR; 1× 2-port 200GbE/NDR200; 1× 2-port 10GbE RJ45) already installed.",
            "It is built on the GPU SuperServer platform: dual-socket Intel 4U Dual-Root PCIe GPU System with up to 8 GPUs. Gold Series systems are Supermicro's best-selling configurations: every component is installed and tested before shipping, and in most cases the system leaves Supermicro's warehouse within a few days, ready to rack and power on."
        ],
        highlights: [
            ["ph-cpu", "Processors", "2× Intel Xeon 6962P (144C/2.7GHz)"],
            ["ph-graphics-card", "GPUs", "8× NVIDIA RTX PRO 6000 Blackwell Server Edition"],
            ["ph-memory", "Memory", "1.5TB DDR5-6400"],
            ["ph-hard-drives", "Storage", "2× 3.84TB NVMe SSD; 1× 960GB M.2 NVMe SSD"],
            ["ph-plugs-connected", "Networking", "2× 1-port 400GbE/400G NDR; 1× 2-port 200GbE/NDR200; 1× 2-port 10GbE RJ45"],
            ["ph-lightning", "Power", "4× 3200W Titanium Level"],
            ["ph-truck", "Ready to ship", "Pre-configured and pre-tested; in most cases ships from Supermicro within a few days."]
        ],
        specs: [
            ["Gold Series configuration (as shipped)", [
                ["Processors", "2× Intel Xeon 6962P (144C/2.7GHz)"],
                ["GPUs", "8× NVIDIA RTX PRO 6000 Blackwell Server Edition"],
                ["Memory", "1.5TB DDR5-6400"],
                ["Storage", "2× 3.84TB NVMe SSD"],
                ["Boot / M.2", "1× 960GB M.2 NVMe SSD"],
                ["Networking", "2× 1-port 400GbE/400G NDR"],
                ["Networking", "1× 2-port 200GbE/NDR200"],
                ["Networking", "1× 2-port 10GbE RJ45"],
                ["Power", "4× 3200W Titanium Level"]
            ]],
            ["Platform", [
                ["Form factor", "4U Rackmount"],
                ["Dimensions (W × H × D)", "437 x 178 x 737mm (17.2\" x 7\" x 29\")"],
                ["Processor support", "Dual Socket BR (LGA-7529); Intel Xeon 6900 series processors with P-cores; Up to 128C/256T; Up to 504MB Cache per CPU"],
                ["Motherboard", "Super X14DBG-AP"],
                ["Chassis", "CSE-418G3TS-R6K40P"]
            ]],
            ["GPU support", [
                ["Max GPU Count", "Up to 2 quad-width or 2 triple-width or 8 double-width or 10 single-width GPUs"],
                ["NVIDIA PCIe", "H200 NVL (141GB), NVIDIA RTX PRO 4500 Blackwell Server Edition, NVIDIA RTX PRO 6000 Blackwell; Max-Q Workstation Edition, NVIDIA RTX PRO 6000 Blackwell Server Edition"],
                ["CPU-GPU Interconnect", "PCIe 5.0 x16 Switch Dual-Root"],
                ["GPU-GPU Interconnect", "NVIDIA NVLink Bridge (optional)"]
            ]],
            ["Memory & storage", [
                ["Slot Count", "24 DIMM slots"],
                ["Max Memory (1DPC)", "Up to 6TB 6400MT/s ECC DDR5 RDIMM"],
                ["Max Memory (1DPC)", "Up to 6TB 8800MT/s ECC DDR5 MRDIMM"],
                ["Drive bays / M.2", "2 M.2 NVMe slots (M-key)"]
            ]],
            ["I/O, power & cooling", [
                ["LAN", "2 RJ45 10 GbE LAN ports (Intel X710)"],
                ["USB", "2 USB 3.0 Type-A ports (Rear)"],
                ["Video", "1 VGA port"],
                ["Expansion", "2 M.2 PCIe 5.0 x4 NVMe slots (B+M-key)"],
                ["Power supplies", "4x 3200W Redundant (3 + 1) Titanium Level (96%) power supplies"],
                ["Cooling", "10x 8cm heavy duty fans with optimal fan speed control"]
            ]],
            ["Physical & environment", [
                ["Net weight", "65.5 lbs (29.7 kg)"],
                ["Operating temperature", "10°C to 35°C (50°F to 95°F)"]
            ]]
        ],
        useCases: ["PaaS - Agent Flow AI Inference"]
    },

    "smc-gold-as-5126gs-tnrt-01-g2": {
        model: "AS -5126GS-TNRT-01-G2",
        sources: [['Supermicro Gold Series', "https://www.supermicro.com/en/products/gold-series"], ["AS -5126GS-TNRT-01-G2 datasheet", "https://www.supermicro.com/en/products/system/datasheet/as%20-5126gs-tnrt-01-g2"]],
        overview: [
            "The Supermicro AS -5126GS-TNRT-01-G2 is a pre-configured Gold Series GPU SuperServer, recommended by Supermicro for SaaS - Agent Flow AI Inference. It ships with 2× AMD EPYC 9355 (32C/3.55GHz), 2× NVIDIA RTX PRO 6000 Blackwell Server Edition, 1.5TB DDR5-6400 of memory and 1× 960GB M.2 NVMe SSD, with networking (1× dual 10GbE RJ45) already installed.",
            "It is built on the GPU SuperServer platform: dual-socket AMD 5U System with 8 PCIe GPUs. Gold Series systems are Supermicro's best-selling configurations: every component is installed and tested before shipping, and in most cases the system leaves Supermicro's warehouse within a few days, ready to rack and power on."
        ],
        highlights: [
            ["ph-cpu", "Processors", "2× AMD EPYC 9355 (32C/3.55GHz)"],
            ["ph-graphics-card", "GPUs", "2× NVIDIA RTX PRO 6000 Blackwell Server Edition"],
            ["ph-memory", "Memory", "1.5TB DDR5-6400"],
            ["ph-hard-drives", "Storage", "1× 960GB M.2 NVMe SSD"],
            ["ph-plugs-connected", "Networking", "1× dual 10GbE RJ45"],
            ["ph-lightning", "Power", "6× 2700W Titanium Level"],
            ["ph-truck", "Ready to ship", "Pre-configured and pre-tested; in most cases ships from Supermicro within a few days."]
        ],
        specs: [
            ["Gold Series configuration (as shipped)", [
                ["Processors", "2× AMD EPYC 9355 (32C/3.55GHz)"],
                ["GPUs", "2× NVIDIA RTX PRO 6000 Blackwell Server Edition"],
                ["Memory", "1.5TB DDR5-6400"],
                ["Storage", "1× 960GB M.2 NVMe SSD"],
                ["Networking", "1× dual 10GbE RJ45"],
                ["Power", "6× 2700W Titanium Level"]
            ]],
            ["Platform", [
                ["Form factor", "5U Rackmount"],
                ["Dimensions (W × H × D)", "438 x 222.5 x 786.1mm (17.2\" x 8.75\" x 31\")"],
                ["Processor support", "Dual processor(s); AMD EPYC 9005/9004 Series Processors; Up to 192C/384T"],
                ["Motherboard", "Super H14DSG-O-CPU"],
                ["Chassis", "CSE-528G2TS-R000NDP"]
            ]],
            ["GPU support", [
                ["Max GPU Count", "Up to 8 double-width GPUs"],
                ["NVIDIA PCIe", "H100 NVL, H200 NVL (141GB), L40S, NVIDIA RTX PRO 6000 Blackwell Server Edition"],
                ["AMD PCIe", "AMD Instinct MI350P"],
                ["CPU-GPU Interconnect", "Direct Attached"],
                ["GPU-GPU Interconnect", "NVIDIA NVLink Bridge (optional), AMD Infinity Fabric Link (optional)"]
            ]],
            ["Memory & storage", [
                ["Slot Count", "24 DIMM slots"],
                ["Max Memory (1DPC)", "Up to 6TB 6400MT/s ECC DDR5 RDIMM (AMD EPYC 9005 Series Processor)"],
                ["Max Memory (1DPC)", "Up to 6TB 4800MT/s ECC DDR5 RDIMM (AMD EPYC 9004 Series Processor)"],
                ["Drive bays / M.2", "1 M.2 PCIe 3.0 x4 NVMe slot (M-key)"]
            ]],
            ["I/O, power & cooling", [
                ["LAN", "1 RJ45 1 GbE Dedicated BMC LAN port; 2 RJ45 10 GBASE-T LAN ports"],
                ["USB", "2 ports (rear)"],
                ["Video", "1 VGA port"],
                ["Power supplies", "6x 2700W Redundant (4 + 2) Titanium Level (96%) power supplies"],
                ["Cooling", "Up to 10 heavy duty fans with optimal fan speed control"]
            ]],
            ["Physical & environment", [
                ["Net weight", "65.5 lbs (29.7 kg)"],
                ["Operating temperature", "10°C to 35°C (50°F to 95°F)"]
            ]]
        ],
        useCases: ["SaaS - Agent Flow AI Inference"]
    },

    "smc-gold-ars-511gd-nb-lcc-01-g2": {
        model: "ARS-511GD-NB-LCC-01-G2",
        sources: [['Supermicro Gold Series', "https://www.supermicro.com/en/products/gold-series"], ["ARS-511GD-NB-LCC-01-G2 datasheet", "https://www.supermicro.com/en/products/system/datasheet/ars-511gd-nb-lcc-01-g2"]],
        overview: [
            "The Supermicro ARS-511GD-NB-LCC-01-G2 is a pre-configured Gold Series GPU SuperServer, recommended by Supermicro for AI Agent Development and Deployment. It ships with 1 NVIDIA Grace 72-core ARM Neoverse V2 CPU, 1 NVIDIA Blackwell Ultra (B300) GPU, 748 GB of Coherent Memory and 2× 960GB M.2 NVMe SSD, 2× 1.92TB M.2 NVMe SSD, with networking (NVIDIA ConnectX-8 SuperNIC) already installed.",
            "It is built on the GPU SuperServer platform: Super AI Station with NVIDIA GB300 Grace Blackwell Ultra Desktop Superchip. Gold Series systems are Supermicro's best-selling configurations: every component is installed and tested before shipping, and in most cases the system leaves Supermicro's warehouse within a few days, ready to rack and power on."
        ],
        highlights: [
            ["ph-cpu", "Processors", "1 NVIDIA Grace 72-core ARM Neoverse V2 CPU"],
            ["ph-graphics-card", "GPUs", "1 NVIDIA Blackwell Ultra (B300) GPU"],
            ["ph-memory", "Memory", "748 GB of Coherent Memory"],
            ["ph-hard-drives", "Storage", "2× 960GB M.2 NVMe SSD; 2× 1.92TB M.2 NVMe SSD"],
            ["ph-plugs-connected", "Networking", "NVIDIA ConnectX-8 SuperNIC"],
            ["ph-truck", "Ready to ship", "Pre-configured and pre-tested; in most cases ships from Supermicro within a few days."]
        ],
        specs: [
            ["Gold Series configuration (as shipped)", [
                ["Processors", "1 NVIDIA Grace 72-core ARM Neoverse V2 CPU"],
                ["GPUs", "1 NVIDIA Blackwell Ultra (B300) GPU"],
                ["Memory", "748 GB of Coherent Memory"],
                ["Boot / M.2", "2× 960GB M.2 NVMe SSD"],
                ["Boot / M.2", "2× 1.92TB M.2 NVMe SSD"],
                ["Networking", "NVIDIA ConnectX-8 SuperNIC"]
            ]],
            ["Platform", [
                ["Form factor", "Tower or 5U"],
                ["Dimensions (W × H × D)", "454.7 x 218.4 x 701mm (17.9\" x 8.6\" x 27.6\")"],
                ["Processor support", "Single processor(s); NVIDIA 72-core NVIDIA Grace CPU on NVIDIA GB300 Grace Blackwell Ultra Superchip; 72C/72T"],
                ["Motherboard", "Super GPU-NVGB300-WSHPM"],
                ["Chassis", "CSE-759TS-R0CNBP"]
            ]],
            ["GPU support", [
                ["Max GPU Count", "1 double-width GPU, and 1 onboard GPU"],
                ["NVIDIA PCIe", "NVIDIA RTX PRO 2000 Blackwell, NVIDIA RTX PRO 4000 Blackwell SFF Edition, NVIDIA RTX PRO 6000; Blackwell Max-Q Workstation Edition, NVIDIA RTX PRO 6000 Blackwell Workstation Edition"],
                ["NVIDIA", "B300 GPU on NVIDIA GB300 Grace Blackwell Ultra Superchip"],
                ["CPU-GPU Interconnect", "NVIDIA NVLink-C2C"]
            ]],
            ["Memory & storage", [
                ["Memory", "Onboard Memory; 496GB ECC LPDDR5X"],
                ["Additional GPU Memory", "252GB ECC HBM3e"],
                ["Drive bays / M.2", "2 M.2 PCIe 5.0 x4 NVMe slots (M-key 2280); 2 M.2 PCIe 6.0 x4 NVMe slots (M-key 2280)"]
            ]],
            ["I/O, power & cooling", [
                ["LAN", "1 RJ45 1 GbE Dedicated BMC LAN port; 1 RJ45 10 GbE LAN port; 2 QSFP 400 GbE LAN ports (NVIDIA ConnectX-8 SuperNIC)"],
                ["USB", "2 USB 3.0 Type-A ports (Front); 4 USB 3.0 Gen2 Type-A ports (Rear)"],
                ["Video", "1 mini-DP port"],
                ["Expansion", "1 M.2 PCIe 2.0 x1 slot (E-key 2230; Optional WiFi/Bluetooth module)"],
                ["Power supplies", "1x 1600W Titanium Level (94%) power supply"],
                ["Cooling", "2x 140mm Fan(s); 2x 80mm Fan(s); 1x 60mm Fan(s); Direct to Chip (D2C) Cold Plate"]
            ]],
            ["Physical & environment", [
                ["Net weight", "88 lbs (40 kg)"],
                ["Operating temperature", "15°C to 32°C (59°F to 90°F)"]
            ]]
        ],
        useCases: ["AI Agent Development and Deployment"]
    },

    "smc-gold-asg-2015s-e1cr24l-01-g2": {
        model: "ASG-2015S-E1CR24L-01-G2",
        sources: [['Supermicro Gold Series', "https://www.supermicro.com/en/products/gold-series"], ["ASG-2015S-E1CR24L-01-G2 datasheet", "https://www.supermicro.com/en/products/system/datasheet/asg-2015s-e1cr24l-01-g2"]],
        overview: [
            "The Supermicro ASG-2015S-E1CR24L-01-G2 is a pre-configured Gold Series Storage A+ Server, recommended by Supermicro for Big Data Analytics/Content Repository. It ships with 1× AMD EPYC 9334 (32C/2.7GHz), 512GB DDR5-4800 of memory and 24× 22TB 3.5\" SAS3 HDD, 1× 960GB 2.5\" SATA SSD, with networking (1× dual 100GbE QSFP28) already installed.",
            "It is built on the Storage A+ Server platform: 2U front/top-loading storage server with 24 hot-swap 3.5\" SAS/SATA bays and PCIe 5.0. Gold Series systems are Supermicro's best-selling configurations: every component is installed and tested before shipping, and in most cases the system leaves Supermicro's warehouse within a few days, ready to rack and power on."
        ],
        highlights: [
            ["ph-cpu", "Processors", "1× AMD EPYC 9334 (32C/2.7GHz)"],
            ["ph-memory", "Memory", "512GB DDR5-4800"],
            ["ph-hard-drives", "Storage", "24× 22TB 3.5\" SAS3 HDD; 1× 960GB 2.5\" SATA SSD; Broadcom 3808 HBA"],
            ["ph-plugs-connected", "Networking", "1× dual 100GbE QSFP28"],
            ["ph-lightning", "Power", "2× 1600W Titanium Level"],
            ["ph-truck", "Ready to ship", "Pre-configured and pre-tested; in most cases ships from Supermicro within a few days."]
        ],
        specs: [
            ["Gold Series configuration (as shipped)", [
                ["Processors", "1× AMD EPYC 9334 (32C/2.7GHz)"],
                ["Memory", "512GB DDR5-4800"],
                ["Storage", "24× 22TB 3.5\" SAS3 HDD"],
                ["Storage", "1× 960GB 2.5\" SATA SSD"],
                ["Networking", "1× dual 100GbE QSFP28"],
                ["Power", "2× 1600W Titanium Level"],
                ["Storage controller", "Broadcom 3808 HBA"]
            ]],
            ["Platform", [
                ["Form factor", "2U Rackmount"],
                ["Dimensions (W × H × D)", "(17.2\" x 3.5\" x 34\")"],
                ["Processor support", "Single processor(s); AMD EPYC 9004/9005 Series Processors; Up to 84C/168T; Up to 384MB Cache"],
                ["Motherboard", "Super H13SSW"],
                ["Chassis", "CSE-826S3TS-R1K62P1"]
            ]],
            ["Memory & storage", [
                ["Slot Count", "12 DIMM slots"],
                ["Max Memory (1DPC)", "Up to 3TB 4800MT/s ECC DDR5 RDIMM (AMD EPYC 9004 Series Processor)"],
                ["Max Memory (1DPC)", "Up to 4.5TB 6000MT/s ECC DDR5 RDIMM (AMD EPYC 9005 Series Processor)"],
                ["Drive bays / M.2", "2 M.2 NVMe slots (M-key 2280/22110)"]
            ]],
            ["I/O, power & cooling", [
                ["LAN", "1 RJ45 1 GbE Dedicated BMC LAN port"],
                ["USB", "2 USB 3.0 ports (rear)"],
                ["Video", "1 VGA port"],
                ["Power supplies", "2x 1600W Redundant (1 + 1) Titanium Level (96%) power supplies"],
                ["Cooling", "Up to 4 Heavy Duty 8cm Fan(s)"]
            ]],
            ["Physical & environment", [
                ["Net weight", "52 lbs (23.59 kg)"],
                ["Operating temperature", "10°C to 35°C (50°F to 95°F)"]
            ]]
        ],
        useCases: ["Big Data Analytics/Content Repository"]
    },

    "smc-gold-as-2015cs-tnr-01-g2": {
        model: "AS -2015CS-TNR-01-G2",
        sources: [['Supermicro Gold Series', "https://www.supermicro.com/en/products/gold-series"], ["AS -2015CS-TNR-01-G2 datasheet", "https://www.supermicro.com/en/products/system/datasheet/as%20-2015cs-tnr-01-g2"]],
        overview: [
            "The Supermicro AS -2015CS-TNR-01-G2 is a pre-configured Gold Series CloudDC A+ Server, recommended by Supermicro for Storage Hardware for IaaS. It ships with 1× AMD EPYC 9455P (48C/3.15GHz), 768GB DDR5-6400 of memory and 2× 3.8TB U.2 NVMe SSD, 8× 24TB 3.5\" SATA HDD, 2× 240GB 2.5\" SATA SSD, with networking (1× dual 25GbE SFP28) already installed.",
            "It is built on the CloudDC A+ Server platform: 2U CloudDC with 12 hot-swap 3.5\" NVMe/SAS/SATA bays and 4 PCIe 5.0 x16 slots + 2 AIOM slots. Gold Series systems are Supermicro's best-selling configurations: every component is installed and tested before shipping, and in most cases the system leaves Supermicro's warehouse within a few days, ready to rack and power on."
        ],
        highlights: [
            ["ph-cpu", "Processors", "1× AMD EPYC 9455P (48C/3.15GHz)"],
            ["ph-memory", "Memory", "768GB DDR5-6400"],
            ["ph-hard-drives", "Storage", "2× 3.8TB U.2 NVMe SSD; 8× 24TB 3.5\" SATA HDD; 2× 240GB 2.5\" SATA SSD"],
            ["ph-plugs-connected", "Networking", "1× dual 25GbE SFP28"],
            ["ph-lightning", "Power", "2× 1200W Titanium Level"],
            ["ph-truck", "Ready to ship", "Pre-configured and pre-tested; in most cases ships from Supermicro within a few days."]
        ],
        specs: [
            ["Gold Series configuration (as shipped)", [
                ["Processors", "1× AMD EPYC 9455P (48C/3.15GHz)"],
                ["Memory", "768GB DDR5-6400"],
                ["Storage", "2× 3.8TB U.2 NVMe SSD"],
                ["Storage", "8× 24TB 3.5\" SATA HDD"],
                ["Storage", "2× 240GB 2.5\" SATA SSD"],
                ["Networking", "1× dual 25GbE SFP28"],
                ["Power", "2× 1200W Titanium Level"]
            ]],
            ["Platform", [
                ["Form factor", "2U Rackmount"],
                ["Dimensions (W × H × D)", "437 x 89 x 648mm (17.2\" x 3.5\" x 25.5\")"],
                ["Processor support", "Single processor(s); AMD EPYC 9004/9005 Series Processors; Up to 160C/320T"],
                ["Motherboard", "Super H13SSW"],
                ["Chassis", "CSE-LA26TS-R1K23AWP1"]
            ]],
            ["GPU support", [
                ["Max GPU Count", "Up to 2 double-width or 4 single-width GPUs"],
                ["Supported GPU", "NVIDIA PCIe: A100, A16, A2, A30, A40, L4, L40, L40S, RTX 6000 Ada Generation, RTX A4000"],
                ["CPU-GPU Interconnect", "PCIe 5.0 x16 CPU-to-GPU Interconnect"],
                ["GPU-GPU Interconnect", "PCIe"]
            ]],
            ["Memory & storage", [
                ["Slot Count", "12 DIMM slots"],
                ["Max Memory (1DPC)", "Up to 3TB 4800MT/s ECC DDR5 RDIMM (AMD EPYC 9004 Series Processor, MB; R1.x/R2.0/R2.01)"],
                ["Max Memory (1DPC)", "Up to 3TB 6000MT/s ECC DDR5 RDIMM (AMD EPYC 9005 Series Processor, MB R2.0)"],
                ["Max Memory (1DPC)", "Up to 3TB 6400MT/s ECC DDR5 RDIMM (AMD EPYC 9005 Series Processor, MB R2.01)"],
                ["Drive bays / M.2", "2 M.2 PCIe 3.0 x2 NVMe slots (M-key 2280/22110)"]
            ]],
            ["I/O, power & cooling", [
                ["LAN", "1 RJ45 1 GbE Dedicated BMC LAN port"],
                ["USB", "2 USB 3.0 ports (rear)"],
                ["Video", "1 VGA port"],
                ["Power supplies", "2x 1200W Redundant (1 + 1) Titanium Level (96%) power supplies"],
                ["Cooling", "Up to 3x 8cm heavy duty fans with optimal fan speed control"]
            ]],
            ["Physical & environment", [
                ["Net weight", "33 lbs (15 kg)"],
                ["Operating temperature", "10°C to 35°C (50°F to 95°F)"]
            ]]
        ],
        useCases: ["Storage Hardware for IaaS"]
    },

    "smc-gold-as-e300-14gr-01-g2": {
        model: "AS -E300-14GR-01-G2",
        sources: [['Supermicro Gold Series', "https://www.supermicro.com/en/products/gold-series"], ["AS -E300-14GR-01-G2 datasheet", "https://www.supermicro.com/en/products/system/datasheet/as%20-e300-14gr-01-g2"]],
        overview: [
            "The Supermicro AS -E300-14GR-01-G2 is a pre-configured Gold Series IoT SuperServer, recommended by Supermicro for Branch Office / Store Appliance. It ships with 1× AMD EPYC 4545P (16C/3.0GHz), 32GB DDR5-5600 of memory and 1× 960GB M.2 NVMe SSD, with networking (4× 1GbE RJ45; 1× dedicated IPMI Port) already installed.",
            "It is built on the IoT SuperServer platform: Mini-1U Embedded System with AMD EPYC 4004/4005 or Ryzen 7000/9000 Series Processor up to 65W TDP. Gold Series systems are Supermicro's best-selling configurations: every component is installed and tested before shipping, and in most cases the system leaves Supermicro's warehouse within a few days, ready to rack and power on."
        ],
        highlights: [
            ["ph-cpu", "Processors", "1× AMD EPYC 4545P (16C/3.0GHz)"],
            ["ph-memory", "Memory", "32GB DDR5-5600"],
            ["ph-hard-drives", "Storage", "1× 960GB M.2 NVMe SSD"],
            ["ph-plugs-connected", "Networking", "4× 1GbE RJ45; 1× dedicated IPMI Port"],
            ["ph-lightning", "Power", "180W Power Adapter"],
            ["ph-truck", "Ready to ship", "Pre-configured and pre-tested; in most cases ships from Supermicro within a few days."]
        ],
        specs: [
            ["Gold Series configuration (as shipped)", [
                ["Processors", "1× AMD EPYC 4545P (16C/3.0GHz)"],
                ["Memory", "32GB DDR5-5600"],
                ["Storage", "1× 960GB M.2 NVMe SSD"],
                ["Networking", "4× 1GbE RJ45"],
                ["Networking", "1× dedicated IPMI Port"],
                ["Power", "180W Power Adapter"]
            ]],
            ["Platform", [
                ["Form factor", "Fan-based Embedded"],
                ["Dimensions (W × H × D)", "264.8 x 43 x 225.8mm (10.43\" x 1.69\" x 8.89\")"],
                ["Processor support", "Single Socket AM5 (LGA-1718); AMD EPYC 4005/4004 Series Processor; 16C/32T; 64MB Cache"],
                ["Motherboard", "Super H14SRV-HLN4F"],
                ["Chassis", "CSE-E300"]
            ]],
            ["Memory & storage", [
                ["Slot Count", "4 DIMM slots"],
                ["Max Memory (1DPC)", "192GB 5600MT/s ECC/non-ECC DDR5 UDIMM"],
                ["Drive bays / M.2", "M.2:; 1 M.2 PCIe 5.0 x4 NVMe slot (M-key 2280); 1 M.2 PCIe 5.0 x4 NVMe slot (M-key 22110)"]
            ]],
            ["I/O, power & cooling", [
                ["LAN", "4 RJ45 1 GbE LAN ports (Intel I350-AM4); 1 RJ45 1 GbE Dedicated BMC LAN port (ASPEED AST2600)"],
                ["USB", "1 USB 3.2 Gen2 Type-C port (Rear); 2 USB 3.2 Gen2 Type-A ports (Rear); 1 USB 3.2 Gen1 Type-A port (Rear)"],
                ["Video", "1 HDMI 2.1 port(s) (Rear); 1 Mini-DP port (Rear)"],
                ["Power supplies", "1x 180W power supply"],
                ["Cooling", "Up to 1 CPU heatsink with 70x70x15mm Fan(s); Up to 2x 4-PIN PWM 40x40x28mm Fan(s)"]
            ]],
            ["Physical & environment", [
                ["Net weight", "3.7 lbs (1.6 kg)"],
                ["Operating temperature", "0°C to 40°C (32°F to 104°F) with 0.7 m/s airflow"]
            ]]
        ],
        useCases: ["Branch Office / Store Appliance", "Retail Store Appliance"]
    },

    "smc-gold-sys-111ad-hn2-01-g2": {
        model: "SYS-111AD-HN2-01-G2",
        sources: [['Supermicro Gold Series', "https://www.supermicro.com/en/products/gold-series"], ["SYS-111AD-HN2-01-G2 datasheet", "https://www.supermicro.com/en/products/system/datasheet/sys-111ad-hn2-01-g2"]],
        overview: [
            "The Supermicro SYS-111AD-HN2-01-G2 is a pre-configured Gold Series IoT SuperServer, recommended by Supermicro for Self-Checkout Kiosk - Retail. It ships with 1× Intel Core i7-12700E (12C/2.1GHz), 64GB DDR5-5600 of memory and 2× 1.92TB 2.5\" SATA SSD, with networking (1× dual 2.5GbE RJ45) already installed.",
            "It is built on the IoT SuperServer platform: Intel Single Socket LGA-1700 support 12th & 13th Gen, 200W Low Noise AC-DC PWS, 1U edge platform. Gold Series systems are Supermicro's best-selling configurations: every component is installed and tested before shipping, and in most cases the system leaves Supermicro's warehouse within a few days, ready to rack and power on."
        ],
        highlights: [
            ["ph-cpu", "Processors", "1× Intel Core i7-12700E (12C/2.1GHz)"],
            ["ph-memory", "Memory", "64GB DDR5-5600"],
            ["ph-hard-drives", "Storage", "2× 1.92TB 2.5\" SATA SSD"],
            ["ph-plugs-connected", "Networking", "1× dual 2.5GbE RJ45"],
            ["ph-lightning", "Power", "1× 200W Gold Level"],
            ["ph-truck", "Ready to ship", "Pre-configured and pre-tested; in most cases ships from Supermicro within a few days."]
        ],
        specs: [
            ["Gold Series configuration (as shipped)", [
                ["Processors", "1× Intel Core i7-12700E (12C/2.1GHz)"],
                ["Memory", "64GB DDR5-5600"],
                ["Storage", "2× 1.92TB 2.5\" SATA SSD"],
                ["Networking", "1× dual 2.5GbE RJ45"],
                ["Power", "1× 200W Gold Level"]
            ]],
            ["Platform", [
                ["Form factor", "1U Rackmount"],
                ["Dimensions (W × H × D)", "437 x 43 x 287mm (17.2\" x 1.7\" x 11.3\")"],
                ["Processor support", "Single L0 (LGA-1700); Intel Core 3/5/7 (Series 2) and 14th/13th/12th Gen Core i3/i5/i7/i9 Processors; Up to 12C/20T"],
                ["Motherboard", "Super X13SAZ-F"],
                ["Chassis", "CSE-510FT-203B"]
            ]],
            ["Memory & storage", [
                ["Slot Count", "4 DIMM slots"],
                ["Max Memory (2DPC)", "Up to 128GB 4400MT/s ECC/non-ECC DDR5 UDIMM"],
                ["Drive bays / M.2", "1 M.2 NVMe slot (M-key 2280/22110)"]
            ]],
            ["I/O, power & cooling", [
                ["LAN", "1 RJ45 1 GbE Dedicated BMC LAN port; 2 RJ45 2.5 GbE LAN ports"],
                ["USB", "4 USB 3.2 Gen2 Type-A ports (Rear)"],
                ["Video", "1 VGA port; 1 DVI-D port; 2 DisplayPort 1.4 ports; 1 port(s) supporting 4K@60Hz as specified in HDMI 2.0b"],
                ["Power supplies", "1x 200W Gold Level (91%) power supply"],
                ["Cooling", "Up to 4x 4-PIN PWM 40x28mm Fan(s)"]
            ]],
            ["Physical & environment", [
                ["Net weight", "10 lbs (4.54 kg)"],
                ["Operating temperature", "0°C to 40°C (32°F to 104°F)"]
            ]]
        ],
        useCases: ["Self-Checkout Kiosk - Retail"]
    },

    "smc-gold-as-1015a-mt-01-g2": {
        model: "AS -1015A-MT-01-G2",
        sources: [['Supermicro Gold Series', "https://www.supermicro.com/en/products/gold-series"], ["AS -1015A-MT-01-G2 datasheet", "https://www.supermicro.com/en/products/system/datasheet/as%20-1015a-mt-01-g2"]],
        overview: [
            "The Supermicro AS -1015A-MT-01-G2 is a pre-configured Gold Series Mainstream A+ Server, recommended by Supermicro for Remote Office/Branch Office Infrastructure. It ships with 1× AMD EPYC 4564P (16C/4.5GHz), 32GB DDR5-5600 of memory and 1× 1.92TB M.2 NVMe SSD, with networking (1× dual 1GbE; 1× dedicated IPMI) already installed.",
            "It is built on the Mainstream A+ Server platform: 1U single-socket Mainstream with up to 4 internal 2.5\" SATA bays and 1 PCIe 5.0 slot. Gold Series systems are Supermicro's best-selling configurations: every component is installed and tested before shipping, and in most cases the system leaves Supermicro's warehouse within a few days, ready to rack and power on."
        ],
        highlights: [
            ["ph-cpu", "Processors", "1× AMD EPYC 4564P (16C/4.5GHz)"],
            ["ph-memory", "Memory", "32GB DDR5-5600"],
            ["ph-hard-drives", "Storage", "1× 1.92TB M.2 NVMe SSD"],
            ["ph-plugs-connected", "Networking", "1× dual 1GbE; 1× dedicated IPMI"],
            ["ph-lightning", "Power", "1× 500W Platinum Level"],
            ["ph-shield-check", "Warranty", "System Warranty includes three years of labor, three years of parts, and one year cross-ship"],
            ["ph-truck", "Ready to ship", "Pre-configured and pre-tested; in most cases ships from Supermicro within a few days."]
        ],
        specs: [
            ["Gold Series configuration (as shipped)", [
                ["Processors", "1× AMD EPYC 4564P (16C/4.5GHz)"],
                ["Memory", "32GB DDR5-5600"],
                ["Storage", "1× 1.92TB M.2 NVMe SSD"],
                ["Networking", "1× dual 1GbE"],
                ["Networking", "1× dedicated IPMI"],
                ["Power", "1× 500W Platinum Level"],
                ["Warranty", "System Warranty includes three years of labor, three years of parts, and one year cross-ship"]
            ]],
            ["Platform", [
                ["Form factor", "1U"],
                ["Dimensions (W × H × D)", "437 x 43 x 429mm (17.2\" x 1.7\" x 16.9\")"],
                ["Processor support", "Single processor(s); AMD EPYC 4004 / 4005 or AMD Ryzen 7000 / 9000 Series Processors; Up to 16C/32T"],
                ["Motherboard", "Super H13SAE-MF"],
                ["Chassis", "CSE-514-505"]
            ]],
            ["GPU support", [
                ["Max GPU Count", "Up to 1 single-width GPU"],
                ["NVIDIA PCIe", "A2, L4, NVIDIA RTX PRO 4500 Blackwell Server Edition, RTX 4000 Ada Generation, RTX A4000"],
                ["AMD PCIe", "Radeon Pro W7500"],
                ["CPU-GPU Interconnect", "PCIe 5.0 x16 CPU-to-GPU Interconnect"]
            ]],
            ["Memory & storage", [
                ["Slot Count", "4 DIMM slots"],
                ["Max Memory (2DPC)", "Up to 192GB 5200MT/s ECC/non-ECC DDR5 UDIMM"],
                ["Drive bays / M.2", "2 M.2 PCIe 5.0 x4 NVMe slots (M-key 2280/22110)"]
            ]],
            ["I/O, power & cooling", [
                ["LAN", "1 RJ45 1 GbE Dedicated BMC LAN port"],
                ["USB", "3 Type-A ports (Rear); 2 Type-C ports (Rear); 1 Type-C port (Rear)"],
                ["Video", "1 VGA port; 1 DisplayPort 1.4 port; 1 port(s) supporting 4K@60Hz as specified in HDMI 2 (Rear)"],
                ["Power supplies", "1x 500W Platinum Level (93%) power supply"],
                ["Cooling", "Up to 6x 40mm Fan(s)"]
            ]],
            ["Physical & environment", [
                ["Operating temperature", "10°C to 35°C (50°F to 95°F)"]
            ]]
        ],
        useCases: ["Remote Office/Branch Office Infrastructure"]
    },

    /* ================================================================ ASUS */

    'asus-ai-pod': {
        model: 'XA GB721-E2',
        sources: [['ASUS XA GB721-E2', 'https://servers.asus.com/products/asus-ai-pod/nvidia-grace-blackwell-ultra/XA-GB721-E2'], ['ASUS AI POD with NVIDIA GB300 NVL72', 'https://www.asus.com/event/nvidia-gb300-nvl72/']],
        overview: [
            "The ASUS AI POD (XA GB721-E2) is ASUS's full-rack AI supercomputer built on NVIDIA GB300 NVL72, combining 72 Blackwell Ultra GPUs and 36 Grace CPUs in a 48U NVIDIA MGX-compliant rack.",
            "It supports both liquid-to-air and liquid-to-liquid cooling and comes with ASUS software, management and deployment services, targeting enterprise AI, cloud providers, research institutions and national AI clouds."
        ],
        highlights: [
            ['ph-cube-transparent', '72 Blackwell Ultra GPUs', 'Each with 288 GB of HBM3e and 1.5x more AI compute than Blackwell.'],
            ['ph-memory', 'Up to 40 TB fast memory', 'Per rack, for trillion-parameter models.'],
            ['ph-network', 'Fifth-generation NVLink', '1.8 TB/s GPU-to-GPU bandwidth across the rack.'],
            ['ph-plugs-connected', 'ConnectX-8 SuperNICs', 'Quantum-X800 InfiniBand or Spectrum-X Ethernet.'],
            ['ph-drop', 'Flexible cooling', 'Liquid-to-air or liquid-to-liquid, manifold-based.'],
            ['ph-wrench', 'Deployment services', 'Software, management and services to streamline roll-out.']
        ],
        specs: [
            ['Rack', [
                ['Rack', '48U NVIDIA MGX-compliant'],
                ['Compute trays', '18'],
                ['NVLink switch trays', '9'],
                ['Cooling', 'Liquid-to-air or liquid-to-liquid, manifold-based']
            ]],
            ['Compute', [
                ['GPUs', '72× NVIDIA Blackwell Ultra, 288 GB HBM3e each'],
                ['CPUs', '36× NVIDIA Grace'],
                ['Fast memory', 'Up to 40 TB per rack'],
                ['GPU interconnect', 'Fifth-generation NVLink, 1.8 TB/s']
            ]],
            ['Networking', [
                ['SuperNICs', 'NVIDIA ConnectX-8'],
                ['Fabric', 'NVIDIA Quantum-X800 InfiniBand or Spectrum-X Ethernet']
            ]]
        ],
        useCases: ['Trillion-parameter LLMs', 'Mixture-of-experts models', 'AI reasoning', 'Hyperscale and national AI clouds', 'Research institutions']
    },

    'asus-xa-nb3i-e12': {
        model: 'XA NB3I-E12',
        sources: [['ASUS XA NB3I-E12', 'https://servers.asus.com/products/servers/gpu-servers/XA-NB3I-E12'], ['XA NB3I-E12 specifications', 'https://servers.asus.com/products/detail/specifications/XA-NB3I-E12']],
        overview: [
            "The ASUS XA NB3I-E12 is a 9U server built around the NVIDIA HGX B300 8-GPU board and dual Intel Xeon 6 processors. Eight ConnectX-8 adapters are embedded on the GPU board, giving each GPU an 800 Gb/s XDR InfiniBand link.",
            "A modular design with minimal internal cabling speeds assembly and improves airflow, and 5+5 redundant Titanium power supplies keep it efficient under heavy AI load."
        ],
        highlights: [
            ['ph-graphics-card', 'HGX B300 8-GPU', '288 GB per GPU with 1,800 GB/s NVLink GPU-to-GPU bandwidth.'],
            ['ph-plugs-connected', 'Embedded ConnectX-8', 'Eight XDR / 800G InfiniBand links, one per GPU.'],
            ['ph-cpu', 'Dual Intel Xeon 6700P', 'Up to 350 W per socket.'],
            ['ph-memory', 'Up to 8 TB DDR5', '32 DIMM slots, DDR5-6400.'],
            ['ph-puzzle-piece', 'Modular, low-cable design', 'Faster assembly and better thermals.'],
            ['ph-lightning', '5+5 Titanium power', 'Ten 3200 W 80 PLUS Titanium supplies.']
        ],
        specs: [
            ['Processor & memory', [
                ['CPUs', '2× Intel Xeon 6 (6700P), up to 350 W'],
                ['Memory slots', '32 (8 channels per CPU, 16 DIMMs per CPU)'],
                ['Memory capacity', 'Up to 4 TB per CPU socket'],
                ['Memory type', 'DDR5-6400 RDIMM / 3DS RDIMM (2DPC); 64, 96, 128 GB']
            ]],
            ['GPU & expansion', [
                ['GPUs', 'NVIDIA HGX B300 288GB 8-GPU baseboard'],
                ['GPU networking', '8× embedded ConnectX-8, XDR / 800G per GPU'],
                ['Expansion (SKU1)', '4× PCIe Gen5 x16'],
                ['Expansion (SKU2)', '4× PCIe Gen5 x16 + 1× PCIe Gen5 x8 (RAID only)'],
                ['RAID option', 'Broadcom MegaRAID 9540-8i']
            ]],
            ['Networking & I/O', [
                ['LAN', '2× 10 GbE (Intel X710-AT2), 1× management port'],
                ['Front I/O', '2× USB 3.2, 1× VGA, 2× 10 GbE RJ45, 1× RJ45 management']
            ]],
            ['Chassis & power', [
                ['Form factor', '9U'],
                ['Dimensions', '945 × 447 × 394.5 mm'],
                ['Weight', '120 kg net / 150 kg gross'],
                ['Power', '5+5 3200 W 80 PLUS Titanium'],
                ['Operating temperature', '10 °C to 35 °C'],
                ['Management', 'ASUS Control Center, on-board ASMB12-iKVM'],
                ['Compliance', 'CB, CE, FCC, BSMI']
            ]]
        ],
        useCases: ['Large-scale AI training', 'Generative AI inference', 'HPC', 'GPU clusters with InfiniBand']
    },

    'asus-esc8000a-e13x': {
        model: 'ESC8000A-E13X',
        sources: [['ASUS ESC8000A-E13X', 'https://servers.asus.com/products/servers/gpu-servers/ESC8000A-E13X'], ['ESC8000A-E13X specifications', 'https://servers.asus.com/products/detail/specifications/ESC8000A-E13X']],
        overview: [
            "The ASUS ESC8000A-E13X is a 4U NVIDIA RTX PRO Server based on dual AMD EPYC 9005 processors. It holds eight RTX PRO 6000 Blackwell Server Edition GPUs connected through ConnectX-8 SuperNICs with eight 400 Gb/s ports.",
            "Built on the NVIDIA MGX architecture with PCIe Gen6 GPU slots and a tool-less design, it is aimed at enterprise AI factories, agentic AI and industrial simulation."
        ],
        highlights: [
            ['ph-graphics-card', '8× RTX PRO 6000 Blackwell', 'Dual-slot GPUs, up to 600 W each.'],
            ['ph-plugs-connected', 'ConnectX-8 SuperNIC', 'Eight 400 Gb/s QSFP ports for GPU-to-GPU traffic.'],
            ['ph-cpu', 'Dual AMD EPYC 9005', 'Up to 192 Zen 5c cores per socket, 12-channel DDR5-6400.'],
            ['ph-arrows-left-right', 'PCIe Gen6', 'Eight Gen6 x16 GPU slots plus Gen5 slots for NICs and DPUs.'],
            ['ph-squares-four', 'NVIDIA MGX', 'Modular architecture for fast, large-scale deployment.'],
            ['ph-wrench', 'Tool-less design', 'Quick maintenance and upgrades.']
        ],
        specs: [
            ['Processor & memory', [
                ['CPUs', '2× Socket SP5, AMD EPYC 9005, up to 500 W cTDP'],
                ['Memory slots', '24 (12 channels per CPU)'],
                ['Memory capacity', 'Up to 3 TB DDR5-6400 / 5600 RDIMM']
            ]],
            ['GPU & expansion', [
                ['GPUs', 'Up to 8× NVIDIA RTX PRO 6000 Blackwell Server Edition'],
                ['Rear slots', '8× PCIe x16 Gen6 (dual-slot GPU, FH/FL); 1× PCIe Gen5 x16 (NIC / BlueField-3)'],
                ['Front slot', '1× PCIe x16 (Gen5 x8, FH/HL)']
            ]],
            ['Storage & networking', [
                ['Storage', '8× 2.5" front hot-swap; 2× M.2 (PCIe Gen5 x4, up to 22110)'],
                ['Networking', '8× 400 Gb/s QSFP (ConnectX-8); 2× 10 GbE (X710-AT2); 1× management']
            ]],
            ['Chassis & power', [
                ['Form factor', '4U'],
                ['Dimensions', '800 × 439.5 × 175 mm'],
                ['Weight', '45 kg net / 56 kg gross'],
                ['Power', '3+1 redundant 3200 W 80 PLUS Titanium'],
                ['Operating temperature', '10 °C to 35 °C'],
                ['Compliance', 'BSMI, CB, CE, FCC (Class A), RCM']
            ]]
        ],
        useCases: ['Agentic AI and LLM inference', 'Industrial simulation and digital twins', 'Enterprise AI factories', 'Rendering and visualisation']
    },

    'asus-esc8000-e12p': {
        model: 'ESC8000-E12P',
        sources: [['ASUS ESC8000-E12P', 'https://servers.asus.com/products/detail/overview/ESC8000-E12P'], ['ESC8000-E12P specifications', 'https://servers.asus.com/products/detail/specifications/ESC8000-E12P']],
        overview: [
            "The ASUS ESC8000-E12P is a high-density 4U server with dual Intel Xeon 6 processors and room for eight dual-slot GPUs, active or passive. It is built on the NVIDIA MGX modular architecture.",
            "Broadcom PCIe 5.0 switches give every GPU full x16 bandwidth, and the tool-less chassis can be completely disassembled without tools for fast servicing."
        ],
        highlights: [
            ['ph-graphics-card', 'Eight dual-slot GPUs', 'NVIDIA H200 NVL, RTX PRO 6000 Blackwell or Intel Gaudi 3.'],
            ['ph-arrows-left-right', 'PCIe 5.0 switching', 'Broadcom PEX89000 switches with 128 GB/s per x16 port.'],
            ['ph-cpu', 'Intel Xeon 6', 'All P-core processors with DDR5 memory.'],
            ['ph-squares-four', 'NVIDIA MGX', 'Up to 160 configurations to tailor the system.'],
            ['ph-wrench', 'Tool-less maintenance', 'Fully disassembles without tools.'],
            ['ph-shield-check', 'Management and security', 'ASMB12-iKVM, ASUS Control Center and TPM 2.0.']
        ],
        specs: [
            ['Processor & memory', [
                ['CPUs', '2× LGA 4710, Intel Xeon 6500 / 6700, up to 350 W'],
                ['Memory slots', '32 (8 channels per CPU, 16 DIMMs per CPU)'],
                ['Memory capacity', 'Up to 4 TB'],
                ['Memory type', 'DDR5-6400 (1DPC) / 5200 (2DPC) RDIMM / 3DS RDIMM']
            ]],
            ['GPU & expansion', [
                ['GPU slots', '8× PCIe x16 Gen5 for dual-slot GPUs (FHFL)'],
                ['NIC / DPU slots', '5× PCIe x16 Gen5 (FHFL) for NIC or BlueField-3'],
                ['Additional', '1× PCIe x16 (Gen5 x8, FHHL)']
            ]],
            ['Storage & networking', [
                ['Storage', '8× 2.5" front hot-swap (up to 8 NVMe); 2× M.2 (Gen5 x4, up to 22110)'],
                ['Networking', '2× 10 GbE (X710-AT2), 1× management']
            ]],
            ['Chassis & power', [
                ['Form factor', '4U, NVIDIA MGX'],
                ['Dimensions', '800 × 439.5 × 175 mm'],
                ['Weight', '45 kg net / 56 kg gross'],
                ['Power', '3+1 redundant 3200 W 80 PLUS Titanium'],
                ['Operating temperature', '10 °C to 35 °C']
            ]]
        ],
        useCases: ['Enterprise AI training and inference', 'Machine learning', 'HPC', 'GPU virtualisation']
    },

    'asus-esc8000a-e13': {
        model: 'ESC8000A-E13',
        sources: [['ASUS ESC8000A-E13', 'https://servers.asus.com/products/detail/overview/ESC8000A-E13'], ['ESC8000A-E13 specifications', 'https://servers.asus.com/products/detail/specifications/ESC8000A-E13']],
        overview: [
            "The ASUS ESC8000A-E13 is a 4U GPU server powered by dual AMD EPYC 9005/9004 processors that supports eight dual-slot GPUs, active or passive, with flexible NVLink bridge options.",
            "Direct-connected PCIe 5.0 slots for high-speed NICs and DPUs, up to 3 TB of memory and a fully tool-less design make it a versatile platform for AI, HPC and NVIDIA Omniverse."
        ],
        highlights: [
            ['ph-graphics-card', 'Eight dual-slot GPUs', 'NVIDIA H200 NVL, RTX PRO 6000 Blackwell or AMD Instinct options.'],
            ['ph-cpu', 'AMD EPYC 9005', 'Up to 192 Zen 5c cores and 128 PCIe 5.0 lanes.'],
            ['ph-memory', '24 DIMMs', 'Up to 3 TB DDR5-6400.'],
            ['ph-plugs-connected', 'Direct-attached NIC slots', 'PCIe 5.0 slots for high-speed NICs and BlueField-3 DPUs.'],
            ['ph-wrench', 'Tool-less', 'GPU fan modules, system fans and cards all service without tools.'],
            ['ph-shield-check', 'Management and security', 'ASMB12-iKVM, ASUS Control Center and TPM 2.0.']
        ],
        specs: [
            ['Processor & memory', [
                ['CPUs', '2× Socket SP5, AMD EPYC 9005, up to 500 W cTDP'],
                ['Memory slots', '24 (12 channels per CPU)'],
                ['Memory capacity', 'Up to 3 TB DDR5-6400 / 5600 RDIMM']
            ]],
            ['GPU & expansion', [
                ['Rear', '8× PCIe Gen5 x16 for dual-slot GPUs; 1× Gen5 x16 (NIC / BlueField-3); 1× Gen5 x8 (NIC)'],
                ['Front', '1× PCIe Gen5 x8 (HBA / RAID)'],
                ['Total', 'Up to 11 slots']
            ]],
            ['Storage & I/O', [
                ['Storage', '8× 2.5" front hot-swap bays'],
                ['Networking', '1× management port'],
                ['Front I/O', 'Mini DisplayPort, 2× USB 5 Gb/s, debug port']
            ]],
            ['Chassis & power', [
                ['Form factor', '4U'],
                ['Dimensions', '800 × 439.5 × 175 mm'],
                ['Weight', '45 kg net / 56 kg gross'],
                ['Power', '3+1 redundant 3200 W 80 PLUS Titanium'],
                ['Operating temperature', '10 °C to 35 °C']
            ]]
        ],
        useCases: ['AI training and inference', 'Machine learning', 'HPC', 'Large in-memory computing', 'NVIDIA Omniverse']
    },

    'asus-esc-a8a-e12u': {
        model: 'ESC A8A-E12U',
        sources: [['ASUS ESC A8A-E12U', 'https://servers.asus.com/products/detail/overview/ESC-A8A-E12U'], ['ESC A8A-E12U specifications', 'https://servers.asus.com/products/detail/specifications/ESC-A8A-E12U']],
        overview: [
            "The ASUS ESC A8A-E12U is a 7U dual-socket server with eight AMD Instinct MI325X accelerators and AMD EPYC 9005 processors, built for high-end AI training and large-model inference.",
            "Each MI325X carries 256 GB of HBM3E, and a one-GPU-to-one-NIC topology with AMD Infinity Fabric provides the bandwidth needed for distributed training. It runs the open AMD ROCm software stack."
        ],
        highlights: [
            ['ph-graphics-card', '8× AMD Instinct MI325X', '256 GB HBM3E per accelerator for trillion-parameter models.'],
            ['ph-network', 'One GPU to one NIC', 'Infinity Fabric mesh with a dedicated NIC per GPU.'],
            ['ph-arrows-left-right', 'Up to 11 PCIe 5.0 slots', 'Room for high-speed networking and storage.'],
            ['ph-wind', 'Independent airflow', 'Separate CPU and GPU air tunnels with dual-rotor fans.'],
            ['ph-lightning', '5+1 redundant power', 'Six 3000 W 80 PLUS Titanium supplies.'],
            ['ph-code', 'AMD ROCm', 'Open software supporting PyTorch, TensorFlow and JAX.']
        ],
        specs: [
            ['Processor & memory', [
                ['CPUs', '2× AMD EPYC 9005 / 9004, up to 400 W'],
                ['Memory', '24× DDR5 DIMMs up to 6400 MHz (1DPC), up to 3 TB']
            ]],
            ['Accelerators & expansion', [
                ['GPUs', '8× AMD Instinct MI325X (256 GB HBM3E each)'],
                ['Expansion', 'Up to 11 PCIe slots: 8× Gen5 x16 (GPU group), 1× Gen5 x16 + 1× Gen5 x8 (CPU1), 1× Gen5 x16 (CPU2)']
            ]],
            ['Networking & I/O', [
                ['LAN', '2× 10 GbE (Intel X710-AT2), 1× management port'],
                ['Front I/O', '4× USB 3.2 Gen1, 1× VGA']
            ]],
            ['Chassis & power', [
                ['Form factor', '7U'],
                ['Dimensions', '885 × 447 × 306.65 mm'],
                ['Weight', '108 kg net / 142.4 kg gross'],
                ['Power', '5+1 redundant 3000 W 80 PLUS Titanium'],
                ['Management', 'ASUS Control Center, ASMB11-iKVM'],
                ['Operating temperature', '10 °C to 35 °C']
            ]]
        ],
        useCases: ['Large-model training', 'High-density AI inference', 'HPC', 'Open-source AI on ROCm']
    },

    'asus-esc4000a-e12': {
        model: 'ESC4000A-E12',
        sources: [['ASUS ESC4000A-E12', 'https://servers.asus.com/products/detail/overview/ESC4000A-E12'], ['ESC4000A-E12 specifications', 'https://servers.asus.com/products/detail/specifications/ESC4000A-E12']],
        overview: [
            "The ASUS ESC4000A-E12 is a single-socket 2U GPU server with an AMD EPYC 9004/9005 processor and up to four dual-slot GPUs, active or passive.",
            "It supports NVIDIA NVLink Bridge or AMD Infinity Fabric Link, has independent CPU and GPU airflow tunnels, and is an efficient platform for inference, VDI and smaller training jobs."
        ],
        highlights: [
            ['ph-graphics-card', 'Four dual-slot GPUs', 'Or eight single-slot cards at Gen5 x8.'],
            ['ph-arrows-left-right', 'PCIe 5.0', '32 GT/s per lane, twice PCIe 4.0.'],
            ['ph-wind', 'Dual airflow tunnels', 'Separate CPU and GPU cooling paths.'],
            ['ph-lightning', 'Titanium power', '1+1 redundant 2600 W, up to 96% efficient.'],
            ['ph-link', 'GPU bridges', 'NVIDIA NVLink Bridge or AMD Infinity Fabric Link.'],
            ['ph-shield-check', 'Hardware security', 'PFR FPGA root of trust and TPM 2.0.']
        ],
        specs: [
            ['Processor & memory', [
                ['CPU', '1× Socket SP5, AMD EPYC 9004 / 9005, up to 400 W'],
                ['Memory slots', '12 (12-channel)'],
                ['Memory capacity', 'Up to 3 TB RDIMM']
            ]],
            ['GPU & expansion', [
                ['GPU slots', '4× PCIe Gen5 x16 or 8× PCIe Gen5 x8'],
                ['Additional slots', '1× Gen5 x16; 1× Gen5 x16/x8 or OCP / M.2 option; 1× Gen5 x8'],
                ['Front slot', '1× PCIe Gen5 x8 (SKU1)']
            ]],
            ['Networking', [
                ['LAN', '2× GbE (Intel I350), 1× management port']
            ]],
            ['Chassis & power', [
                ['Form factor', '2U'],
                ['Dimensions', '800 × 439.5 × 88.9 mm'],
                ['Weight', '24 kg net / 34.8 kg gross'],
                ['Power', '1+1 redundant 2600 W 80 PLUS Titanium CRPS-R'],
                ['Management', 'ASMB11-iKVM, ASUS Control Center'],
                ['Operating temperature', '10 °C to 35 °C']
            ]]
        ],
        useCases: ['AI inference', 'VDI and virtual workstations', 'Machine learning', 'HPC']
    },

    'asus-esc4000-e11': {
        model: 'ESC4000-E11',
        sources: [['ASUS ESC4000-E11', 'https://servers.asus.com/products/detail/overview/ESC4000-E11'], ['ESC4000-E11 specifications', 'https://servers.asus.com/products/detail/specifications/ESC4000-E11']],
        overview: [
            "The ASUS ESC4000-E11 is a dual-socket 2U GPU server with 4th or 5th Gen Intel Xeon Scalable processors and support for four dual-slot GPUs, active or passive, with optional NVIDIA NVLink Bridge.",
            "Independent CPU and GPU airflow tunnels, Titanium power and BMC management with Redfish make it a dependable mid-range platform for enterprise AI and HPC."
        ],
        highlights: [
            ['ph-graphics-card', 'Four dual-slot GPUs', 'Or eight single-slot cards; optional NVLink Bridge.'],
            ['ph-arrows-left-right', 'PCIe 5.0', 'Twice the bandwidth of PCIe 4.0, backward compatible.'],
            ['ph-wind', 'Independent airflow', 'Separate CPU and GPU tunnels reduce fan power.'],
            ['ph-lightning', 'Titanium power', '1+1 redundant 2600 W CRPS-R, up to 96% efficient.'],
            ['ph-sliders', 'Remote management', 'BMC with web GUI, IPMI and Redfish, plus ASUS Control Center.'],
            ['ph-shield-check', 'Firmware resilience', 'PFR FPGA root of trust and TPM 2.0.']
        ],
        specs: [
            ['Processor & memory', [
                ['CPUs', '2× 4th / 5th Gen Intel Xeon Scalable, up to 350 W'],
                ['Chipset', 'Intel C741'],
                ['Memory slots', '16 (8 channels per CPU)'],
                ['Memory capacity', 'Up to 4 TB per CPU socket'],
                ['Memory type', 'DDR5-5600 / 4800 RDIMM / 3DS RDIMM']
            ]],
            ['GPU & expansion', [
                ['Rear', '4× PCIe Gen5 x16 or 8× Gen5 x8 (FH, FL); 2× PCIe Gen5 x16 (FH, HL)'],
                ['Front', '1× PCIe Gen4 x8 (LP, HL)']
            ]],
            ['Storage & networking', [
                ['Storage', '2× 2.5" and 4× 3.5" hot-swap bays; 1× M.2 (up to 2280)'],
                ['LAN', '2× GbE (Intel I350), 1× management port']
            ]],
            ['Chassis & power', [
                ['Form factor', '2U'],
                ['Dimensions', '800 × 439.5 × 88.9 mm'],
                ['Weight', '26 kg net / 36.8 kg gross'],
                ['Power', '1+1 redundant 2600 W 80 PLUS Titanium CRPS-R'],
                ['OS support', 'Windows Server, RHEL, SLES, Ubuntu, VMware'],
                ['Management', 'ASUS Control Center, ASMB11-iKVM']
            ]]
        ],
        useCases: ['AI training and inference', 'HPC', 'VDI', 'Engineering simulation']
    },

    'asus-rs-series': {
        sources: [['ASUS rack servers', 'https://servers.asus.com/products/servers/rack-servers'], ['ASUS Intel Xeon 6 server lineup', 'https://servers.asus.com/news/intel-xeon-6-processor-servers']],
        overview: [
            "ASUS RS Series rack servers cover 1U and 2U single- and dual-socket systems with Intel Xeon 6 and AMD EPYC 9005 processors, with configurations for all-NVMe storage, GPU acceleration and general-purpose compute.",
            "Every model includes the ASMB BMC for out-of-band management and works with ASUS Control Center for fleet-wide monitoring and updates."
        ],
        highlights: [
            ['ph-cpu', 'Intel or AMD', 'Intel Xeon 6 (E12 models) or AMD EPYC 9005 up to 400 W (E13 models).'],
            ['ph-memory', 'Up to 32 DIMMs', 'Large DDR5 capacity for virtualization and databases.'],
            ['ph-hard-drives', 'All-flash options', 'Up to 24 NVMe drives in 2U.'],
            ['ph-graphics-card', 'GPU-ready models', 'Up to three dual-slot GPUs in 2U "G" models.'],
            ['ph-sliders', 'Built-in management', 'ASMB iKVM and ASUS Control Center.']
        ],
        specs: [
            ['Platform', [
                ['CPUs', 'Intel Xeon 6 or AMD EPYC 9005, single or dual socket'],
                ['Form factor', '1U / 2U'],
                ['Networking', 'OCP 3.0 and PCIe 5.0 options'],
                ['Management', 'ASMB iKVM, ASUS Control Center']
            ]]
        ],
        models: [
            ['RS700-E12-RS12U', '1U, dual Intel Xeon 6, 32 DIMMs, 12 NVMe, 4 PCIe slots, dual M.2'],
            ['RS700-E12-RS4U', '1U, dual Intel Xeon 6, 32 DIMMs, 4 NVMe, 4 PCIe slots, dual M.2'],
            ['RS720-E12-RS24U', '2U, dual Intel Xeon 6, 32 DIMMs, 24 NVMe, 10 PCIe slots'],
            ['RS720-E12-RS24G', '2U, dual Intel Xeon 6, three dual-slot GPUs, 24 NVMe, 10 PCIe slots'],
            ['RS720A-E13-RS24U', '2U, dual AMD EPYC 9005, 24 RDIMM, 24 NVMe, 8 PCIe 5.0, 2 OCP 3.0'],
            ['RS720A-E13-RS24G', '2U, dual AMD EPYC 9005, three dual-slot GPUs, 24 NVMe']
        ],
        useCases: ['Virtualization', 'Databases', 'Web hosting', 'Software-defined storage', 'GPU inference']
    },

    'asus-high-density': {
        sources: [['ASUS RS720QA-E12-RS8U', 'https://servers.asus.com/products/servers/high-density-servers/RS720QA-E12-RS8U'], ['ASUS RS520QA-E13 case study', 'https://servers.asus.com/insight/Empowering-Financial-Digital-Transformation-with-ASUS-RS520QA-E13']],
        overview: [
            "ASUS high-density servers put four independent nodes in a 2U chassis, maximising compute per rack unit for HPC, cloud and hyper-converged clusters.",
            "Current models use AMD EPYC processors, with options for dual-socket nodes and, on the RS520QA-E13, CXL 2.0 memory sharing for data-intensive HPC and AI."
        ],
        highlights: [
            ['ph-squares-four', '4 nodes in 2U', 'High compute density with shared power and cooling.'],
            ['ph-cpu', 'AMD EPYC', 'Dual-socket EPYC 9004 nodes on RS720QA-E12.'],
            ['ph-memory', 'CXL 2.0', 'Shared memory and low-latency data access on RS520QA-E13.'],
            ['ph-plugs', 'Per-node networking', 'Two 10G LAN ports and PCIe 5.0 slots per node.'],
            ['ph-sliders', 'Infrastructure management', 'ASMB iKVM and ASUS Control Center.']
        ],
        specs: [
            ['Platform', [
                ['Form factor', '2U, 4 nodes'],
                ['CPUs', 'AMD EPYC 9004 / 9005, per model'],
                ['Use', 'CDN, HCI, cloud and HPC']
            ]]
        ],
        models: [
            ['RS720QA-E12-RS8U', '2U4N, dual AMD EPYC 9004 per node, 24 DIMMs, 2× PCIe 5.0, 2× M.2, 2 NVMe and 2× 10G LAN per node'],
            ['RS520QA-E13-RS8U', '2U4N, AMD EPYC 9005, CXL 2.0 memory expansion']
        ],
        useCases: ['HPC clusters', 'Hyper-converged infrastructure', 'Content delivery networks', 'Cloud hosting', 'Financial services computing']
    },

    'asus-storage': {
        sources: [['ASUS storage solutions', 'https://www.asus.com/event/asus-storage-solution/'], ['ASUS storage solutions at SC25', 'https://servers.asus.com/news/ASUS-Showcases-Comprehensive-Storage-Solutions-at-SC25']],
        overview: [
            "The ASUS storage portfolio covers AI/HPC, block, unified and object storage plus JBOD expansion. It keeps GPU clusters fed with data and manages fast-growing datasets.",
            "For AI and HPC, ASUS offers AMD EPYC-based platforms developed with WEKA, IBM, VAST Data and Hammerspace; for enterprise data, the VS320D family provides block and unified storage that scales to multiple petabytes."
        ],
        highlights: [
            ['ph-lightning', 'AI/HPC storage', 'Software-defined platforms with WEKA, IBM, VAST Data and Hammerspace.'],
            ['ph-database', 'Block storage', 'Active-active controllers with SSD caching and auto-tiering.'],
            ['ph-files', 'Unified storage', 'Multi-protocol with S3 cloud sync, DR and data reduction.'],
            ['ph-cloud', 'Object storage', 'S3/Swift-compatible Ceph with NVMe acceleration, up to 1.4 PB per node.'],
            ['ph-stack', 'JBOD expansion', 'Up to 7.1 PB with 78- and 12-bay enclosures.']
        ],
        specs: [
            ['Portfolio', [
                ['AI / HPC storage', 'AMD EPYC-based, developed with WEKA, IBM, VAST Data and Hammerspace'],
                ['Block storage (VS320D-RS12)', 'Active-active Intel Xeon controllers, SSD caching, auto-tiering, up to 7.1 PB'],
                ['Unified storage (VS320D-RS12U)', 'Multi-protocol, SSD caching, auto-tiering, S3 cloud sync, DR site, data reduction'],
                ['Object storage (OJ340A-RS60)', '4U, single AMD EPYC 9004, 12 DDR5 DIMMs, 60× 3.5" bays + 2 SATA + 6 NVMe, up to 1.4 PB raw; Ceph S3/Swift'],
                ['JBOD (VS320D-RS12J)', '78- or 12-bay, 12 Gb/s SAS 3.0, multipath, up to 7.1 PB']
            ]]
        ],
        useCases: ['GPU cluster data storage', 'AI data lakes', 'Enterprise file and block storage', 'Backup and archive', 'Analytics']
    },

    'asus-edge': {
        sources: [['ASUS edge servers', 'https://servers.asus.com/products/servers/edge-servers'], ['ASUS TS100-E11-PI4', 'https://servers.asus.com/products/servers/tower-servers/TS100-E11-PI4']],
        overview: [
            "ASUS edge servers are short-depth 1U systems for telco sites, branch offices and factories, with front or rear access and room for up to three GPU cards for on-site AI inference.",
            "For small offices and branch IT, ASUS tower servers offer an affordable, quiet entry point that does not need a server room."
        ],
        highlights: [
            ['ph-ruler', 'Short-depth 1U', '430 mm deep for space-limited edge locations.'],
            ['ph-graphics-card', 'Up to 3 GPUs', 'PCIe Gen5 x16 slots for edge AI accelerators.'],
            ['ph-cell-signal-full', '5G and O-RAN ready', 'Designed for MEC, vRAN and network functions.'],
            ['ph-arrows-left-right', 'Front or rear I/O', '-F and -R models for different cabinets.'],
            ['ph-desktop-tower', 'Tower servers', 'Entry-level Intel Xeon E towers for SMB and branches.']
        ],
        specs: [
            ['EG500-E11 edge server', [
                ['CPU', '1× 5th / 4th Gen Intel Xeon Scalable, up to 350 W'],
                ['Memory', '8 DIMMs, DDR5-5600 / 4800, up to 2 TB'],
                ['Expansion', 'Up to 3× PCIe Gen5 x16 (FHHL), up to 3 GPUs'],
                ['Storage', '2× 2.5" hot-swap SATA / NVMe, 2× internal 2.5", 2× E1.S, 2× M.2'],
                ['Networking', '2× 10G (Intel X710), 1× management'],
                ['Form factor', '1U, 430 mm deep'],
                ['Power', '650 W or 1300 W redundant Platinum'],
                ['Management', 'ASMB11-iKVM, ASUS Control Center (optional)']
            ]],
            ['TS100-E11-PI4 tower server', [
                ['CPU', 'Intel Xeon E-2300 series, up to 95 W'],
                ['Memory', '4 DIMMs, DDR4-3200 ECC UDIMM, up to 128 GB'],
                ['Expansion', '4 PCIe slots including 1× Gen4 x16 for graphics'],
                ['Storage', '2× 3.5" + 1× 2.5" internal bays, optional cage'],
                ['Power', '300 W Bronze or 550 W / 750 W Gold']
            ]]
        ],
        useCases: ['Edge AI inference', '5G core, MEC and O-RAN', 'Network function virtualization', 'Branch office IT', 'Industrial computing']
    },

    'asus-ascent-gx10': {
        sources: [['ASUS Ascent GX10 specifications', 'https://www.asus.com/networking-iot-servers/desktop-ai-supercomputer/ultra-small-ai-supercomputers/asus-ascent-gx10/techspec/']],
        overview: [
            "The ASUS Ascent GX10 is a compact personal AI supercomputer built on the NVIDIA GB10 Grace Blackwell Superchip. It delivers 1 petaFLOP of AI performance and 128 GB of unified memory in a 150 mm square chassis.",
            "It runs NVIDIA DGX OS and the NVIDIA AI software stack, and two units can be linked with the built-in ConnectX-7 SmartNIC to work on larger models."
        ],
        highlights: [
            ['ph-cpu', 'NVIDIA GB10', '20-core Arm CPU with an integrated Blackwell GPU.'],
            ['ph-lightning', '1 PFLOP AI', 'Fifth-generation Tensor Cores for local training and inference.'],
            ['ph-memory', '128 GB unified memory', 'LPDDR5x shared by CPU and GPU.'],
            ['ph-plugs-connected', 'ConnectX-7', 'Stack two systems for larger workloads.'],
            ['ph-desktop', 'Tiny footprint', '150 × 150 × 51 mm, 1.48 kg, 240 W adapter.']
        ],
        specs: [
            ['Compute', [
                ['Superchip', 'NVIDIA GB10 Grace Blackwell'],
                ['CPU', '20-core Arm (10× Cortex-X925 + 10× Cortex-A725)'],
                ['GPU', 'NVIDIA Blackwell (GB10, integrated); 5th-gen Tensor Cores, 4th-gen RT Cores'],
                ['AI performance', '1 PFLOP']
            ]],
            ['Memory & storage', [
                ['Memory', '128 GB LPDDR5x unified system memory'],
                ['Storage', '1 TB or 2 TB M.2 NVMe PCIe 4.0, or 4 TB M.2 NVMe PCIe 5.0']
            ]],
            ['Connectivity', [
                ['Networking', '10G Ethernet, NVIDIA ConnectX-7 SmartNIC'],
                ['Wireless', 'Wi-Fi 7 2×2, Bluetooth 5.4'],
                ['Ports', '3× USB 3.2 Gen 2x2 Type-C (DisplayPort 2.1 alt mode), USB-C power delivery, HDMI 2.1a']
            ]],
            ['Physical', [
                ['Operating system', 'NVIDIA DGX OS'],
                ['Power', '240 W adapter'],
                ['Dimensions', '150 × 150 × 51 mm'],
                ['Weight', '1.48 kg']
            ]]
        ],
        useCases: ['Local LLM development', 'Fine-tuning and inference', 'AI education and research', 'Prototyping before data center deployment']
    },

    'asus-acc': {
        sources: [['ASUS Control Center Data Center Edition', 'https://www.asus.com/event/ASUS-Control-Center-Data-Center-Edition/']],
        overview: [
            "ASUS Control Center Data Center Edition is a unified management platform for HPC, AI and enterprise infrastructure. From one dashboard it monitors hardware health, power and carbon emissions, automates updates and secures mixed server fleets.",
            "It works out-of-band through the ASMB BMC on ASUS servers and scales to thousands of nodes."
        ],
        highlights: [
            ['ph-heartbeat', 'Real-time monitoring', 'Hardware, sensor, VM and storage health with proactive alerts.'],
            ['ph-arrows-clockwise', 'Automated patching', 'Update BIOS through OS across thousands of nodes in a few clicks.'],
            ['ph-leaf', 'Power and carbon reporting', 'Node, rack and facility power with monthly carbon reports.'],
            ['ph-lock', 'Security controls', 'Multi-factor authentication, RBAC, IP access control and audit logs.'],
            ['ph-cube', 'POD View', '3D visualisation of the server room to find free space and failed hardware.']
        ],
        specs: [
            ['Capabilities', [
                ['Monitoring', 'Real-time hardware and sensor health, VM and storage checks, hourly trend reports'],
                ['Automation', 'BIOS-to-OS patching, task scheduler, group-based management'],
                ['Security', 'MFA, RBAC, IP access control, software blacklists, security reports'],
                ['Sustainability', 'Node, rack and facility power metering; monthly carbon emission reports'],
                ['Reporting', 'Custom dashboards, hardware inventory and software usage reports, audit-ready logs'],
                ['Visualisation', 'POD View 3D server room map'],
                ['Out-of-band', 'ASUS ASMB BMC integration']
            ]]
        ],
        useCases: ['Fleet management across data centers', 'AI and HPC cluster operations', 'Firmware lifecycle management', 'Energy and ESG reporting']
    },

    /* ---------------- Pre-booking (new launches) ---------------- */
    'asus-expertcenter-pro-et900n-g3': {
        model: 'ET900N G3',
        sources: [
            ['ASUS ExpertCenter Pro ET900N G3', 'https://www.asus.com/displays-desktops/workstations/performance/expertcenter-pro-et900n-g3/'],
            ['ExpertCenter Pro ET900N G3 tech specs', 'https://www.asus.com/displays-desktops/workstations/performance/expertcenter-pro-et900n-g3/techspec/']
        ],
        overview: [
            "The ASUS ExpertCenter Pro ET900N G3 is a deskside AI supercomputer built on NVIDIA DGX Station architecture. It is powered by the NVIDIA GB300 Grace Blackwell Ultra Desktop Superchip with 748 GB of coherent memory and up to 20 petaFLOPS of AI performance, in a standard tower form factor.",
            "It runs the NVIDIA AI software stack and supports NVIDIA NemoClaw and NVIDIA AI Enterprise, so teams can develop, fine-tune and run large models and autonomous AI agents locally. NVIDIA NVLink-C2C and two ConnectX-8 SuperNIC ports provide the bandwidth to scale beyond a single system.",
            "Closed-loop AIO liquid cooling sustains performance under heavy AI workloads while keeping noise to about 50 dB in Auto mode, and an ASPEED BMC with IPMI and Redfish allows remote management like a server."
        ],
        highlights: [
            ['ph-cpu', 'NVIDIA GB300', 'Grace CPU with 72 Arm Neoverse V2 cores and a Blackwell Ultra GPU on one superchip.'],
            ['ph-memory', '748 GB coherent memory', '496 GB LPDDR5X CPU memory plus 252 GB HBM3e GPU memory.'],
            ['ph-lightning', 'Up to 20 PFLOPS', 'Train, fine-tune and serve large models at the deskside.'],
            ['ph-network', 'ConnectX-8 SuperNIC', 'Two 400G QSFP112 ports to link systems and storage.'],
            ['ph-robot', 'Agent ready', 'Supports NVIDIA NemoClaw for secure, policy-controlled AI agents.'],
            ['ph-thermometer-cold', 'Liquid cooled', 'Closed-loop AIO cooling, about 50 dB in Auto mode.']
        ],
        specs: [
            ['Compute', [
                ['Superchip', 'NVIDIA GB300 Grace Blackwell Ultra Desktop Superchip'],
                ['CPU', 'NVIDIA Grace, 72 Arm Neoverse V2 cores'],
                ['GPU', 'NVIDIA Blackwell Ultra'],
                ['AI performance', 'Up to 20 PFLOPS'],
                ['Interconnect', 'NVIDIA NVLink-C2C']
            ]],
            ['Memory & storage', [
                ['Coherent memory', '748 GB'],
                ['CPU memory', '496 GB LPDDR5X (396 GB/s)'],
                ['GPU memory', '252 GB HBM3e (7.1 TB/s)'],
                ['Storage', '4× M.2 2280: 2× PCIe 5.0 x4 (OS, RAID 1) and 2× PCIe 6.0 x4 (data); includes 2× 2 TB NVMe SSDs for the OS']
            ]],
            ['Expansion & graphics', [
                ['PCIe slots', '3× PCIe 5.0 x16 slots (x16, x8, x8)'],
                ['Optional graphics', 'One NVIDIA RTX PRO 6000 Blackwell Max-Q, RTX PRO 4000 Blackwell SFF or RTX PRO 2000 Blackwell']
            ]],
            ['Networking & I/O', [
                ['Networking', '2× NVIDIA ConnectX-8 SuperNIC QSFP112 (400G), 1× Marvell 10 GbE, 1× 1 GbE BMC management'],
                ['Front I/O', '2× USB-C 10 Gbps, 2× USB-A 10 Gbps, 1× USB 2.0, headphone and microphone jacks'],
                ['Rear I/O', '4× USB-A 10 Gbps, Micro USB COM (BMC), mini DisplayPort (BMC), 3× audio jacks']
            ]],
            ['Management & software', [
                ['Operating system', 'Ubuntu with NVIDIA AI developer tools'],
                ['Software', 'NVIDIA AI software stack, NVIDIA AI Enterprise, NVIDIA NemoClaw, ASUS Zenni AI Hub'],
                ['Management', 'ASPEED AST2600 BMC, IPMI 2.0 and DMTF Redfish; TPM 2.0']
            ]],
            ['Physical', [
                ['Power supply', '1600 W 80 PLUS Titanium ATX'],
                ['Cooling', 'Closed-loop AIO liquid cooling, about 50 dB in Auto mode'],
                ['Dimensions', '584 × 232 × 565 mm (23.0 × 9.1 × 22.3 in)'],
                ['Weight', '27 kg net, 32 kg gross'],
                ['Operating temperature', '10 °C to 35 °C']
            ]]
        ],
        useCases: ['Local LLM training and fine-tuning', 'Autonomous AI agents', 'Healthcare and medical research', 'Automotive and aerospace engineering', 'Smart infrastructure', 'AI development teams'],
        specNote: 'ASUS lists these as preliminary specifications, subject to change before shipping. Plan Man confirms the final configuration and delivery date with your pre-booking.'
    },

    'asus-proart-gr1x': {
        model: 'ProArt GR1X',
        sources: [
            ['ASUS ProArt GR1X Mini PC', 'https://www.asus.com/displays-desktops/mini-pcs/proart-mini-pc-series/proart-gr1x-mini-pc/'],
            ['ProArt GR1X tech specs', 'https://www.asus.com/displays-desktops/mini-pcs/proart-mini-pc-series/proart-gr1x-mini-pc/techspec/']
        ],
        overview: [
            "The ASUS ProArt GR1X is a compact Windows mini PC powered by the NVIDIA RTX Spark superchip, which pairs a 6144-core NVIDIA Blackwell RTX GPU with a 20-core NVIDIA Grace CPU. It delivers up to 1 petaFLOP of FP4 AI performance and up to 128 GB of unified memory in a 150 × 150 × 51 mm chassis of about 1.1 litres.",
            "It is built to run AI agents around the clock and larger models locally, with native NVIDIA CUDA support for developers, NVIDIA Studio acceleration for creators, and RTX graphics for 3D and gaming. A 140 W design with engineered cooling keeps performance steady through long workloads."
        ],
        highlights: [
            ['ph-cpu', 'NVIDIA RTX Spark', '6144-core Blackwell RTX GPU and 20-core Grace CPU on one superchip.'],
            ['ph-memory', 'Up to 128 GB', 'Unified memory for models of up to about 120B parameters.'],
            ['ph-lightning', '1 petaFLOP FP4', 'Run AI agents, local LLMs and AI creative tools on the desk.'],
            ['ph-windows-logo', 'Native Windows 11', 'Windows 11 Pro or Home with familiar apps and workflows.'],
            ['ph-monitor', 'Quad 4K displays', 'HDMI 2.1 plus three USB-C ports with DisplayPort Alt Mode.'],
            ['ph-cube', '1.1-litre design', '150 × 150 × 51 mm, 1.48 kg, in black or silver.']
        ],
        specs: [
            ['Compute', [
                ['Superchip', 'NVIDIA RTX Spark N1X'],
                ['CPU', '20-core NVIDIA Grace'],
                ['GPU', 'NVIDIA Blackwell RTX, 6144 cores'],
                ['AI performance', 'Up to 1 petaFLOP (FP4)'],
                ['TDP', '140 W']
            ]],
            ['Memory & storage', [
                ['Memory', '64 GB or 128 GB LPDDR5X unified memory'],
                ['Storage', '1 TB or 2 TB M.2 NVMe PCIe 4.0, or 4 TB M.2 NVMe PCIe 5.0; dual M.2 slots']
            ]],
            ['Connectivity', [
                ['Wireless', 'Wi-Fi 7 2×2, Bluetooth 5.4'],
                ['LAN', '1× 10G RJ45'],
                ['Rear I/O', '1× USB 3.2 Gen 2×2 Type-C with PD input, 3× USB 3.2 Gen 2×2 Type-C (DisplayPort Alt Mode), 1× HDMI 2.1, Kensington lock slot'],
                ['Displays', 'Up to four 4K displays']
            ]],
            ['Physical', [
                ['Operating system', 'Windows 11 Pro or Windows 11 Home'],
                ['Power', '240 W adapter'],
                ['Dimensions', '150 × 150 × 51 mm'],
                ['Weight', '1.48 kg'],
                ['Colours', 'Black (anodized) or Silver (sandblasted)']
            ]]
        ],
        useCases: ['Always-on AI agents', 'Local LLM development', 'Video editing and 3D rendering', 'AI-assisted creative work', 'Compact office workstation'],
        specNote: 'Memory and storage vary by configuration. Plan Man confirms the configuration and delivery date with your pre-booking.'
    },

    'msi-prestige-n16-flip-ai-plus': {
        model: 'Prestige N16 Flip AI+ C1XM',
        sources: [
            ['MSI Prestige N16 Flip AI+', 'https://www.msi.com/Business-Productivity/Prestige-N16-Flip-AI-Plus-C1XMX'],
            ['Prestige N16 Flip AI+ specifications', 'https://www.msi.com/Business-Productivity/Prestige-N16-Flip-AI-Plus-C1XMX/Specification']
        ],
        overview: [
            "The MSI Prestige N16 Flip AI+ is a 16-inch 2-in-1 Copilot+ PC powered by NVIDIA RTX Spark, with a 6144-core NVIDIA Blackwell RTX GPU and a 20-core NVIDIA Grace CPU. With up to 128 GB of unified memory it can run larger AI models and agents locally, for developers, creators and professionals.",
            "A 360° convertible OLED touch display with MSI Nano Pen support, a 99.9 Wh battery with 140 W USB-C fast charging, and a vapor chamber cooler with Intra Flow keep it productive away from the desk. Plan Man offers it in two configurations: 64 GB / 1 TB with a 2.8K OLED display, and 128 GB / 2 TB with a UHD+ Tandem OLED display."
        ],
        highlights: [
            ['ph-cpu', 'NVIDIA RTX Spark N1X', '6144-core Blackwell RTX GPU and 20-core Grace CPU.'],
            ['ph-memory', 'Up to 128 GB', 'Unified memory for local LLMs of up to 120B parameters.'],
            ['ph-monitor', 'OLED touch display', '2.8K OLED or UHD+ Tandem OLED, 120 Hz, 100% DCI-P3, DisplayHDR True Black 1000.'],
            ['ph-arrows-clockwise', '360° flip', 'Laptop, tent and tablet modes, with MSI Nano Pen.'],
            ['ph-battery-full', '99.9 Wh battery', '140 W USB-C PD 3.1 fast charging.'],
            ['ph-shield-check', 'Business security', 'dTPM 2.0, Microsoft Pluton, fingerprint reader and webcam shutter.']
        ],
        specs: [
            ['Platform', [
                ['Processor', 'NVIDIA RTX Spark N1X with 6144-core GPU and 20-core CPU'],
                ['Graphics', 'NVIDIA Blackwell RTX GPU, 6144 cores'],
                ['Chipset', 'Integrated SoC'],
                ['Operating system', 'Windows 11 Pro']
            ]],
            ['Memory & storage', [
                ['Memory', '64 GB or 128 GB LPDDR5x-9400 unified memory'],
                ['Storage', '1 TB or 2 TB M.2 NVMe PCIe Gen4 SSD']
            ]],
            ['Display', [
                ['Config 1', '16" 16:10 2.8K (2880 × 1800) OLED, 120 Hz, 100% DCI-P3, touch, Gorilla Glass'],
                ['Config 2', '16" 16:10 UHD+ (3840 × 2400) Tandem OLED, 120 Hz, 100% DCI-P3, touch, Gorilla Glass'],
                ['Certification', 'VESA DisplayHDR True Black 1000; SGS low blue light'],
                ['Pen', 'MSI Nano Pen support']
            ]],
            ['Connectivity', [
                ['Wireless', 'MediaTek Wi-Fi 7, Bluetooth 5.4'],
                ['Ports', '2× USB4 Type-C (DisplayPort, PD 3.1, Thunderbolt 4 compatible), 2× USB-A 3.2 Gen 2, HDMI 2.1 (8K @ 120 Hz), SD card reader, audio combo jack'],
                ['Webcam', 'FHD IR camera with HDR and shutter']
            ]],
            ['Design & security', [
                ['Keyboard', '4-zone RGB keyboard with Copilot key'],
                ['Security', 'dTPM 2.0, Microsoft Pluton, fingerprint reader'],
                ['Audio', '2× 2 W speakers, 2× 2 W woofers, array microphone'],
                ['Colour', 'Platinum Gray']
            ]],
            ['Power & physical', [
                ['Battery', '4-cell, 99.9 Wh'],
                ['Adapter', '140 W USB-C PD'],
                ['Dimensions', '357.7 × 254.3 × 13.9–16.9 mm'],
                ['Weight', '1.9 kg'],
                ['Warranty', '2 years']
            ]]
        ],
        models: [
            ['Config 1 · 64 GB / 1 TB', 'NVIDIA RTX Spark N1X, 64 GB LPDDR5x-9400, 1 TB NVMe PCIe Gen4 SSD, 16" 2.8K OLED 120 Hz touch, MSI Nano Pen, Windows 11 Pro, 2-year warranty'],
            ['Config 2 · 128 GB / 2 TB', 'NVIDIA RTX Spark N1X, 128 GB LPDDR5x-9400, 2 TB NVMe PCIe Gen4 SSD, 16" UHD+ Tandem OLED 120 Hz touch, MSI Nano Pen, Windows 11 Pro, 2-year warranty']
        ],
        useCases: ['Local AI agents and LLMs', 'Software development', 'Video and 3D creation', 'Executive and field work', 'Presentations and pen input'],
        specNote: 'Configurations as offered by Plan Man in the UAE. Final specifications are set by MSI and confirmed with your pre-booking.'
    }
};
