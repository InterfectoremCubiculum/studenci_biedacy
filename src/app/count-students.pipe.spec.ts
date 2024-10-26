import { CountStudentsPipe } from './count-students.pipe';

describe('CountStudentsPipe', () => {
  it('create an instance', () => {
    const pipe = new CountStudentsPipe();
    expect(pipe).toBeTruthy();
  });
});
