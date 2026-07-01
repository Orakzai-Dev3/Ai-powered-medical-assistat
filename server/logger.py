import logging

def setup_logger(name='Assistant'):
    # creating logger object
    logger = logging.getLogger(name)
    # setting logger level  like which kind of logging method is it gonna accept
    logger.setLevel(logging.DEBUG)
    # initializing looging for console
    ch = logging.StreamHandler()
    ch.setLevel(logging.DEBUG)
    # setting format for logging
    formatter = logging.Formatter("[%(asctime)s] %(levelname)s - %(message)s")
    ch.setFormatter(formatter)
    # adding handler to logger
    logger.addHandler(ch)

    if not logger.hasHandlers():
        logger.addHandler(ch)
    return logger

logger = setup_logger()
logger.info("Logger initialized successfully.") 
logger.debug("This is a debug message.")
logger.warning("This is a warning message.")