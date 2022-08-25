import { BadRequestException, PipeTransform } from '@nestjs/common';
import { StudyStatus } from '../study-status.enum';

export class StudyStatusValidationPipe implements PipeTransform {
  readonly StatusOptions = [StudyStatus.PRIVATE, StudyStatus.PUBLIC];
  transform(value: any) {
    value = value.toUpperCase();
    if (!this.isStatusValid(value)) {
      throw new BadRequestException(`${value} isn't in the status options`);
    }
    return value;
  }

  private isStatusValid(status: any) {
    const index = this.StatusOptions.indexOf(status);
    return index !== -1;
  }
}
