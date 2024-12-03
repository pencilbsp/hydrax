export class Semaphore {
    private maxConcurrency: number;
    private currentCount: number;
    private queue: Array<() => void>;

    constructor(maxConcurrency: number) {
        this.maxConcurrency = maxConcurrency;
        this.currentCount = 0;
        this.queue = [];
    }

    async acquire(): Promise<void> {
        if (this.currentCount < this.maxConcurrency) {
            this.currentCount++;
            return;
        }
        return new Promise<void>((resolve) => this.queue.push(resolve));
    }

    release(): void {
        if (this.queue.length > 0) {
            const resolve = this.queue.shift();
            resolve?.();
        } else {
            this.currentCount--;
        }
    }
}

// Sử dụng Semaphore
// const semaphore = new Semaphore(2);

// const runTask = async (index: number): Promise<void> => {
//     await semaphore.acquire();
//     console.log(`Task ${index} started`);
//     await new Promise<void>((resolve) => setTimeout(resolve, 1000)); // Mô phỏng tác vụ
//     console.log(`Task ${index} finished`);
//     semaphore.release();
// };

// (async () => {
//     const tasks = Array.from({ length: 5 }, (_, i) => runTask(i));
//     await Promise.all(tasks); // Đợi tất cả các tác vụ hoàn thành
// })();
