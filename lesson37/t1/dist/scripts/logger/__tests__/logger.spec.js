import { createLogger } from "../logger";

it('should return empty arr', () => {
    expect(createLogger().getLogs()).toEqual([]);
})

it('should save logs', () => {
    const logger = createLogger('new user');
    logger.log('log1')

    expect(logger.getLogs()).toEqual(['log - new user - log1']);
})

it('should save errors', () => {
    const logger = createLogger('new user');
    logger.error('error1')

    expect(logger.getLogs()).toEqual(['error - new user - error1']);
})