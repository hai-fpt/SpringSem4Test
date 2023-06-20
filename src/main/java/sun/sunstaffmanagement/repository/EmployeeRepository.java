package sun.sunstaffmanagement.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import sun.sunstaffmanagement.models.Employee;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {
}
