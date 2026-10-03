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
    }
};
