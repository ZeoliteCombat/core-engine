import logging

# Set up logging configuration
logging.basicConfig(level=logging.INFO, format='%(asctime)s [%(levelname)s] %(message)s')

class Engine:
    def __init__(self, name, power=100):
        self.name = name
        self.power = power

    def start(self):
        logging.info(f'Starting {self.name} engine with power {self.power}')

    def stop(self):
        logging.info(f'Stopping {self.name} engine')

class Car:
    def __init__(self, engine, wheels=4):
        self.engine = engine
        self.wheels = wheels

    def start_engine(self):
        self.engine.start()

    def stop_engine(self):
        self.engine.stop()

def main():
    logging.info('Starting main program')

    engine = Engine('V8')
    car = Car(engine)
    car.start_engine()
    car.stop_engine()

    logging.info('Finishing main program')

if __name__ == '__main__':
    main()