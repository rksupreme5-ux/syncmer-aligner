import init, { process_fastq } from './pkg/syncmer_aligner.js';

init().then(() => {
    self.postMessage({ type: 'READY' });
});

self.onmessage = (event) => {
    const { dna, k, s } = event.data;
    const startTime = performance.now();
    
    const metrics = process_fastq(dna, k, s);
    const endTime = performance.now();
    
    self.postMessage({
        type: 'RESULT',
        metrics: {
            status: metrics.status,
            reads_processed: metrics.reads_processed,
            bases_processed: metrics.bases_processed,
            syncmers_indexed: metrics.syncmers_indexed,
            compression_ratio: metrics.compression_ratio.toFixed(2),
            time_ms: (endTime - startTime).toFixed(2)
        }
    });
    
    metrics.free(); 
};